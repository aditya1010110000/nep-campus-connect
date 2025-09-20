import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Plus, Users, Upload, GraduationCap, BookOpen, AlertCircle, TrendingUp, Edit, Trash2, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Student {
  id: string;
  name: string;
  email: string;
  batch: string;
  semester: number;
  electives: string[];
  creditsRegistered: number;
  creditsCompleted: number;
  status: "Active" | "Inactive";
  enrollmentDate: string;
}

export default function ManageStudentPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isExcelUploaderOpen, setIsExcelUploaderOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [deletingStudent, setDeletingStudent] = useState<Student | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    batch: "",
    semester: 1,
    electives: "",
    creditsRegistered: 0,
    creditsCompleted: 0,
    status: "Active" as "Active" | "Inactive"
  });

  const [students, setStudents] = useState<Student[]>([
    {
      id: "S001",
      name: "Rahul Kumar",
      email: "rahul.kumar@student.edu",
      batch: "CSE-2023",
      semester: 3,
      electives: ["CS301", "CS305"],
      creditsRegistered: 20,
      creditsCompleted: 40,
      status: "Active",
      enrollmentDate: "2023-08-15"
    },
    {
      id: "S002",
      name: "Priya Sharma",
      email: "priya.sharma@student.edu",
      batch: "ECE-2023",
      semester: 3,
      electives: ["EC301", "EC302"],
      creditsRegistered: 22,
      creditsCompleted: 44,
      status: "Active",
      enrollmentDate: "2023-08-15"
    },
    {
      id: "S003",
      name: "Arjun Singh",
      email: "arjun.singh@student.edu",
      batch: "ME-2022",
      semester: 5,
      electives: ["ME401", "ME403"],
      creditsRegistered: 18,
      creditsCompleted: 72,
      status: "Active",
      enrollmentDate: "2022-08-10"
    },
    {
      id: "S004",
      name: "Sneha Patel",
      email: "sneha.patel@student.edu",
      batch: "CSE-2024",
      semester: 1,
      electives: [],
      creditsRegistered: 24,
      creditsCompleted: 0,
      status: "Active",
      enrollmentDate: "2024-08-20"
    }
  ]);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.batch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      batch: "",
      semester: 1,
      electives: "",
      creditsRegistered: 0,
      creditsCompleted: 0,
      status: "Active"
    });
  };

  const handleAdd = () => {
    const newStudent: Student = {
      id: `S${String(students.length + 1).padStart(3, '0')}`,
      ...formData,
      electives: formData.electives.split(',').map(e => e.trim()).filter(e => e),
      enrollmentDate: new Date().toISOString().split('T')[0]
    };
    setStudents([...students, newStudent]);
    setIsAddDialogOpen(false);
    resetForm();
    toast({
      title: "Student Added",
      description: `${formData.name} has been added successfully.`,
    });
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setFormData({
      name: student.name,
      email: student.email,
      batch: student.batch,
      semester: student.semester,
      electives: student.electives.join(', '),
      creditsRegistered: student.creditsRegistered,
      creditsCompleted: student.creditsCompleted,
      status: student.status
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdate = () => {
    if (!selectedStudent) return;
    
    setStudents(students.map(student =>
      student.id === selectedStudent.id
        ? { 
            ...student, 
            ...formData, 
            electives: formData.electives.split(',').map(e => e.trim()).filter(e => e)
          }
        : student
    ));
    setIsEditDialogOpen(false);
    setSelectedStudent(null);
    resetForm();
    toast({
      title: "Student Updated",
      description: `${formData.name}'s information has been updated.`,
    });
  };

  const handleDelete = (student: Student) => {
    setDeletingStudent(student);
  };

  const confirmDelete = () => {
    if (deletingStudent) {
      setStudents(students.filter(s => s.id !== deletingStudent.id));
      toast({
        title: "Student Deleted",
        description: `${deletingStudent.name} has been successfully removed.`,
      });
      setDeletingStudent(null);
    }
  };

  const handleExcelUpload = () => {
    // Simulate Excel upload
    toast({
      title: "Excel Upload",
      description: "Excel upload functionality would be implemented here.",
    });
    setIsExcelUploaderOpen(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Students</h1>
          <p className="text-muted-foreground mt-1">
            Add, edit, and manage student records for the TIMEgrid scheduling system.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.length}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8% from last semester
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">12,567</div>
            <p className="text-xs text-muted-foreground">
              Course registrations
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">47</div>
            <p className="text-xs text-muted-foreground">
              Require attention
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upload Data</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setIsExcelUploaderOpen(true)}
              className="w-full text-sm"
              variant="secondary"
            >
              <Upload className="w-3 h-3 mr-1" />
              Upload Excel
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Bulk import students
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search students by name, email, or batch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsExcelUploaderOpen(true)} className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload Excel
              </Button>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Student
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New Student</DialogTitle>
                    <DialogDescription>
                      Enter the details of the new student.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Rahul Kumar"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="rahul.kumar@student.edu"
                      />
                    </div>
                    <div>
                      <Label htmlFor="batch">Batch</Label>
                      <Input
                        id="batch"
                        value={formData.batch}
                        onChange={(e) => setFormData({...formData, batch: e.target.value})}
                        placeholder="CSE-2023"
                      />
                    </div>
                    <div>
                      <Label htmlFor="semester">Semester</Label>
                      <Select value={formData.semester.toString()} onValueChange={(value) => setFormData({...formData, semester: parseInt(value)})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map(sem => (
                            <SelectItem key={sem} value={sem.toString()}>{sem}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="electives">Electives (comma-separated)</Label>
                      <Input
                        id="electives"
                        value={formData.electives}
                        onChange={(e) => setFormData({...formData, electives: e.target.value})}
                        placeholder="CS301, CS305"
                      />
                    </div>
                    <div>
                      <Label htmlFor="creditsRegistered">Credits Registered</Label>
                      <Input
                        id="creditsRegistered"
                        type="number"
                        value={formData.creditsRegistered}
                        onChange={(e) => setFormData({...formData, creditsRegistered: parseInt(e.target.value) || 0})}
                        placeholder="20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="creditsCompleted">Credits Completed</Label>
                      <Input
                        id="creditsCompleted"
                        type="number"
                        value={formData.creditsCompleted}
                        onChange={(e) => setFormData({...formData, creditsCompleted: parseInt(e.target.value) || 0})}
                        placeholder="40"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAdd}>Add Student</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Student Records ({filteredStudents.length})
          </CardTitle>
          <CardDescription>
            Manage all student records, their course enrollments, and academic progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Electives</TableHead>
                <TableHead>Credits Reg.</TableHead>
                <TableHead>Credits Comp.</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.batch}</TableCell>
                  <TableCell>{student.semester}</TableCell>
                  <TableCell>{student.electives.join(', ') || 'None'}</TableCell>
                  <TableCell>{student.creditsRegistered}</TableCell>
                  <TableCell>{student.creditsCompleted}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(student)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(student)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Student</DialogTitle>
            <DialogDescription>
              Update the student's information.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="edit-batch">Batch</Label>
              <Input
                id="edit-batch"
                value={formData.batch}
                onChange={(e) => setFormData({...formData, batch: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="edit-semester">Semester</Label>
              <Select value={formData.semester.toString()} onValueChange={(value) => setFormData({...formData, semester: parseInt(value)})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8].map(sem => (
                    <SelectItem key={sem} value={sem.toString()}>{sem}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-electives">Electives (comma-separated)</Label>
              <Input
                id="edit-electives"
                value={formData.electives}
                onChange={(e) => setFormData({...formData, electives: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="edit-creditsRegistered">Credits Registered</Label>
              <Input
                id="edit-creditsRegistered"
                type="number"
                value={formData.creditsRegistered}
                onChange={(e) => setFormData({...formData, creditsRegistered: parseInt(e.target.value) || 0})}
              />
            </div>
            <div>
              <Label htmlFor="edit-creditsCompleted">Credits Completed</Label>
              <Input
                id="edit-creditsCompleted"
                type="number"
                value={formData.creditsCompleted}
                onChange={(e) => setFormData({...formData, creditsCompleted: parseInt(e.target.value) || 0})}
              />
            </div>
            <div>
              <Label htmlFor="edit-status">Status</Label>
              <Select value={formData.status} onValueChange={(value: "Active" | "Inactive") => setFormData({...formData, status: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdate}>Update Student</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Excel Uploader Dialog */}
      <Dialog open={isExcelUploaderOpen} onOpenChange={setIsExcelUploaderOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Excel File</DialogTitle>
            <DialogDescription>
              Upload an Excel file containing student data to bulk import students.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="excel-file">Select Excel File</Label>
              <Input
                id="excel-file"
                type="file"
                accept=".xlsx,.xls"
                className="cursor-pointer"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Expected columns: Name, Email, Batch, Semester, Electives, Credits Registered, Credits Completed</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsExcelUploaderOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleExcelUpload}>Upload</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingStudent} onOpenChange={() => setDeletingStudent(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Student Record</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {deletingStudent?.name}'s record? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}