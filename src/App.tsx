// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RoleSelection from "./pages/RoleSelection";
// import DashboardLayout from "./components/layout/DashboardLayout";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import ManageFaculty from "./pages/admin/ManageFaculty";
// import FacultyDashboard from "./pages/faculty/FacultyDashboard";
// import StudentDashboard from "./pages/student/StudentDashboard";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<RoleSelection />} />
          
//           {/* Admin Routes */}
//           <Route path="/admin" element={<DashboardLayout><AdminDashboard /></DashboardLayout>} />
//           <Route path="/admin/faculty" element={<DashboardLayout><ManageFaculty /></DashboardLayout>} />
//           <Route path="/admin/students" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Student Management</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/admin/timetable" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Timetable Generator</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/admin/requests" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Requests Inbox</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
          
//           {/* Faculty Routes */}
//           <Route path="/faculty" element={<DashboardLayout><FacultyDashboard /></DashboardLayout>} />
//           <Route path="/faculty/schedule" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Today's Schedule</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/faculty/courses" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Courses & Credits</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/faculty/unavailability" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Request Unavailability</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/faculty/swapping" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Class Swapping</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/faculty/notifications" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Notifications</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
          
//           {/* Student Routes */}
//           <Route path="/student" element={<DashboardLayout><StudentDashboard /></DashboardLayout>} />
//           <Route path="/student/schedule" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Today's Schedule</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/student/notifications" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Notifications</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/student/credits" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Credits Enrolled</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/student/classrooms" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Empty Classrooms</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
//           <Route path="/student/accommodation" element={<DashboardLayout><div className="p-8"><h1 className="text-2xl font-bold">Accommodation Requests</h1><p className="text-muted-foreground mt-2">Coming soon...</p></div></DashboardLayout>} />
          
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;



import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import DashboardLayout from "./components/layout/DashboardLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageFaculty from "./pages/admin/ManageFaculty";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import NotFound from "./pages/NotFound";
import ManageStudentPage from "./pages/admin/ManageStudent";
import TimetableGenerator from "./pages/admin/TimeTable";
import RequestAndReport from "./pages/admin/ReqestReport";
import Landing from "./pages/Landing";
import TodaysSchedule from "./pages/faculty/Schedule";
import CoursesAndCredits from "./pages/faculty/CourseAndCredit";
import UnavailabilityRequest from "./pages/faculty/Unavailability";
import ClassSwappingPage from "./pages/faculty/Request";
import FacultyNotificationPage from "./pages/faculty/Notification";
import StudentSchedulePage from "./pages/student/Schedule";
import StudentNotifications from "./pages/student/Notification";
import StudentCredits from "./pages/student/Credits";
import EmptyClassroomPage from "./pages/student/Classroom";
import StudentAccommodationRequest from "./pages/student/Request";
import StudentRequestsPage from "./pages/student/Request";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/" element={<Landing />} />

          
          {/* Admin Routes */}
          <Route path="/admin" element={<DashboardLayout><AdminDashboard /></DashboardLayout>} />
          <Route path="/admin/faculty" element={<DashboardLayout><ManageFaculty /></DashboardLayout>} />
          <Route path="/admin/students" element={<DashboardLayout><ManageStudentPage /> </DashboardLayout>} />
          <Route path="/admin/timetable" element={<DashboardLayout> <TimetableGenerator /> </DashboardLayout>} />
          <Route path="/admin/requests" element={<DashboardLayout><RequestAndReport /></DashboardLayout>} />
          
          {/* Faculty Routes */}
          <Route path="/faculty" element={<DashboardLayout><FacultyDashboard /></DashboardLayout>} />
          <Route path="/faculty/schedule" element={<DashboardLayout><TodaysSchedule /></DashboardLayout>} />
          <Route path="/faculty/courses" element={<DashboardLayout><CoursesAndCredits/></DashboardLayout>} />
          <Route path="/faculty/unavailability" element={<DashboardLayout><UnavailabilityRequest /></DashboardLayout>} />
          <Route path="/faculty/swapping" element={<DashboardLayout><ClassSwappingPage/></DashboardLayout>} />
          <Route path="/faculty/notifications" element={<DashboardLayout><FacultyNotificationPage/></DashboardLayout>} />
          
          {/* Student Routes */}
          <Route path="/student" element={<DashboardLayout><StudentDashboard /></DashboardLayout>} />
          <Route path="/student/schedule" element={<DashboardLayout><StudentSchedulePage/></DashboardLayout>} />
          <Route path="/student/notifications" element={<DashboardLayout><StudentNotifications/></DashboardLayout>} />
          <Route path="/student/credits" element={<DashboardLayout><StudentCredits/></DashboardLayout>} />
          <Route path="/student/classrooms" element={<DashboardLayout><EmptyClassroomPage/></DashboardLayout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;