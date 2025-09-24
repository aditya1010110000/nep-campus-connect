import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Users, Plus, Edit, Trash2, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Faculty {
  id: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  phone: string;
  joiningDate: string;
  status: "Active" | "Inactive";
}

const ManageFaculty = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    phone: "",
    status: "Active" as "Active" | "Inactive",
  });

  const [facultyList, setFacultyList] = useState<Faculty[]>([
    {
      id: "1",
      name: "Dr. Anil Kumar",
      email: "anil.kumar@university.in",
      department: "Computer Science",
      designation: "Professor",
      phone: "+91 98765-43210",
      joiningDate: "2017-06-20",
      status: "Active",
    },
    {
      id: "2",
      name: "Prof. Priya Sharma",
      email: "priya.sharma@university.in",
      department: "Mathematics",
      designation: "Associate Professor",
      phone: "+91 87654-32109",
      joiningDate: "2019-11-12",
      status: "Active",
    },
    {
      id: "3",
      name: "Dr. Ramesh Patel",
      email: "ramesh.patel@university.in",
      department: "Physics",
      designation: "Assistant Professor",
      phone: "+91 76543-21098",
      joiningDate: "2021-02-05",
      status: "Active",
    },
    {
      id: "4",
      name: "Prof. Neha Verma",
      email: "neha.verma@university.in",
      department: "Chemistry",
      designation: "Professor",
      phone: "+91 99887-77665",
      joiningDate: "2016-08-18",
      status: "Inactive",
    },
    {
      id: "5",
      name: "Dr. Arjun Mehta",
      email: "arjun.mehta@university.in",
      department: "Electronics",
      designation: "Professor",
      phone: "+91 91234-56789",
      joiningDate: "2015-01-25",
      status: "Active",
    },
    {
      id: "6",
      name: "Prof. Kavita Nair",
      email: "kavita.nair@university.in",
      department: "English",
      designation: "Associate Professor",
      phone: "+91 93456-78901",
      joiningDate: "2018-09-03",
      status: "Active",
    },
    {
      id: "7",
      name: "Dr. Vikram Singh",
      email: "vikram.singh@university.in",
      department: "Mechanical Engineering",
      designation: "Assistant Professor",
      phone: "+91 94567-12345",
      joiningDate: "2020-12-14",
      status: "Active",
    },
    {
      id: "8",
      name: "Prof. Sneha Iyer",
      email: "sneha.iyer@university.in",
      department: "Civil Engineering",
      designation: "Professor",
      phone: "+91 95678-54321",
      joiningDate: "2014-05-10",
      status: "Active",
    },
  ]);

  const filteredFaculty = facultyList.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      department: "",
      designation: "",
      phone: "",
      status: "Active",
    });
  };

  const handleAdd = () => {
    const newFaculty: Faculty = {
      id: Date.now().toString(),
      ...formData,
      joiningDate: new Date().toISOString().split("T")[0],
    };
    setFacultyList([...facultyList, newFaculty]);
    setIsAddDialogOpen(false);
    resetForm();
    toast({
      title: "Faculty Added",
      description: `${formData.name} has been added successfully.`,
    });
  };

  const handleEdit = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setFormData({
      name: faculty.name,
      email: faculty.email,
      department: faculty.department,
      designation: faculty.designation,
      phone: faculty.phone,
      status: faculty.status,
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdate = () => {
    if (!selectedFaculty) return;

    setFacultyList(
      facultyList.map((faculty) =>
        faculty.id === selectedFaculty.id
          ? { ...faculty, ...formData }
          : faculty
      )
    );
    setIsEditDialogOpen(false);
    setSelectedFaculty(null);
    resetForm();
    toast({
      title: "Faculty Updated",
      description: `${formData.name}'s information has been updated.`,
    });
  };

  const handleDelete = (faculty: Faculty) => {
    setFacultyList(facultyList.filter((f) => f.id !== faculty.id));
    toast({
      title: "Faculty Removed",
      description: `${faculty.name} has been removed from the system.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Manage Faculty</h1>
        <p className="text-muted-foreground mt-2">
          Add, edit, and manage faculty members in the system.
        </p>
      </div>

      {/* Controls */}
      <Card className="nep-card">
        <CardContent className="p-6">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search faculty by name, email, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Faculty
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Faculty</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new faculty member.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Dr. John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john.doe@university.edu"
                    />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      placeholder="Computer Science"
                    />
                  </div>
                  <div className="">
                    <Label htmlFor="designation">Designation</Label>
                    <Select
                      value={formData.designation}
                      onValueChange={(value) =>
                        setFormData({ ...formData, designation: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select designation" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="Professor">Professor</SelectItem>
                        <SelectItem value="Associate Professor">
                          Associate Professor
                        </SelectItem>
                        <SelectItem value="Assistant Professor">
                          Assistant Professor
                        </SelectItem>
                        <SelectItem value="Lecturer">Lecturer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 234-567-8900"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleAdd}>Add Faculty</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Faculty Table */}
      <Card className="nep-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Faculty Members ({filteredFaculty.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFaculty.map((faculty) => (
                <TableRow key={faculty.id}>
                  <TableCell className="font-medium">{faculty.name}</TableCell>
                  <TableCell>{faculty.email}</TableCell>
                  <TableCell>{faculty.department}</TableCell>
                  <TableCell>{faculty.designation}</TableCell>
                  <TableCell>{faculty.phone}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        faculty.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {faculty.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(faculty)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(faculty)}
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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Faculty</DialogTitle>
            <DialogDescription>
              Update the faculty member's information.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="edit-department">Department</Label>
              <Input
                id="edit-department"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="edit-designation">Designation</Label>
              <Select
                value={formData.designation}
                onValueChange={(value) =>
                  setFormData({ ...formData, designation: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Professor">Professor</SelectItem>
                  <SelectItem value="Associate Professor">
                    Associate Professor
                  </SelectItem>
                  <SelectItem value="Assistant Professor">
                    Assistant Professor
                  </SelectItem>
                  <SelectItem value="Lecturer">Lecturer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-phone">Phone</Label>
              <Input
                id="edit-phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="edit-status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: "Active" | "Inactive") =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleUpdate}>Update Faculty</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageFaculty;
