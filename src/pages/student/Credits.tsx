// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { CheckCircle, BookOpen } from "lucide-react";

// const courses = [
//   {
//     code: "CSE301",
//     name: "Database Management Systems",
//     type: "Core",
//     credits: 4,
//     faculty: "Dr. Sharma",
//     status: "Ongoing",
//   },
//   {
//     code: "CSE305",
//     name: "Artificial Intelligence",
//     type: "Elective",
//     credits: 3,
//     faculty: "Prof. Mehta",
//     status: "Ongoing",
//   },
//   {
//     code: "CSE210",
//     name: "Operating Systems",
//     type: "Core",
//     credits: 4,
//     faculty: "Dr. Singh",
//     status: "Completed",
//   },
// ];

// export default function StudentCredits() {
//   const totalEnrolled = 20;
//   const completed = 40;
//   const maxAllowed = 24;

//   return (
//     <div className="p-6 space-y-8">
//       {/* Header */}
//       <header>
//         <h1 className="text-3xl font-bold mb-2">My Credits & Enrolled Courses</h1>
//         <p className="text-muted-foreground">
//           Track your enrolled subjects and credit distribution for this semester
//         </p>
//       </header>

//       {/* Credit Summary */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card>
//           <CardContent className="p-6 text-center">
//             <h3 className="text-lg font-semibold mb-2">Total Enrolled</h3>
//             <p className="text-3xl font-bold text-primary">{totalEnrolled}</p>
//             <p className="text-sm text-muted-foreground">/ {maxAllowed} credits</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6 text-center">
//             <h3 className="text-lg font-semibold mb-2">Credits Completed</h3>
//             <p className="text-3xl font-bold text-success">{completed}</p>
//             <p className="text-sm text-muted-foreground">Till last semester</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6 text-center">
//             <h3 className="text-lg font-semibold mb-2">Remaining</h3>
//             <p className="text-3xl font-bold text-warning">{maxAllowed - totalEnrolled}</p>
//             <p className="text-sm text-muted-foreground">Credits left this semester</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Courses Table */}
//       <Card>
//         <CardContent className="p-6">
//           <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
//           {courses.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="w-full border border-border rounded-lg">
//                 <thead className="bg-muted text-left">
//                   <tr>
//                     <th className="p-3">Code</th>
//                     <th className="p-3">Course Name</th>
//                     <th className="p-3">Type</th>
//                     <th className="p-3">Credits</th>
//                     <th className="p-3">Faculty</th>
//                     <th className="p-3">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {courses.map((course, index) => (
//                     <tr
//                       key={index}
//                       className="border-t border-border hover:bg-muted/40"
//                     >
//                       <td className="p-3 font-medium">{course.code}</td>
//                       <td className="p-3">{course.name}</td>
//                       <td className="p-3">{course.type}</td>
//                       <td className="p-3">{course.credits}</td>
//                       <td className="p-3">{course.faculty}</td>
//                       <td className="p-3 flex items-center gap-2">
//                         {course.status === "Completed" ? (
//                           <CheckCircle className="w-4 h-4 text-success" />
//                         ) : (
//                           <BookOpen className="w-4 h-4 text-primary" />
//                         )}
//                         {course.status}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="text-center py-8">
//               <p className="text-muted-foreground mb-4">
//                 You have not enrolled in any courses yet
//               </p>
//               <Button>Browse Courses</Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       {/* Actions */}
//       <div className="flex justify-end">
//         <Button>Download Credit Report</Button>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { GraduationCap, BookOpen, Award, TrendingUp, Download, Search, Filter, CheckCircle, Clock, Star, Book } from 'lucide-react';

const StudentCreditEnrolledPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  // Sample enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      courseCode: 'CSE301',
      courseName: 'Database Management Systems',
      type: 'Core',
      credits: 4,
      faculty: 'Prof. Michael Chen',
      status: 'Ongoing',
      semester: 'Fall 2025'
    },
    {
      id: 2,
      courseCode: 'CSE302',
      courseName: 'Data Structures & Algorithms',
      type: 'Core',
      credits: 4,
      faculty: 'Dr. Sarah Johnson',
      status: 'Ongoing',
      semester: 'Fall 2025'
    },
    {
      id: 3,
      courseCode: 'CSE303',
      courseName: 'Computer Networks',
      type: 'Core',
      credits: 3,
      faculty: 'Dr. Emily Rodriguez',
      status: 'Ongoing',
      semester: 'Fall 2025'
    },
    {
      id: 4,
      courseCode: 'CSE401',
      courseName: 'Software Engineering',
      type: 'Core',
      credits: 4,
      faculty: 'Prof. David Wilson',
      status: 'Ongoing',
      semester: 'Fall 2025'
    },
    {
      id: 5,
      courseCode: 'CSE499',
      courseName: 'Machine Learning',
      type: 'Elective',
      credits: 3,
      faculty: 'Dr. Lisa Park',
      status: 'Ongoing',
      semester: 'Fall 2025'
    },
    {
      id: 6,
      courseCode: 'CSE498',
      courseName: 'Web Development',
      type: 'Elective',
      credits: 3,
      faculty: 'Prof. James Lee',
      status: 'Completed',
      semester: 'Fall 2025'
    },
    {
      id: 7,
      courseCode: 'GEN101',
      courseName: 'Technical Communication',
      type: 'General',
      credits: 2,
      faculty: 'Dr. Anna Kumar',
      status: 'Ongoing',
      semester: 'Fall 2025'
    }
  ];

  // Calculate credit statistics
  const totalEnrolledCredits = enrolledCourses.reduce((sum, course) => sum + course.credits, 0);
  const completedCredits = enrolledCourses
    .filter(course => course.status === 'Completed')
    .reduce((sum, course) => sum + course.credits, 0);
  const remainingCredits = 24 - totalEnrolledCredits; // Assuming 24 is max credits
  const coreCredits = enrolledCourses
    .filter(course => course.type === 'Core')
    .reduce((sum, course) => sum + course.credits, 0);
  const electiveCredits = enrolledCourses
    .filter(course => course.type === 'Elective')
    .reduce((sum, course) => sum + course.credits, 0);
  const generalCredits = enrolledCourses
    .filter(course => course.type === 'General')
    .reduce((sum, course) => sum + course.credits, 0);

  const progressPercentage = (totalEnrolledCredits / 24) * 100;

  // Filter courses
  const filteredCourses = enrolledCourses.filter(course => {
    const matchesSearch = course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.faculty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || course.type === filterType;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-blue-100 text-blue-800';
  };

  const getTypeColor = (type) => {
    const colors = {
      'Core': 'bg-purple-100 text-purple-800',
      'Elective': 'bg-orange-100 text-orange-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type) => {
    const icons = {
      'Core': BookOpen,
      'Elective': Star,
      'General': Book
    };
    const IconComponent = icons[type] || BookOpen;
    return <IconComponent className="h-4 w-4" />;
  };

  const downloadReport = () => {
    // In a real app, this would generate and download a PDF/CSV
    alert('Credit report download functionality would be implemented here!');
  };

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#3b82f6"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{totalEnrolledCredits}</div>
            <div className="text-xs text-gray-500">/ 24</div>
          </div>
        </div>
      </div>
    );
  };

  if (enrolledCourses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-md">
          <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Courses Enrolled</h3>
          <p className="text-gray-600 mb-6">You have not enrolled in any courses yet</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                My Credits & Enrolled Courses
              </h1>
              <p className="text-gray-600 mt-1">Track your enrolled subjects and credit distribution for this semester</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <CircularProgress percentage={progressPercentage} />
                <p className="text-sm text-gray-600 mt-2">Total Credits</p>
              </div>
              <button
                onClick={downloadReport}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Credit Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Total Enrolled</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{totalEnrolledCredits}</div>
            <div className="text-sm text-gray-500">Credits</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Completed</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{completedCredits}</div>
            <div className="text-sm text-gray-500">Credits</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Remaining</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{remainingCredits}</div>
            <div className="text-sm text-gray-500">Credits</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Progress</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{Math.round(progressPercentage)}%</div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
        </div>

        {/* Credit Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Credit Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{coreCredits}</div>
              <div className="text-sm text-gray-600">Core Credits</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(coreCredits / totalEnrolledCredits) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{electiveCredits}</div>
              <div className="text-sm text-gray-600">Elective Credits</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(electiveCredits / totalEnrolledCredits) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                <Book className="h-8 w-8 text-gray-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{generalCredits}</div>
              <div className="text-sm text-gray-600">General Credits</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-gray-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(generalCredits / totalEnrolledCredits) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="All">All Types</option>
                <option value="Core">Core</option>
                <option value="Elective">Elective</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Enrolled Courses ({filteredCourses.length})</h3>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Faculty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{course.courseName}</div>
                        <div className="text-sm text-gray-500">{course.courseCode}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(course.type)}`}>
                        {getTypeIcon(course.type)}
                        {course.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium text-gray-900">{course.credits}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.faculty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                        {course.status === 'Completed' ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                        {course.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            {filteredCourses.map((course) => (
              <div key={course.id} className="p-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{course.courseName}</h4>
                    <p className="text-sm text-gray-500">{course.courseCode}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                    {course.status === 'Completed' ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                    {course.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(course.type)}`}>
                      {getTypeIcon(course.type)}
                      {course.type}
                    </span>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{course.credits} CR</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mt-2">{course.faculty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCreditEnrolledPage;