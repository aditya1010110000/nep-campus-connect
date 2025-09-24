// // import { useState } from "react";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // // Textarea component defined inline since it might not be available
// // const Textarea = ({ className = "", ...props }: any) => (
// //   <textarea
// //     className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
// //     {...props}
// //   />
// // );
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // // Table components defined inline since they're not available
// // const Table = ({ children, className = "", ...props }: any) => (
// //   <div className="w-full overflow-auto">
// //     <table className={`w-full caption-bottom text-sm ${className}`} {...props}>
// //       {children}
// //     </table>
// //   </div>
// // );

// // const TableHeader = ({ children, className = "", ...props }: any) => (
// //   <thead className={`[&_tr]:border-b ${className}`} {...props}>
// //     {children}
// //   </thead>
// // );

// // const TableBody = ({ children, className = "", ...props }: any) => (
// //   <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props}>
// //     {children}
// //   </tbody>
// // );

// // const TableRow = ({ children, className = "", ...props }: any) => (
// //   <tr
// //     className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
// //     {...props}
// //   >
// //     {children}
// //   </tr>
// // );

// // const TableHead = ({ children, className = "", ...props }: any) => (
// //   <th
// //     className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
// //     {...props}
// //   >
// //     {children}
// //   </th>
// // );

// // const TableCell = ({ children, className = "", ...props }: any) => (
// //   <td
// //     className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
// //     {...props}
// //   >
// //     {children}
// //   </td>
// // );
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogFooter,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import {
// //   FileText,
// //   Send,
// //   Download,
// //   Clock,
// //   CheckCircle,
// //   XCircle,
// //   AlertCircle,
// //   Calendar,
// //   Users,
// //   Building,
// //   BookOpen,
// //   BarChart3,
// //   Filter,
// //   Search,
// //   Eye,
// //   Edit,
// //   Trash2,
// // } from "lucide-react";
// // import { useToast } from "@/hooks/use-toast";

// // interface Request {
// //   id: string;
// //   type:
// //     | "schedule_change"
// //     | "room_change"
// //     | "faculty_change"
// //     | "course_modification";
// //   title: string;
// //   department: string;
// //   requestedBy: string;
// //   date: string;
// //   status: "pending" | "approved" | "rejected" | "in_review";
// //   priority: "low" | "medium" | "high";
// //   description: string;
// // }

// // interface Report {
// //   id: string;
// //   name: string;
// //   type:
// //     | "utilization"
// //     | "conflicts"
// //     | "faculty_load"
// //     | "room_usage"
// //     | "student_schedule";
// //   department: string;
// //   generatedDate: string;
// //   status: "ready" | "generating" | "failed";
// //   downloadCount: number;
// // }

// // const RequestAndReport = () => {
// //   const { toast } = useToast();
// //   const [activeTab, setActiveTab] = useState<"requests" | "reports">(
// //     "requests"
// //   );
// //   const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
// //   const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filterStatus, setFilterStatus] = useState("all");
// //   const [filterDepartment, setFilterDepartment] = useState("all");

// //   const [requestForm, setRequestForm] = useState({
// //     type: "",
// //     title: "",
// //     department: "",
// //     priority: "medium" as "low" | "medium" | "high",
// //     description: "",
// //   });

// //   const [reportForm, setReportForm] = useState({
// //     type: "",
// //     department: "",
// //     dateRange: "current_semester",
// //   });

// //   const [requests, setRequests] = useState<Request[]>([
// //     {
// //       id: "REQ001",
// //       type: "schedule_change",
// //       title: "Change CS301 timing from 9AM to 2PM",
// //       department: "Computer Science",
// //       requestedBy: "Dr. Sarah Johnson",
// //       date: "2024-01-15",
// //       status: "pending",
// //       priority: "high",
// //       description: "Need to reschedule CS301 due to lab equipment maintenance",
// //     },
// //     {
// //       id: "REQ002",
// //       type: "room_change",
// //       title: "Swap Room A101 with B205 for Physics Lab",
// //       department: "Physics",
// //       requestedBy: "Prof. Michael Brown",
// //       date: "2024-01-14",
// //       status: "approved",
// //       priority: "medium",
// //       description: "B205 has better equipment for advanced physics experiments",
// //     },
// //     {
// //       id: "REQ003",
// //       type: "faculty_change",
// //       title: "Replace faculty for ME205",
// //       department: "Mechanical",
// //       requestedBy: "Dr. Emily Davis",
// //       date: "2024-01-13",
// //       status: "in_review",
// //       priority: "low",
// //       description: "Faculty member on medical leave, need replacement",
// //     },
// //     {
// //       id: "REQ004",
// //       type: "course_modification",
// //       title: "Add extra tutorial session for AI/ML course",
// //       department: "AI/DS",
// //       requestedBy: "Prof. Robert Wilson",
// //       date: "2024-01-12",
// //       status: "rejected",
// //       priority: "medium",
// //       description: "Students need additional support for complex topics",
// //     },
// //   ]);

// //   const [reports, setReports] = useState<Report[]>([
// //     {
// //       id: "RPT001",
// //       name: "Faculty Workload Distribution Report",
// //       type: "faculty_load",
// //       department: "Computer Science",
// //       generatedDate: "2024-01-15",
// //       status: "ready",
// //       downloadCount: 23,
// //     },
// //     {
// //       id: "RPT002",
// //       name: "Room Utilization Analysis",
// //       type: "room_usage",
// //       department: "All Departments",
// //       generatedDate: "2024-01-14",
// //       status: "ready",
// //       downloadCount: 15,
// //     },
// //     {
// //       id: "RPT003",
// //       name: "Schedule Conflicts Report",
// //       type: "conflicts",
// //       department: "Electronics",
// //       generatedDate: "2024-01-13",
// //       status: "generating",
// //       downloadCount: 0,
// //     },
// //     {
// //       id: "RPT004",
// //       name: "Student Schedule Overview",
// //       type: "student_schedule",
// //       department: "Mechanical",
// //       generatedDate: "2024-01-12",
// //       status: "failed",
// //       downloadCount: 0,
// //     },
// //   ]);

// //   const getStatusIcon = (status: string) => {
// //     switch (status) {
// //       case "approved":
// //       case "ready":
// //         return <CheckCircle className="w-4 h-4 text-green-500" />;
// //       case "pending":
// //       case "generating":
// //         return <Clock className="w-4 h-4 text-yellow-500" />;
// //       case "in_review":
// //         return <AlertCircle className="w-4 h-4 text-blue-500" />;
// //       case "rejected":
// //       case "failed":
// //         return <XCircle className="w-4 h-4 text-red-500" />;
// //       default:
// //         return <Clock className="w-4 h-4 text-gray-400" />;
// //     }
// //   };

// //   const getPriorityColor = (priority: string) => {
// //     switch (priority) {
// //       case "high":
// //         return "bg-red-100 text-red-800";
// //       case "medium":
// //         return "bg-yellow-100 text-yellow-800";
// //       case "low":
// //         return "bg-green-100 text-green-800";
// //       default:
// //         return "bg-gray-100 text-gray-800";
// //     }
// //   };

// //   const getRequestTypeIcon = (type: string) => {
// //     switch (type) {
// //       case "schedule_change":
// //         return <Calendar className="w-4 h-4" />;
// //       case "room_change":
// //         return <Building className="w-4 h-4" />;
// //       case "faculty_change":
// //         return <Users className="w-4 h-4" />;
// //       case "course_modification":
// //         return <BookOpen className="w-4 h-4" />;
// //       default:
// //         return <FileText className="w-4 h-4" />;
// //     }
// //   };

// //   const filteredRequests = requests.filter((request) => {
// //     const matchesSearch =
// //       request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       request.requestedBy.toLowerCase().includes(searchTerm.toLowerCase());
// //     const matchesStatus =
// //       filterStatus === "all" || request.status === filterStatus;
// //     const matchesDepartment =
// //       filterDepartment === "all" || request.department === filterDepartment;
// //     return matchesSearch && matchesStatus && matchesDepartment;
// //   });

// //   const filteredReports = reports.filter((report) => {
// //     const matchesSearch = report.name
// //       .toLowerCase()
// //       .includes(searchTerm.toLowerCase());
// //     const matchesStatus =
// //       filterStatus === "all" || report.status === filterStatus;
// //     const matchesDepartment =
// //       filterDepartment === "all" || report.department === filterDepartment;
// //     return matchesSearch && matchesStatus && matchesDepartment;
// //   });

// //   const handleSubmitRequest = () => {
// //     const newRequest: Request = {
// //       id: `REQ${String(requests.length + 1).padStart(3, "0")}`,
// //       ...requestForm,
// //       requestedBy: "Current User",
// //       date: new Date().toISOString().split("T")[0],
// //       status: "pending",
// //     };

// //     setRequests([newRequest, ...requests]);
// //     setIsRequestDialogOpen(false);
// //     setRequestForm({
// //       type: "",
// //       title: "",
// //       department: "",
// //       priority: "medium",
// //       description: "",
// //     });

// //     toast({
// //       title: "Request Submitted",
// //       description:
// //         "Your request has been submitted successfully and is pending review.",
// //     });
// //   };

// //   const handleGenerateReport = () => {
// //     const reportTypes = {
// //       faculty_load: "Faculty Workload Distribution Report",
// //       room_usage: "Room Utilization Analysis",
// //       conflicts: "Schedule Conflicts Report",
// //       student_schedule: "Student Schedule Overview",
// //       utilization: "Resource Utilization Report",
// //     };

// //     const newReport: Report = {
// //       id: `RPT${String(reports.length + 1).padStart(3, "0")}`,
// //       name: reportTypes[reportForm.type as keyof typeof reportTypes],
// //       type: reportForm.type as any,
// //       department: reportForm.department,
// //       generatedDate: new Date().toISOString().split("T")[0],
// //       status: "generating",
// //       downloadCount: 0,
// //     };

// //     setReports([newReport, ...reports]);
// //     setIsReportDialogOpen(false);
// //     setReportForm({
// //       type: "",
// //       department: "",
// //       dateRange: "current_semester",
// //     });

// //     // Simulate report generation
// //     setTimeout(() => {
// //       setReports((prev) =>
// //         prev.map((report) =>
// //           report.id === newReport.id ? { ...report, status: "ready" } : report
// //         )
// //       );
// //     }, 3000);

// //     toast({
// //       title: "Report Generation Started",
// //       description: "Your report is being generated and will be ready shortly.",
// //     });
// //   };

// //   const handleDownloadReport = (reportId: string) => {
// //     setReports((prev) =>
// //       prev.map((report) =>
// //         report.id === reportId
// //           ? { ...report, downloadCount: report.downloadCount + 1 }
// //           : report
// //       )
// //     );

// //     toast({
// //       title: "Download Started",
// //       description: "Your report download has begun.",
// //     });
// //   };

// //   const departments = [
// //     "Computer Science",
// //     "Electronics",
// //     "Mechanical",
// //     "Civil",
// //     "AI/DS",
// //     "Physics",
// //   ];

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto space-y-6">
// //       {/* Header */}
// //       <div className="text-center">
// //         <h1 className="text-4xl font-bold text-gray-900 mb-2">
// //           Request & Report Center
// //         </h1>
// //         <p className="text-lg text-gray-600">
// //           Submit timetable change requests and generate detailed reports
// //         </p>
// //       </div>

// //       {/* Tab Navigation */}
// //       <div className="flex justify-center">
// //         <div className="bg-gray-100 p-1 rounded-lg">
// //           <Button
// //             variant={activeTab === "requests" ? "default" : "ghost"}
// //             onClick={() => setActiveTab("requests")}
// //             className="px-6 py-2"
// //           >
// //             <FileText className="w-4 h-4 mr-2" />
// //             Requests
// //           </Button>
// //           <Button
// //             variant={activeTab === "reports" ? "default" : "ghost"}
// //             onClick={() => setActiveTab("reports")}
// //             className="px-6 py-2"
// //           >
// //             <BarChart3 className="w-4 h-4 mr-2" />
// //             Reports
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Filters and Actions */}
// //       <Card>
// //         <CardContent className="p-6">
// //           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// //             <div className="flex items-center gap-4 flex-1">
// //               <div className="flex items-center gap-2">
// //                 <Search className="w-4 h-4 text-gray-500" />
// //                 <Input
// //                   placeholder={`Search ${activeTab}...`}
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="w-64"
// //                 />
// //               </div>

// //               <Select value={filterStatus} onValueChange={setFilterStatus}>
// //                 <SelectTrigger className="w-40">
// //                   <SelectValue placeholder="Filter by status" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="all">All Status</SelectItem>
// //                   {activeTab === "requests" ? (
// //                     <>
// //                       <SelectItem value="pending">Pending</SelectItem>
// //                       <SelectItem value="approved">Approved</SelectItem>
// //                       <SelectItem value="rejected">Rejected</SelectItem>
// //                       <SelectItem value="in_review">In Review</SelectItem>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <SelectItem value="ready">Ready</SelectItem>
// //                       <SelectItem value="generating">Generating</SelectItem>
// //                       <SelectItem value="failed">Failed</SelectItem>
// //                     </>
// //                   )}
// //                 </SelectContent>
// //               </Select>

// //               <Select
// //                 value={filterDepartment}
// //                 onValueChange={setFilterDepartment}
// //               >
// //                 <SelectTrigger className="w-48">
// //                   <SelectValue placeholder="Filter by department" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="all">All Departments</SelectItem>
// //                   {departments.map((dept) => (
// //                     <SelectItem key={dept} value={dept}>
// //                       {dept}
// //                     </SelectItem>
// //                   ))}
// //                 </SelectContent>
// //               </Select>
// //             </div>

// //             <div className="flex gap-2">
// //               {activeTab === "requests" ? (
// //                 <Dialog
// //                   open={isRequestDialogOpen}
// //                   onOpenChange={setIsRequestDialogOpen}
// //                 >
// //                   <DialogTrigger asChild>
// //                     <Button className="bg-blue-600 hover:bg-blue-700">
// //                       <Send className="w-4 h-4 mr-2" />
// //                       New Request
// //                     </Button>
// //                   </DialogTrigger>
// //                   <DialogContent className="sm:max-w-md">
// //                     <DialogHeader>
// //                       <DialogTitle>Submit New Request</DialogTitle>
// //                       <DialogDescription>
// //                         Submit a request for timetable changes or modifications.
// //                       </DialogDescription>
// //                     </DialogHeader>
// //                     <div className="space-y-4">
// //                       <div>
// //                         <Label htmlFor="request-type">Request Type</Label>
// //                         <Select
// //                           value={requestForm.type}
// //                           onValueChange={(value) =>
// //                             setRequestForm({ ...requestForm, type: value })
// //                           }
// //                         >
// //                           <SelectTrigger>
// //                             <SelectValue placeholder="Select request type" />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             <SelectItem value="schedule_change">
// //                               Schedule Change
// //                             </SelectItem>
// //                             <SelectItem value="room_change">
// //                               Room Change
// //                             </SelectItem>
// //                             <SelectItem value="faculty_change">
// //                               Faculty Change
// //                             </SelectItem>
// //                             <SelectItem value="course_modification">
// //                               Course Modification
// //                             </SelectItem>
// //                           </SelectContent>
// //                         </Select>
// //                       </div>

// //                       <div>
// //                         <Label htmlFor="request-title">Title</Label>
// //                         <Input
// //                           id="request-title"
// //                           value={requestForm.title}
// //                           onChange={(e) =>
// //                             setRequestForm({
// //                               ...requestForm,
// //                               title: e.target.value,
// //                             })
// //                           }
// //                           placeholder="Brief description of the request"
// //                         />
// //                       </div>

// //                       <div>
// //                         <Label htmlFor="request-department">Department</Label>
// //                         <Select
// //                           value={requestForm.department}
// //                           onValueChange={(value) =>
// //                             setRequestForm({
// //                               ...requestForm,
// //                               department: value,
// //                             })
// //                           }
// //                         >
// //                           <SelectTrigger>
// //                             <SelectValue placeholder="Select department" />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             {departments.map((dept) => (
// //                               <SelectItem key={dept} value={dept}>
// //                                 {dept}
// //                               </SelectItem>
// //                             ))}
// //                           </SelectContent>
// //                         </Select>
// //                       </div>

// //                       <div>
// //                         <Label htmlFor="request-priority">Priority</Label>
// //                         <Select
// //                           value={requestForm.priority}
// //                           onValueChange={(value: "low" | "medium" | "high") =>
// //                             setRequestForm({ ...requestForm, priority: value })
// //                           }
// //                         >
// //                           <SelectTrigger>
// //                             <SelectValue />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             <SelectItem value="low">Low</SelectItem>
// //                             <SelectItem value="medium">Medium</SelectItem>
// //                             <SelectItem value="high">High</SelectItem>
// //                           </SelectContent>
// //                         </Select>
// //                       </div>

// //                       <div>
// //                         <Label htmlFor="request-description">Description</Label>
// //                         <Textarea
// //                           id="request-description"
// //                           value={requestForm.description}
// //                           onChange={(e) =>
// //                             setRequestForm({
// //                               ...requestForm,
// //                               description: e.target.value,
// //                             })
// //                           }
// //                           placeholder="Detailed description of the request and reasons"
// //                           rows={3}
// //                         />
// //                       </div>
// //                     </div>
// //                     <DialogFooter>
// //                       <Button
// //                         variant="outline"
// //                         onClick={() => setIsRequestDialogOpen(false)}
// //                       >
// //                         Cancel
// //                       </Button>
// //                       <Button onClick={handleSubmitRequest}>
// //                         Submit Request
// //                       </Button>
// //                     </DialogFooter>
// //                   </DialogContent>
// //                 </Dialog>
// //               ) : (
// //                 <Dialog
// //                   open={isReportDialogOpen}
// //                   onOpenChange={setIsReportDialogOpen}
// //                 >
// //                   <DialogTrigger asChild>
// //                     <Button className="bg-blue-600 hover:bg-blue-700">
// //                       <BarChart3 className="w-4 h-4 mr-2" />
// //                       Generate Report
// //                     </Button>
// //                   </DialogTrigger>
// //                   <DialogContent className="sm:max-w-md">
// //                     <DialogHeader>
// //                       <DialogTitle>Generate New Report</DialogTitle>
// //                       <DialogDescription>
// //                         Create detailed reports for analysis and insights.
// //                       </DialogDescription>
// //                     </DialogHeader>
// //                     <div className="space-y-4">
// //                       <div>
// //                         <Label htmlFor="report-type">Report Type</Label>
// //                         <Select
// //                           value={reportForm.type}
// //                           onValueChange={(value) =>
// //                             setReportForm({ ...reportForm, type: value })
// //                           }
// //                         >
// //                           <SelectTrigger>
// //                             <SelectValue placeholder="Select report type" />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             <SelectItem value="faculty_load">
// //                               Faculty Workload
// //                             </SelectItem>
// //                             <SelectItem value="room_usage">
// //                               Room Utilization
// //                             </SelectItem>
// //                             <SelectItem value="conflicts">
// //                               Schedule Conflicts
// //                             </SelectItem>
// //                             <SelectItem value="student_schedule">
// //                               Student Schedules
// //                             </SelectItem>
// //                             <SelectItem value="utilization">
// //                               Resource Utilization
// //                             </SelectItem>
// //                           </SelectContent>
// //                         </Select>
// //                       </div>

// //                       <div>
// //                         <Label htmlFor="report-department">Department</Label>
// //                         <Select
// //                           value={reportForm.department}
// //                           onValueChange={(value) =>
// //                             setReportForm({ ...reportForm, department: value })
// //                           }
// //                         >
// //                           <SelectTrigger>
// //                             <SelectValue placeholder="Select department" />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             <SelectItem value="All Departments">
// //                               All Departments
// //                             </SelectItem>
// //                             {departments.map((dept) => (
// //                               <SelectItem key={dept} value={dept}>
// //                                 {dept}
// //                               </SelectItem>
// //                             ))}
// //                           </SelectContent>
// //                         </Select>
// //                       </div>

// //                       <div>
// //                         <Label htmlFor="report-daterange">Date Range</Label>
// //                         <Select
// //                           value={reportForm.dateRange}
// //                           onValueChange={(value) =>
// //                             setReportForm({ ...reportForm, dateRange: value })
// //                           }
// //                         >
// //                           <SelectTrigger>
// //                             <SelectValue />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             <SelectItem value="current_semester">
// //                               Current Semester
// //                             </SelectItem>
// //                             <SelectItem value="previous_semester">
// //                               Previous Semester
// //                             </SelectItem>
// //                             <SelectItem value="academic_year">
// //                               Full Academic Year
// //                             </SelectItem>
// //                             <SelectItem value="custom">Custom Range</SelectItem>
// //                           </SelectContent>
// //                         </Select>
// //                       </div>
// //                     </div>
// //                     <DialogFooter>
// //                       <Button
// //                         variant="outline"
// //                         onClick={() => setIsReportDialogOpen(false)}
// //                       >
// //                         Cancel
// //                       </Button>
// //                       <Button onClick={handleGenerateReport}>
// //                         Generate Report
// //                       </Button>
// //                     </DialogFooter>
// //                   </DialogContent>
// //                 </Dialog>
// //               )}
// //             </div>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {/* Content Tables */}
// //       <Card>
// //         <CardHeader>
// //           <CardTitle className="flex items-center gap-2">
// //             {activeTab === "requests" ? (
// //               <>
// //                 <FileText className="w-5 h-5 text-blue-600" />
// //                 Timetable Change Requests ({filteredRequests.length})
// //               </>
// //             ) : (
// //               <>
// //                 <BarChart3 className="w-5 h-5 text-blue-600" />
// //                 Generated Reports ({filteredReports.length})
// //               </>
// //             )}
// //           </CardTitle>
// //           <CardDescription>
// //             {activeTab === "requests"
// //               ? "View and manage all timetable change requests"
// //               : "Access and download generated reports"}
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           {activeTab === "requests" ? (
// //             <Table>
// //               <TableHeader>
// //                 <TableRow>
// //                   <TableHead>Type</TableHead>
// //                   <TableHead>Title</TableHead>
// //                   <TableHead>Department</TableHead>
// //                   <TableHead>Requested By</TableHead>
// //                   <TableHead>Date</TableHead>
// //                   <TableHead>Priority</TableHead>
// //                   <TableHead>Status</TableHead>
// //                   <TableHead className="text-right">Actions</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {filteredRequests.map((request) => (
// //                   <TableRow key={request.id}>
// //                     <TableCell>
// //                       <div className="flex items-center gap-2">
// //                         {getRequestTypeIcon(request.type)}
// //                         <span className="text-sm capitalize">
// //                           {request.type.replace("_", " ")}
// //                         </span>
// //                       </div>
// //                     </TableCell>
// //                     <TableCell className="font-medium">
// //                       {request.title}
// //                     </TableCell>
// //                     <TableCell>{request.department}</TableCell>
// //                     <TableCell>{request.requestedBy}</TableCell>
// //                     <TableCell>{request.date}</TableCell>
// //                     <TableCell>
// //                       <span
// //                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
// //                           request.priority
// //                         )}`}
// //                       >
// //                         {request.priority.toUpperCase()}
// //                       </span>
// //                     </TableCell>
// //                     <TableCell>
// //                       <div className="flex items-center gap-2">
// //                         {getStatusIcon(request.status)}
// //                         <span className="capitalize">
// //                           {request.status.replace("_", " ")}
// //                         </span>
// //                       </div>
// //                     </TableCell>
// //                     <TableCell className="text-right">
// //                       <div className="flex items-center justify-end gap-2">
// //                         <Button variant="outline" size="sm">
// //                           <Eye className="w-4 h-4" />
// //                         </Button>
// //                         {request.status === "pending" && (
// //                           <>
// //                             <Button variant="outline" size="sm">
// //                               <Edit className="w-4 h-4" />
// //                             </Button>
// //                             <Button
// //                               variant="outline"
// //                               size="sm"
// //                               className="text-red-600 hover:text-red-700"
// //                             >
// //                               <Trash2 className="w-4 h-4" />
// //                             </Button>
// //                           </>
// //                         )}
// //                       </div>
// //                     </TableCell>
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           ) : (
// //             <Table>
// //               <TableHeader>
// //                 <TableRow>
// //                   <TableHead>Report Name</TableHead>
// //                   <TableHead>Type</TableHead>
// //                   <TableHead>Department</TableHead>
// //                   <TableHead>Generated</TableHead>
// //                   <TableHead>Downloads</TableHead>
// //                   <TableHead>Status</TableHead>
// //                   <TableHead className="text-right">Actions</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {filteredReports.map((report) => (
// //                   <TableRow key={report.id}>
// //                     <TableCell className="font-medium">{report.name}</TableCell>
// //                     <TableCell className="capitalize">
// //                       {report.type.replace("_", " ")}
// //                     </TableCell>
// //                     <TableCell>{report.department}</TableCell>
// //                     <TableCell>{report.generatedDate}</TableCell>
// //                     <TableCell>{report.downloadCount}</TableCell>
// //                     <TableCell>
// //                       <div className="flex items-center gap-2">
// //                         {getStatusIcon(report.status)}
// //                         <span className="capitalize">{report.status}</span>
// //                       </div>
// //                     </TableCell>
// //                     <TableCell className="text-right">
// //                       <div className="flex items-center justify-end gap-2">
// //                         <Button variant="outline" size="sm">
// //                           <Eye className="w-4 h-4" />
// //                         </Button>
// //                         {report.status === "ready" && (
// //                           <Button
// //                             variant="outline"
// //                             size="sm"
// //                             onClick={() => handleDownloadReport(report.id)}
// //                             className="text-blue-600 hover:text-blue-700"
// //                           >
// //                             <Download className="w-4 h-4" />
// //                           </Button>
// //                         )}
// //                       </div>
// //                     </TableCell>
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           )}
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default RequestAndReport;

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  FileText,
  Send,
  Download,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  Users,
  Building,
  BookOpen,
  BarChart3,
  Search,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  PieChart,
  Activity,
  Sparkles,
  Plus,
  Filter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Textarea component defined inline
const Textarea = ({ className = "", ...props }: any) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

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
  <tr
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
    {...props}
  >
    {children}
  </tr>
);

const TableHead = ({ children, className = "", ...props }: any) => (
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </th>
);

const TableCell = ({ children, className = "", ...props }: any) => (
  <td
    className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </td>
);

interface Request {
  id: string;
  type: "unavailability" | "accommodation";
  title: string;
  requestedBy: string;
  userType: "faculty" | "student";
  date: string;
  status: "pending" | "approved" | "rejected" | "in_review";
  priority: "low" | "medium" | "high";
  description: string;
  startDate: string;
  endDate: string;
}

const RequestAndReport = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"requests" | "reports">(
    "requests"
  );
  const [requestType, setRequestType] = useState<"faculty" | "student">(
    "faculty"
  );
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  const [isCustomReportDialogOpen, setIsCustomReportDialogOpen] =
    useState(false);
  const [isAccessDialogOpen, setIsAccessDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [accessEmail, setAccessEmail] = useState("");

  const [requestForm, setRequestForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    priority: "medium" as "low" | "medium" | "high",
    reason: "",
  });

  const [customReportForm, setCustomReportForm] = useState({
    name: "",
    type: "",
    department: "",
    dateRange: "current_semester",
    metrics: [] as string[],
  });

 const [requests, setRequests] = useState<Request[]>([
  {
    id: "REQ001",
    type: "unavailability",
    title: "Medical Leave Request",
    requestedBy: "Dr. Sarah Johnson",
    userType: "faculty",
    date: "2025-09-10",
    status: "pending",
    priority: "high",
    description: "Unable to conduct classes due to medical procedure",
    startDate: "2025-09-18",
    endDate: "2025-09-25",
  },
  {
    id: "REQ002",
    type: "accommodation",
    title: "Schedule Change for Part-time Job",
    requestedBy: "Rahul Kumar",
    userType: "student",
    date: "2025-09-08",
    status: "approved",
    priority: "medium",
    description: "Need morning slots free for internship",
    startDate: "2025-09-12",
    endDate: "2025-12-20",
  },
  {
    id: "REQ003",
    type: "unavailability",
    title: "Conference Attendance",
    requestedBy: "Prof. Michael Brown",
    userType: "faculty",
    date: "2025-09-05",
    status: "in_review",
    priority: "low",
    description: "Attending international conference on AI",
    startDate: "2025-10-02",
    endDate: "2025-10-07",
  },
  {
    id: "REQ004",
    type: "accommodation",
    title: "Disability Accommodation",
    requestedBy: "Priya Sharma",
    userType: "student",
    date: "2025-09-02",
    status: "approved",
    priority: "high",
    description: "Need ground floor classrooms only",
    startDate: "2025-09-05",
    endDate: "2025-12-15",
  },
]);

  const analyticsData = {
    generatedReports: 156,
    dataPoints: 12847,
    efficiency: 94.2,
    activeReports: 23,
  };

  const quickReports = [
    {
      name: "Faculty Workload Report",
      icon: Users,
      downloads: 45,
      lastGenerated: "2 hours ago",
    },
    {
      name: "Room Utilization Analysis",
      icon: Building,
      downloads: 32,
      lastGenerated: "1 day ago",
    },
    {
      name: "Course Distribution Report",
      icon: BookOpen,
      downloads: 28,
      lastGenerated: "3 hours ago",
    },
    {
      name: "Semester Performance",
      icon: TrendingUp,
      downloads: 19,
      lastGenerated: "5 hours ago",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "in_review":
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requestedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || request.status === filterStatus;
    const matchesType = request.userType === requestType;
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleSubmitRequest = () => {
    const newRequest: Request = {
      id: `REQ${String(requests.length + 1).padStart(3, "0")}`,
      type: requestType === "faculty" ? "unavailability" : "accommodation",
      title: requestForm.title,
      requestedBy:
        requestType === "faculty" ? "Current Faculty" : "Current Student",
      userType: requestType,
      date: new Date().toISOString().split("T")[0],
      status: "pending",
      priority: requestForm.priority,
      description: requestForm.description,
      startDate: requestForm.startDate,
      endDate: requestForm.endDate,
    };

    setRequests([newRequest, ...requests]);
    setIsRequestDialogOpen(false);
    setRequestForm({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      priority: "medium",
      reason: "",
    });

    toast({
      title: "Request Submitted",
      description: `Your ${
        requestType === "faculty" ? "unavailability" : "accommodation"
      } request has been submitted successfully.`,
    });
  };

  const handleGenerateQuickReport = (reportName: string) => {
    toast({
      title: "Report Generated",
      description: `${reportName} is ready for download.`,
    });
  };

  const handleCreateCustomReport = () => {
    toast({
      title: "Custom Report Created",
      description:
        "Your custom report is being generated and will be ready shortly.",
    });
    setIsCustomReportDialogOpen(false);
    setCustomReportForm({
      name: "",
      type: "",
      department: "",
      dateRange: "current_semester",
      metrics: [],
    });
  };

  const handleRequestAccess = () => {
    if (accessEmail) {
      toast({
        title: "Access Request Submitted",
        description: `We'll notify you at ${accessEmail} when advanced analytics access is available.`,
      });
      setAccessEmail("");
      setIsAccessDialogOpen(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Request & Analytics Center
        </h1>
        <p className="text-lg text-gray-600">
          Submit requests and access comprehensive analytics for your
          institution
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-gray-100 p-1 rounded-lg">
          <Button
            variant={activeTab === "requests" ? "default" : "ghost"}
            onClick={() => setActiveTab("requests")}
            className="px-6 py-2"
          >
            <Send className="w-4 h-4 mr-2" />
            Requests
          </Button>
          <Button
            variant={activeTab === "reports" ? "default" : "ghost"}
            onClick={() => setActiveTab("reports")}
            className="px-6 py-2"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Reports & Analytics
          </Button>
        </div>
      </div>

      {activeTab === "requests" ? (
        <>
          {/* Request Type Selection */}
          <div className="flex justify-center">
            <div className="bg-blue-50 p-1 rounded-lg border border-blue-200">
              <Button
                variant={requestType === "faculty" ? "default" : "ghost"}
                onClick={() => setRequestType("faculty")}
                className="px-6 py-2"
              >
                <Users className="w-4 h-4 mr-2" />
                Faculty Unavailability
              </Button>
              <Button
                variant={requestType === "student" ? "default" : "ghost"}
                onClick={() => setRequestType("student")}
                className="px-6 py-2"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Student Accommodation
              </Button>
            </div>
          </div>

          {/* Filters and Actions */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-gray-500" />
                    <Input
                      placeholder="Search requests..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                  </div>

                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="in_review">In Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Requests Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {requestType === "faculty" ? (
                  <>
                    <Users className="w-5 h-5 text-blue-600" />
                    Faculty Unavailability Requests ({filteredRequests.length})
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Student Accommodation Requests ({filteredRequests.length})
                  </>
                )}
              </CardTitle>
              <CardDescription>
                {requestType === "faculty"
                  ? "View and manage faculty unavailability requests"
                  : "View and manage student accommodation requests"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Requested By</TableHead>
                    <TableHead>Date Range</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">
                        {request.title}
                      </TableCell>
                      <TableCell>{request.requestedBy}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{request.startDate} to</div>
                          <div>{request.endDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                            request.priority
                          )}`}
                        >
                          {request.priority.toUpperCase()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(request.status)}
                          <span className="capitalize">
                            {request.status.replace("_", " ")}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          {request.status === "pending" && (
                            <>
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* Analytics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Generated Reports
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {analyticsData.generatedReports}
                </div>
                <p className="text-xs text-muted-foreground">
                  Total reports created
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Data Points
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {analyticsData.dataPoints.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Analyzed data entries
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  System Efficiency
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {analyticsData.efficiency}%
                </div>
                <p className="text-xs text-muted-foreground">
                  Overall performance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Reports
                </CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {analyticsData.activeReports}
                </div>
                <p className="text-xs text-muted-foreground">
                  Currently processing
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Reports */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Quick Reports
              </CardTitle>
              <CardDescription>
                Generate commonly used reports with one click
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickReports.map((report) => (
                  <Card
                    key={report.name}
                    className="border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <report.icon className="w-5 h-5 text-blue-600" />
                          <h3 className="font-medium text-gray-900">
                            {report.name}
                          </h3>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleGenerateQuickReport(report.name)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Generate
                        </Button>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{report.downloads} downloads</span>
                        <span>Last: {report.lastGenerated}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Custom Report */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                Custom Reports
              </CardTitle>
              <CardDescription>
                Create tailored reports based on your specific requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="mb-4">
                  <Filter className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Build Custom Reports
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Select your data sources, metrics, and filters to create
                    personalized analytics reports
                  </p>
                </div>

                <Dialog
                  open={isCustomReportDialogOpen}
                  onOpenChange={setIsCustomReportDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Custom Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Create Custom Report</DialogTitle>
                      <DialogDescription>
                        Configure your custom report parameters and metrics.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="report-name">Report Name</Label>
                        <Input
                          id="report-name"
                          value={customReportForm.name}
                          onChange={(e) =>
                            setCustomReportForm({
                              ...customReportForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="e.g., Weekly Performance Summary"
                        />
                      </div>

                      <div>
                        <Label htmlFor="report-type">Report Type</Label>
                        <Select
                          value={customReportForm.type}
                          onValueChange={(value) =>
                            setCustomReportForm({
                              ...customReportForm,
                              type: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select report type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="performance">
                              Performance Analysis
                            </SelectItem>
                            <SelectItem value="utilization">
                              Resource Utilization
                            </SelectItem>
                            <SelectItem value="comparison">
                              Comparative Study
                            </SelectItem>
                            <SelectItem value="trend">
                              Trend Analysis
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Select
                          value={customReportForm.department}
                          onValueChange={(value) =>
                            setCustomReportForm({
                              ...customReportForm,
                              department: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Departments</SelectItem>
                            <SelectItem value="cs">Computer Science</SelectItem>
                            <SelectItem value="ec">Electronics</SelectItem>
                            <SelectItem value="me">Mechanical</SelectItem>
                            <SelectItem value="civil">Civil</SelectItem>
                            <SelectItem value="aids">AI/DS</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="date-range">Date Range</Label>
                        <Select
                          value={customReportForm.dateRange}
                          onValueChange={(value) =>
                            setCustomReportForm({
                              ...customReportForm,
                              dateRange: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="current_semester">
                              Current Semester
                            </SelectItem>
                            <SelectItem value="previous_semester">
                              Previous Semester
                            </SelectItem>
                            <SelectItem value="academic_year">
                              Academic Year
                            </SelectItem>
                            <SelectItem value="custom">Custom Range</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsCustomReportDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleCreateCustomReport}>
                        Create Report
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon - Advanced Analytics */}
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Sparkles className="w-6 h-6" />
                Coming Soon: Advanced Analytics Dashboard
              </CardTitle>
              <CardDescription className="text-blue-700">
                Unlock powerful insights with our next-generation analytics
                platform featuring AI-powered predictions and real-time
                monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-900">
                      🎯 Advanced Features
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Predictive analytics & forecasting</li>
                      <li>• Real-time dashboard monitoring</li>
                      <li>• Interactive data visualizations</li>
                      <li>• Automated insights & recommendations</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-900">
                      📊 Smart Analytics
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Machine learning-powered insights</li>
                      <li>• Anomaly detection & alerts</li>
                      <li>• Cross-departmental comparisons</li>
                      <li>• Drill-down capability for detailed analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Dialog
                    open={isAccessDialogOpen}
                    onOpenChange={setIsAccessDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Request Access
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Request Advanced Analytics Access
                        </DialogTitle>
                        <DialogDescription>
                          Be among the first to experience our advanced
                          analytics dashboard. We'll notify you when early
                          access becomes available.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="access-email">Email Address</Label>
                          <Input
                            id="access-email"
                            type="email"
                            placeholder="your.email@institution.edu"
                            value={accessEmail}
                            onChange={(e) => setAccessEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsAccessDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleRequestAccess}>
                          Request Access
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <span className="text-sm text-blue-700">
                    Expected release: Nov 2025
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default RequestAndReport;

