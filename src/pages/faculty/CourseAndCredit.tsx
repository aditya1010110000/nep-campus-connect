import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  GraduationCap, 
  Users,
  Award,
  FileText,
  TrendingUp
} from "lucide-react";

// Table components defined inline
const Table = ({ children, className = "", ...props }: any) => (
  <div className="w-full overflow-auto">
    <table className={`w-full caption-bottom text-sm ${className}`} {...props}>
      {children}
    </table>
  </div>
);

const TableHeader = ({ children, className = "", ...props }: any) => (
  <thead className={`[&_tr]:border-b ${className}`} {...props}>
    {children}
  </thead>
);

const TableBody = ({ children, className = "", ...props }: any) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props}>
    {children}
  </tbody>
);

const TableRow = ({ children, className = "", ...props }: any) => (
  <tr className={`border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-muted ${className}`} {...props}>
    {children}
  </tr>
);

const TableHead = ({ children, className = "", ...props }: any) => (
  <th className={`h-12 px-4 text-left align-middle font-medium text-gray-600 [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </th>
);

const TableCell = ({ children, className = "", ...props }: any) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </td>
);

interface Course {
  id: string;
  courseCode: string;
  courseName: string;
  semester: string;
  credits: number;
  department: string;
  studentsEnrolled: number;
  type: 'theory' | 'lab' | 'project';
}

const CoursesAndCredits = () => {
  const [courses] = useState<Course[]>([
    {
      id: '1',
      courseCode: 'CS301',
      courseName: 'Data Structures',
      semester: 'Sem 3',
      credits: 4,
      department: 'Computer Science',
      studentsEnrolled: 120,
      type: 'theory'
    },
    {
      id: '2',
      courseCode: 'CS301L',
      courseName: 'Data Structures Lab',
      semester: 'Sem 3',
      credits: 2,
      department: 'Computer Science',
      studentsEnrolled: 120,
      type: 'lab'
    },
    {
      id: '3',
      courseCode: 'CS502',
      courseName: 'Machine Learning',
      semester: 'Sem 5',
      credits: 3,
      department: 'Computer Science',
      studentsEnrolled: 90,
      type: 'theory'
    },
    {
      id: '4',
      courseCode: 'CS502L',
      courseName: 'Machine Learning Lab',
      semester: 'Sem 5',
      credits: 2,
      department: 'Computer Science',
      studentsEnrolled: 90,
      type: 'lab'
    },
    {
      id: '5',
      courseCode: 'CS401',
      courseName: 'Software Engineering',
      semester: 'Sem 4',
      credits: 3,
      department: 'Computer Science',
      studentsEnrolled: 105,
      type: 'theory'
    },
    {
      id: '6',
      courseCode: 'CS601',
      courseName: 'Major Project',
      semester: 'Sem 6',
      credits: 4,
      department: 'Computer Science',
      studentsEnrolled: 65,
      type: 'project'
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'theory':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'lab':
        return <GraduationCap className="w-5 h-5 text-green-600" />;
      case 'project':
        return <Award className="w-5 h-5 text-purple-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'theory':
        return 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100';
      case 'lab':
        return 'bg-green-50 border-green-200 hover:bg-green-100';
      case 'project':
        return 'bg-purple-50 border-purple-200 hover:bg-purple-100';
      default:
        return 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100';
    }
  };

  const getCreditsColor = (type: string) => {
    switch (type) {
      case 'theory':
        return 'text-indigo-600 bg-indigo-100';
      case 'lab':
        return 'text-green-600 bg-green-100';
      case 'project':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-indigo-600 bg-indigo-100';
    }
  };

  // Calculate summary statistics
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const totalCourses = courses.length;
  const averageStudents = Math.round(courses.reduce((sum, course) => sum + course.studentsEnrolled, 0) / totalCourses);
  const totalStudents = courses.reduce((sum, course) => sum + course.studentsEnrolled, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600">Academic Overview</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Courses & Credits</h1>
          <p className="text-lg text-gray-600">
            View courses you are teaching along with credit details
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Credits</p>
                  <p className="text-2xl font-bold text-indigo-600">{totalCredits}</p>
                </div>
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Courses</p>
                  <p className="text-2xl font-bold text-green-600">{totalCourses}</p>
                </div>
                <FileText className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-purple-600">{totalStudents}</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Students</p>
                  <p className="text-2xl font-bold text-orange-600">{averageStudents}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Table */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <FileText className="w-5 h-5 text-indigo-600" />
              All Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Course Code</TableHead>
                    <TableHead className="font-semibold">Course Name</TableHead>
                    <TableHead className="font-semibold">Semester</TableHead>
                    <TableHead className="font-semibold">Credits</TableHead>
                    <TableHead className="font-semibold">Department</TableHead>
                    <TableHead className="font-semibold">Students Enrolled</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="font-medium text-indigo-600">
                        {course.courseCode}
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">
                        {course.courseName}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {course.semester}
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getCreditsColor(course.type)}`}>
                          {course.credits} Credits
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {course.department}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900 font-medium">{course.studentsEnrolled}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(course.type)}
                          <span className="capitalize text-sm font-medium text-gray-700">{course.type}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {courses.length === 0 && (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No courses assigned</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Course Summary Cards Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card 
                key={`card-${course.id}`} 
                className={`rounded-lg border shadow-sm transition-all duration-200 hover:shadow-md ${getTypeColor(course.type)}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(course.type)}
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {course.courseCode}
                        </h3>
                        <p className="text-sm text-gray-600 uppercase tracking-wide">
                          {course.type}
                        </p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${getCreditsColor(course.type)}`}>
                      {course.credits} Credits
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3 text-base">
                    {course.courseName}
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Semester:</span>
                      <span className="font-medium text-gray-900">{course.semester}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-medium text-gray-900">{course.department}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Students Enrolled:</span>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="font-bold text-gray-900">{course.studentsEnrolled}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {courses.length === 0 && (
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Courses Assigned</h3>
                <p className="text-gray-500">Contact the administration to get course assignments.</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Credits Overview Section */}
        <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-900">
              <Award className="w-6 h-6" />
              Credits Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Total Credits Assigned</h3>
                  <p className="text-3xl font-bold text-indigo-600">{totalCredits}</p>
                  <p className="text-xs text-gray-500 mt-1">Across all courses</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">No. of Courses Assigned</h3>
                  <p className="text-3xl font-bold text-green-600">{totalCourses}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Theory: {courses.filter(c => c.type === 'theory').length} • 
                    Lab: {courses.filter(c => c.type === 'lab').length} • 
                    Project: {courses.filter(c => c.type === 'project').length}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Average Students per Course</h3>
                  <p className="text-3xl font-bold text-purple-600">{averageStudents}</p>
                  <p className="text-xs text-gray-500 mt-1">Total: {totalStudents} students</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoursesAndCredits;