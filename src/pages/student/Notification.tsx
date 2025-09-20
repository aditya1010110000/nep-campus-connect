// import React, { useState } from "react";
// import { Bell, Calendar, AlertCircle, BookOpen } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// // Sample notification data
// const notifications = [
//   {
//     id: 1,
//     title: "Mid-Semester Exam Schedule Released",
//     category: "Exam",
//     description: "Check the portal for your detailed exam timetable.",
//     date: "2025-09-15 10:30 AM",
//     read: false,
//   },
//   {
//     id: 2,
//     title: "Class Rescheduled",
//     category: "Class Update",
//     description: "DBMS lecture moved to Room 204 at 2 PM tomorrow.",
//     date: "2025-09-14 5:00 PM",
//     read: false,
//   },
//   {
//     id: 3,
//     title: "Workshop on AI Ethics",
//     category: "Event",
//     description: "Join the upcoming AI ethics seminar on Friday.",
//     date: "2025-09-12 3:45 PM",
//     read: true,
//   },
//   {
//     id: 4,
//     title: "Library Due Reminder",
//     category: "General",
//     description: "Return borrowed books by this week to avoid fines.",
//     date: "2025-09-11 11:20 AM",
//     read: true,
//   },
// ];

// export default function StudentNotifications() {
//   const [filter, setFilter] = useState("All");

//   const filteredNotifications =
//     filter === "All"
//       ? notifications
//       : notifications.filter((n) => n.category === filter);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <Bell className="w-6 h-6 text-blue-600" />
//           <div>
//             <h1 className="text-xl font-bold">Notifications</h1>
//             <p className="text-sm text-gray-500">
//               Stay updated with the latest announcements
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => alert("All marked as read!")}
//           >
//             Mark All as Read
//           </Button>
//           <Button
//             variant="destructive"
//             size="sm"
//             onClick={() => alert("Notifications cleared!")}
//           >
//             Clear All
//           </Button>
//         </div>
//       </header>

//       {/* Filter Section */}
//       <div className="px-6 py-4 flex gap-2 flex-wrap">
//         {["All", "Exam", "Class Update", "Event", "General"].map((cat) => (
//           <Button
//             key={cat}
//             variant={filter === cat ? "default" : "outline"}
//             size="sm"
//             onClick={() => setFilter(cat)}
//           >
//             {cat}
//           </Button>
//         ))}
//       </div>

//       {/* Notifications List */}
//       <main className="px-6 space-y-4">
//         {filteredNotifications.length > 0 ? (
//           filteredNotifications.map((n) => (
//             <Card
//               key={n.id}
//               className={`border ${
//                 !n.read ? "border-blue-400 shadow-md" : "border-gray-200"
//               }`}
//             >
//               <CardContent className="p-4 flex justify-between items-start">
//                 <div>
//                   <h3
//                     className={`font-semibold ${
//                       !n.read ? "text-blue-700" : "text-gray-800"
//                     }`}
//                   >
//                     {n.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{n.description}</p>
//                   <p className="text-xs text-gray-400 mt-1">{n.date}</p>
//                 </div>
//                 <Badge
//                   variant={
//                     n.category === "Exam"
//                       ? "destructive"
//                       : n.category === "Class Update"
//                       ? "secondary"
//                       : n.category === "Event"
//                       ? "default"
//                       : "outline"
//                   }
//                 >
//                   {n.category}
//                 </Badge>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <div className="text-center py-16 text-gray-500">
//             <AlertCircle className="mx-auto w-12 h-12 mb-3 text-gray-400" />
//             <p className="text-lg font-medium">📭 You’re all caught up!</p>
//             <p className="text-sm">No new notifications right now.</p>
//           </div>
//         )}
//       </main>

//       {/* Upcoming Events Section */}
//       <section className="px-6 py-10">
//         <h2 className="text-lg font-semibold mb-4">📌 Upcoming Events</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           <Card className="border border-gray-200">
//             <CardContent className="p-4">
//               <div className="flex items-center gap-3 mb-2">
//                 <Calendar className="w-5 h-5 text-blue-600" />
//                 <h3 className="font-semibold">Hackathon 2025</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Participate in the annual coding hackathon next weekend.
//               </p>
//               <p className="text-xs text-gray-400 mt-1">Sept 20, 2025</p>
//             </CardContent>
//           </Card>
//           <Card className="border border-gray-200">
//             <CardContent className="p-4">
//               <div className="flex items-center gap-3 mb-2">
//                 <BookOpen className="w-5 h-5 text-green-600" />
//                 <h3 className="font-semibold">Research Paper Submission</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Submit your research papers by the end of this month.
//               </p>
//               <p className="text-xs text-gray-400 mt-1">Sept 30, 2025</p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Bell, Search, Filter, CheckCheck, Trash2, Calendar, Clock, BookOpen, Users, Trophy, AlertCircle, ChevronDown, ChevronUp, X } from 'lucide-react';

const StudentNotificationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showReadNotifications, setShowReadNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Mid-term Examination Schedule Released',
      category: 'Exam',
      description: 'The mid-term examination schedule for all courses has been published. Please check the exam dates and venues.',
      content: 'Dear Students, The mid-term examination schedule for the current semester has been finalized and is now available on the student portal. Please review your exam dates carefully and make note of the venues. Contact the academic office if you have any conflicts.',
      date: '2025-09-19',
      time: '10:30 AM',
      isRead: false,
      sender: 'Academic Office'
    },
    {
      id: 2,
      title: 'Database Management Systems - Class Cancelled',
      category: 'Class Update',
      description: 'Tomorrow\'s DBMS lecture (Sept 20) has been cancelled due to faculty unavailability.',
      content: 'Hi everyone, Due to an emergency, tomorrow\'s Database Management Systems lecture scheduled for 11:00 AM - 12:30 PM has been cancelled. We will reschedule this class and inform you about the new timing soon.',
      date: '2025-09-19',
      time: '09:15 AM',
      isRead: false,
      sender: 'Prof. Michael Chen'
    },
    {
      id: 3,
      title: 'Tech Fest 2025 - Registration Open',
      category: 'Event',
      description: 'Annual technical festival registration is now open. Multiple competitions and workshops available.',
      content: 'Get ready for Tech Fest 2025! Registration is now open for various technical competitions, workshops, and seminars. Early bird registration ends on Sept 30th. Don\'t miss out on this amazing opportunity to showcase your skills.',
      date: '2025-09-18',
      time: '05:45 PM',
      isRead: true,
      sender: 'Student Council'
    },
    {
      id: 4,
      title: 'Library Timings Extended',
      category: 'General',
      description: 'Central library will remain open until 11 PM during exam period.',
      content: 'To support students during the examination period, the Central Library will extend its operating hours. Starting from September 25th, the library will remain open until 11:00 PM on weekdays and until 9:00 PM on weekends.',
      date: '2025-09-18',
      time: '02:20 PM',
      isRead: true,
      sender: 'Library Administration'
    },
    {
      id: 5,
      title: 'Assignment Submission Reminder',
      category: 'Class Update',
      description: 'Software Engineering project submission deadline is September 25th, 2025.',
      content: 'This is a reminder that your Software Engineering course project is due on September 25th, 2025 at 11:59 PM. Please ensure you submit your completed project along with documentation through the course portal.',
      date: '2025-09-17',
      time: '03:30 PM',
      isRead: true,
      sender: 'Prof. David Wilson'
    },
    {
      id: 6,
      title: 'Network Maintenance Scheduled',
      category: 'General',
      description: 'Campus network will undergo maintenance on Sept 21 from 2 AM to 6 AM.',
      content: 'The campus network will undergo scheduled maintenance on September 21st from 2:00 AM to 6:00 AM. During this time, internet services may be intermittent. Plan your online activities accordingly.',
      date: '2025-09-16',
      time: '11:45 AM',
      isRead: true,
      sender: 'IT Department'
    }
  ]);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Mid-term Exams Begin',
      date: '2025-09-28',
      type: 'exam',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Software Engineering Project Due',
      date: '2025-09-25',
      type: 'assignment',
      icon: AlertCircle
    },
    {
      id: 3,
      title: 'Tech Fest Registration Deadline',
      date: '2025-09-30',
      type: 'event',
      icon: Trophy
    },
    {
      id: 4,
      title: 'Career Fair 2025',
      date: '2025-10-05',
      type: 'event',
      icon: Users
    }
  ];

  const categories = ['All', 'General', 'Exam', 'Class Update', 'Event'];

  const getCategoryColor = (category) => {
    const colors = {
      'Exam': 'bg-red-100 text-red-800',
      'Class Update': 'bg-blue-100 text-blue-800',
      'Event': 'bg-green-100 text-green-800',
      'General': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Exam': BookOpen,
      'Class Update': Clock,
      'Event': Calendar,
      'General': Bell
    };
    const IconComponent = icons[category] || Bell;
    return <IconComponent className="h-4 w-4" />;
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notification.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const unreadNotifications = filteredNotifications.filter(n => !n.isRead);
  const readNotifications = filteredNotifications.filter(n => n.isRead);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, isRead: true })));
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (dateString === today.toISOString().split('T')[0]) {
      return 'Today';
    } else if (dateString === yesterday.toISOString().split('T')[0]) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  const getDaysUntil = (dateString) => {
    const targetDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 0) return 'Past due';
    return `${diffDays} days`;
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'exam': 'bg-red-100 text-red-700 border-red-200',
      'assignment': 'bg-orange-100 text-orange-700 border-orange-200',
      'event': 'bg-green-100 text-green-700 border-green-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Bell className="h-8 w-8 text-blue-600" />
                Notifications
              </h1>
              <p className="text-gray-600 mt-1">Stay updated with the latest announcements from faculty and administration</p>
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-3">
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={unreadNotifications.length === 0}
              >
                <CheckCheck className="h-4 w-4" />
                Mark All Read
              </button>
              <button
                onClick={clearNotifications}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                disabled={notifications.length === 0}
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </button>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications Section */}
          <div className="lg:col-span-2">
            {filteredNotifications.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">📭 You're all caught up!</h3>
                <p className="text-gray-500">No new notifications right now.</p>
              </div>
            ) : (
              <>
                {/* Unread Notifications */}
                {unreadNotifications.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="bg-red-500 rounded-full w-3 h-3"></div>
                      Unread Notifications ({unreadNotifications.length})
                    </h2>
                    
                    <div className="space-y-4">
                      {unreadNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="bg-white rounded-xl shadow-sm border-l-4 border-blue-500 p-6 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(notification.category)}`}>
                                {getCategoryIcon(notification.category)}
                                {notification.category}
                              </span>
                              <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {formatDate(notification.date)} • {notification.time}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{notification.title}</h3>
                          <p className="text-gray-600 mb-3">{notification.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">From: {notification.sender}</span>
                            <span className="text-xs text-blue-600 font-medium">Click to mark as read</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Read Notifications */}
                {readNotifications.length > 0 && (
                  <div>
                    <button
                      onClick={() => setShowReadNotifications(!showReadNotifications)}
                      className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4 hover:text-gray-900 transition-colors"
                    >
                      {showReadNotifications ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      Read Notifications ({readNotifications.length})
                    </button>
                    
                    {showReadNotifications && (
                      <div className="space-y-4">
                        {readNotifications.map((notification) => (
                          <div
                            key={notification.id}
                            className="bg-white rounded-xl shadow-sm p-6 opacity-75 hover:opacity-100 transition-opacity"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(notification.category)}`}>
                                {getCategoryIcon(notification.category)}
                                {notification.category}
                              </span>
                              <span className="text-sm text-gray-500">
                                {formatDate(notification.date)} • {notification.time}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-medium text-gray-800 mb-2">{notification.title}</h3>
                            <p className="text-gray-600 mb-3">{notification.description}</p>
                            
                            <span className="text-sm text-gray-500">From: {notification.sender}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Upcoming Events & Deadlines
              </h3>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => {
                  const IconComponent = event.icon;
                  return (
                    <div
                      key={event.id}
                      className={`p-4 rounded-lg border-2 transition-all hover:shadow-sm ${getEventTypeColor(event.type)}`}
                    >
                      <div className="flex items-start gap-3">
                        <IconComponent className="h-5 w-5 mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight mb-1">{event.title}</h4>
                          <p className="text-xs opacity-75">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        <span className="text-xs font-medium bg-white bg-opacity-70 px-2 py-1 rounded-full whitespace-nowrap">
                          {getDaysUntil(event.date)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Quick Tip</span>
                </div>
                <p className="text-xs text-blue-700">
                  Click on unread notifications to mark them as read. Stay organized and never miss important updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNotificationPage;