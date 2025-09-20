import React, { useState } from 'react';
import { Bell, Calendar, RefreshCw, Megaphone, AlertTriangle, Eye, EyeOff, Trash2, ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

const FacultyNotificationPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedNotifications, setExpandedNotifications] = useState(new Set());

  // Sample notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'schedule',
      title: 'Class Rescheduled - Data Structures',
      message: 'Your Data Structures lecture scheduled for Monday 9:00 AM has been moved to Tuesday 10:00 AM due to room maintenance.',
      fullDetails: 'The Computer Science Lab (Room 101) will undergo scheduled maintenance on Monday, September 23rd. Your Data Structures (CS201) class has been automatically rescheduled to Tuesday, September 24th at 10:00 AM in Room 102. Students have been notified of this change via email and SMS.',
      date: '2025-09-19',
      time: '08:30 AM',
      isRead: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'swap',
      title: 'New Swap Request Received',
      message: 'Dr. Michael Chen has requested to swap his Database Systems class with your available slot on Thursday.',
      fullDetails: 'Dr. Michael Chen (Faculty ID: FAC002) has submitted a class swap request for his Database Systems course currently scheduled for Wednesday 11:00 AM. He is requesting to swap with your Thursday 15:00 PM slot. Reason: Medical appointment conflict. Please review and respond within 48 hours.',
      date: '2025-09-19',
      time: '07:15 AM',
      isRead: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'announcement',
      title: 'Faculty Meeting - Curriculum Updates',
      message: 'Mandatory faculty meeting scheduled for Friday to discuss upcoming curriculum changes for the next semester.',
      fullDetails: 'All Computer Science faculty members are required to attend the curriculum review meeting on Friday, September 27th at 2:00 PM in Conference Room A. We will discuss the new NEP guidelines, course structure updates, and assessment methodology changes. Please bring your course outlines and any feedback you have received from students this semester.',
      date: '2025-09-18',
      time: '03:45 PM',
      isRead: true,
      priority: 'high'
    },
    {
      id: 4,
      type: 'alert',
      title: 'System Maintenance Alert',
      message: 'The timetable system will be under maintenance this weekend. Limited access expected.',
      fullDetails: 'The NEP Timetable Management System will undergo scheduled maintenance from Saturday 11:00 PM to Sunday 6:00 AM. During this time, you may experience limited access to features including class scheduling, swap requests, and attendance marking. All pending requests will be processed automatically once the system is back online.',
      date: '2025-09-18',
      time: '11:20 AM',
      isRead: true,
      priority: 'medium'
    },
    {
      id: 5,
      type: 'swap',
      title: 'Swap Request Approved',
      message: 'Your class swap request for Web Development has been approved by Prof. Emily Davis.',
      fullDetails: 'Great news! Prof. Emily Davis has approved your swap request for the Web Development (CS501) class. Your class originally scheduled for Friday 2:00 PM will now be conducted on Wednesday 10:00 AM starting from next week. The room assignment remains the same (Lab 1). Students will be notified of this change.',
      date: '2025-09-17',
      time: '04:30 PM',
      isRead: false,
      priority: 'medium'
    },
    {
      id: 6,
      type: 'schedule',
      title: 'Room Change - Algorithms Class',
      message: 'Your Algorithms class venue has been changed from Room 102 to Room 205 for today\'s session.',
      fullDetails: 'Due to technical issues with the projector in Room 102, your Algorithms (CS301) class scheduled for today at 10:00 AM has been relocated to Room 205. The IT team is working to resolve the issue. Room 205 is equipped with all necessary facilities including a whiteboard, projector, and audio system.',
      date: '2025-09-17',
      time: '09:15 AM',
      isRead: true,
      priority: 'high'
    },
    {
      id: 7,
      type: 'announcement',
      title: 'Research Grant Application Deadline',
      message: 'Reminder: Research grant applications are due by September 30th. Submit your proposals early.',
      fullDetails: 'This is a reminder that the annual research grant application deadline is approaching. All faculty members interested in applying for research funding should submit their proposals by September 30th, 11:59 PM. The application portal is available on the faculty website. For assistance with proposal writing, contact the Research & Development office.',
      date: '2025-09-16',
      time: '02:20 PM',
      isRead: true,
      priority: 'low'
    },
    {
      id: 8,
      type: 'alert',
      title: 'Password Security Update Required',
      message: 'Please update your faculty portal password as part of our security enhancement initiative.',
      fullDetails: 'As part of our ongoing security improvements, all faculty members are required to update their portal passwords. Your new password must be at least 12 characters long and include uppercase letters, lowercase letters, numbers, and special characters. Please update your password within the next 7 days to avoid any access interruptions.',
      date: '2025-09-16',
      time: '10:05 AM',
      isRead: false,
      priority: 'high'
    }
  ]);

  // Notification categories
  const categories = [
    { id: 'all', name: 'All Notifications', icon: Bell, color: 'text-gray-600', count: notifications.length },
    { id: 'schedule', name: 'Schedule Updates', icon: Calendar, color: 'text-blue-600', count: notifications.filter(n => n.type === 'schedule').length },
    { id: 'swap', name: 'Swap Requests', icon: RefreshCw, color: 'text-green-600', count: notifications.filter(n => n.type === 'swap').length },
    { id: 'announcement', name: 'Announcements', icon: Megaphone, color: 'text-yellow-600', count: notifications.filter(n => n.type === 'announcement').length },
    { id: 'alert', name: 'System Alerts', icon: AlertTriangle, color: 'text-red-600', count: notifications.filter(n => n.type === 'alert').length }
  ];

  // Filter notifications based on active filter
  const filteredNotifications = activeFilter === 'all' 
    ? notifications 
    : notifications.filter(notification => notification.type === activeFilter);

  // Get unread count
  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Toggle notification read status
  const toggleReadStatus = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: !notification.isRead }
          : notification
      )
    );
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Toggle expanded view
  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedNotifications);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNotifications(newExpanded);
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    if (window.confirm('Are you sure you want to clear all notifications? This action cannot be undone.')) {
      setNotifications([]);
    }
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  // Get category styling
  const getCategoryColor = (type) => {
    switch (type) {
      case 'schedule': return 'border-l-blue-500 bg-blue-50';
      case 'swap': return 'border-l-green-500 bg-green-50';
      case 'announcement': return 'border-l-yellow-500 bg-yellow-50';
      case 'alert': return 'border-l-red-500 bg-red-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  // Get priority styling
  const getPriorityStyling = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Bell className="w-8 h-8" />
              Notifications
            </h1>
            <p className="text-gray-600 mt-1">
              {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''} • {notifications.length} total
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                Mark all as read
              </button>
            )}
            <button
              onClick={clearAllNotifications}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Categories */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter by Category
            </h2>
            
            <div className="space-y-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isActive = activeFilter === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors duration-200 ${
                      isActive 
                        ? 'bg-indigo-100 border border-indigo-200 text-indigo-700' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${isActive ? 'text-indigo-600' : category.color}`} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      isActive 
                        ? 'bg-indigo-200 text-indigo-800' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content - Notifications */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications</h3>
                <p className="text-gray-600">
                  {activeFilter === 'all' 
                    ? "You're all caught up! No notifications to show."
                    : `No ${categories.find(c => c.id === activeFilter)?.name.toLowerCase()} to display.`
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`border rounded-lg transition-all duration-200 hover:shadow-sm ${
                      !notification.isRead 
                        ? `${getCategoryColor(notification.type)} border-l-4` 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className={`text-lg font-semibold ${
                              !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              {notification.title}
                            </h3>
                            {!notification.isRead && (
                              <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                                New
                              </span>
                            )}
                            <span className={`text-xs font-medium ${getPriorityStyling(notification.priority)}`}>
                              {notification.priority.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">
                            {notification.message}
                          </p>
                          <div className="text-xs text-gray-500">
                            {notification.date} at {notification.time}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => toggleReadStatus(notification.id)}
                            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                            title={notification.isRead ? 'Mark as unread' : 'Mark as read'}
                          >
                            {notification.isRead ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          
                          <button
                            onClick={() => toggleExpanded(notification.id)}
                            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                            title="View details"
                          >
                            {expandedNotifications.has(notification.id) ? 
                              <ChevronUp className="w-4 h-4" /> : 
                              <ChevronDown className="w-4 h-4" />
                            }
                          </button>
                          
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-2 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                            title="Delete notification"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {expandedNotifications.has(notification.id) && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Full Details</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {notification.fullDetails}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyNotificationPage;