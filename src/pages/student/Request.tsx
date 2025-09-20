import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, XCircle, AlertCircle, Filter, Calendar, User, MapPin, Home, GraduationCap, CreditCard, FileCheck, Truck, Award, HelpCircle, Settings, Plus, Eye, Download, RefreshCw } from 'lucide-react';

const StudentRequestsPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample requests data - realistic student requests
  const requests = [
    {
      id: "REQ001",
      type: "classroom_booking",
      title: "Classroom A103 Booking Request",
      requestedBy: "Rahul Kumar",
      userType: "student",
      date: "2025-09-18",
      status: "approved",
      priority: "medium",
      description: "Need classroom for group study session for Database Management Systems course project preparation.",
      startDate: "2025-09-20",
      endDate: "2025-09-20",
      classroomId: "A103",
      timeSlot: "15:00-16:30",
      purpose: "study",
      adminResponse: "Approved. Please maintain cleanliness and follow college guidelines.",
      processedDate: "2025-09-19"
    },
    {
      id: "REQ002",
      type: "accommodation",
      title: "Room Change Request - Better WiFi Access",
      requestedBy: "Rahul Kumar", 
      userType: "student",
      date: "2025-09-15",
      status: "pending",
      priority: "high",
      description: "Current room B105 has poor internet connectivity. Need room with better WiFi for online classes and assignments.",
      startDate: "2025-10-01",
      endDate: "2026-05-31",
      currentRoom: "B105",
      preferredRoom: "B102",
      reason: "academic",
      adminResponse: null,
      processedDate: null
    },
    {
      id: "REQ003",
      type: "leave_application",
      title: "Medical Leave Application",
      requestedBy: "Rahul Kumar",
      userType: "student", 
      date: "2025-09-10",
      status: "approved",
      priority: "urgent",
      description: "Need medical leave due to fever and doctor's advice for rest. Medical certificate attached.",
      startDate: "2025-09-12",
      endDate: "2025-09-16",
      leaveType: "medical",
      attachments: ["medical_certificate.pdf"],
      adminResponse: "Approved. Please submit attendance compensation plan upon return.",
      processedDate: "2025-09-11"
    },
    {
      id: "REQ004",
      type: "document_request",
      title: "Transcript Request for Internship",
      requestedBy: "Rahul Kumar",
      userType: "student",
      date: "2025-09-08",
      status: "completed",
      priority: "medium",
      description: "Need official transcript for summer internship application at TechCorp.",
      documentType: "transcript",
      copies: 2,
      deliveryMethod: "pickup",
      adminResponse: "Documents ready for pickup from academic office.",
      processedDate: "2025-09-12",
      completedDate: "2025-09-14"
    },
    {
      id: "REQ005",
      type: "fee_exemption",
      title: "Late Fee Exemption Request",
      requestedBy: "Rahul Kumar",
      userType: "student",
      date: "2025-09-05",
      status: "rejected",
      priority: "low",
      description: "Request exemption for late fee due to family emergency and delayed salary of father.",
      feeAmount: 2500,
      reason: "financial_hardship",
      supportingDocs: ["salary_delay_letter.pdf"],
      adminResponse: "Request denied. Late fee policy strictly enforced. Please contact finance office for payment plan options.",
      processedDate: "2025-09-07"
    },
    {
      id: "REQ006",
      type: "classroom_booking",
      title: "Presentation Hall C101 Booking",
      requestedBy: "Rahul Kumar",
      userType: "student",
      date: "2025-09-01",
      status: "expired",
      priority: "medium",
      description: "Book presentation hall for final year project presentation rehearsal.",
      startDate: "2025-09-03",
      endDate: "2025-09-03",
      classroomId: "C101",
      timeSlot: "14:00-16:00",
      purpose: "presentation",
      adminResponse: null,
      processedDate: null
    }
  ];

  // Upcoming features data
  const upcomingFeatures = [
    {
      id: 1,
      title: "Grade Appeal",
      description: "Request review of examination grades",
      icon: Award,
      status: "Coming Soon",
      estimatedLaunch: "October 2025"
    },
    {
      id: 2,
      title: "Transport Request",
      description: "Apply for college bus services",
      icon: Truck,
      status: "In Development", 
      estimatedLaunch: "November 2025"
    },
    {
      id: 3,
      title: "Library Services",
      description: "Book requests and library services",
      icon: FileCheck,
      status: "Planning Phase",
      estimatedLaunch: "December 2025"
    },
    {
      id: 4,
      title: "Medical Services",
      description: "Health center appointments and requests",
      icon: HelpCircle,
      status: "Planning Phase",
      estimatedLaunch: "January 2026"
    },
    {
      id: 5,
      title: "Sports & Events",
      description: "Sports facility booking and event registration",
      icon: GraduationCap,
      status: "Coming Soon",
      estimatedLaunch: "February 2026"
    },
    {
      id: 6,
      title: "Grievance Portal",
      description: "Submit and track student grievances",
      icon: Settings,
      status: "Coming Soon",
      estimatedLaunch: "March 2026"
    }
  ];

  // Get unique request types and statuses
  const requestTypes = ['All', ...new Set(requests.map(req => req.type))];
  const statusTypes = ['All', 'pending', 'approved', 'rejected', 'completed', 'expired'];

  // Filter requests
  const filteredRequests = requests.filter(request => {
    const matchesStatus = selectedStatus === 'All' || request.status === selectedStatus;
    const matchesType = selectedType === 'All' || request.type === selectedType;
    return matchesStatus && matchesType;
  });

  // Get status counts
  const statusCounts = requests.reduce(
    (acc, req) => {
      acc[req.status] = (acc[req.status] || 0) + 1;
      return acc;
    },
    { pending: 0, approved: 0, rejected: 0, completed: 0, expired: 0 }
  );

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'expired':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'expired':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'classroom_booking':
        return <MapPin className="h-5 w-5" />;
      case 'accommodation':
        return <Home className="h-5 w-5" />;
      case 'leave_application':
        return <Calendar className="h-5 w-5" />;
      case 'document_request':
        return <FileText className="h-5 w-5" />;
      case 'fee_exemption':
        return <CreditCard className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'classroom_booking':
        return 'bg-blue-100 text-blue-800';
      case 'accommodation':
        return 'bg-purple-100 text-purple-800';
      case 'leave_application':
        return 'bg-green-100 text-green-800';
      case 'document_request':
        return 'bg-orange-100 text-orange-800';
      case 'fee_exemption':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatRequestType = (type) => {
    return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getUpcomingStatusColor = (status) => {
    switch (status) {
      case 'Coming Soon':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Development':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Planning Phase':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Event handlers
  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRequest(null);
  };

  const clearFilters = () => {
    setSelectedStatus('All');
    setSelectedType('All');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    My Requests
                  </h1>
                  <p className="text-gray-600 mt-1">Track and manage all your submitted requests</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <RefreshCw className="h-4 w-4" />
                <span>Last updated: {new Date().toLocaleString()}</span>
              </div>
            </div>
            
            {/* Status Summary */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
                <div className="text-xl font-bold text-yellow-700">{statusCounts.pending}</div>
                <div className="text-xs text-yellow-600">Pending</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-xl font-bold text-green-700">{statusCounts.approved}</div>
                <div className="text-xs text-green-600">Approved</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-xl font-bold text-blue-700">{statusCounts.completed}</div>
                <div className="text-xs text-blue-600">Completed</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
                <div className="text-xl font-bold text-red-700">{statusCounts.rejected}</div>
                <div className="text-xs text-red-600">Rejected</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="text-xl font-bold text-gray-700">{statusCounts.expired}</div>
                <div className="text-xs text-gray-600">Expired</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
              <Filter className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Filter Your Requests</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <AlertCircle className="h-4 w-4 inline mr-2 text-blue-600" />
                Request Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all group-hover:border-gray-300"
              >
                {statusTypes.map(status => (
                  <option key={status} value={status}>
                    {status === 'All' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <FileText className="h-4 w-4 inline mr-2 text-purple-600" />
                Request Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-all group-hover:border-gray-300"
              >
                {requestTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'All Types' : formatRequestType(type)}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <label className="block text-sm font-semibold text-blue-700 mb-2">
                <FileText className="h-4 w-4 inline mr-2" />
                Total Requests
              </label>
              <div className="text-xl font-bold text-blue-800">{requests.length}</div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <label className="block text-sm font-semibold text-green-700 mb-2">
                <CheckCircle className="h-4 w-4 inline mr-2" />
                Success Rate
              </label>
              <div className="text-xl font-bold text-green-800">
                {Math.round(((statusCounts.approved + statusCounts.completed) / requests.length) * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* Requests List */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Your Requests ({filteredRequests.length})
            </h3>
            
            {filteredRequests.length > 0 && (
              <button 
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
          
          {filteredRequests.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Requests Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
              <button 
                onClick={clearFilters}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                Show All Requests
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <div
                  key={request.id}
                  onClick={() => handleRequestClick(request)}
                  className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all cursor-pointer bg-gradient-to-r from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-gray-100 p-3 rounded-xl">
                        {getTypeIcon(request.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 truncate">{request.title}</h4>
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(request.type)}`}>
                            {formatRequestType(request.type)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{request.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(request.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            ID: {request.id}
                          </span>
                          {request.processedDate && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              Processed: {formatDate(request.processedDate)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 ml-4">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2 ${getStatusColor(request.status)}`}>
                        {getStatusIcon(request.status)}
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                      <Eye className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Features Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-xl">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Upcoming Features</h3>
                <p className="text-gray-600">New request types coming soon</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="p-6 border-2 border-dashed border-gray-300 rounded-xl text-center hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-gray-600" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border-2 ${getUpcomingStatusColor(feature.status)}`}>
                    {feature.status}
                  </span>
                  
                  <div className="text-xs text-gray-500 mt-2">
                    Expected: {feature.estimatedLaunch}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Request Details Modal */}
      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-8 border-b border-gray-100">
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                  {getTypeIcon(selectedRequest.type)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedRequest.title}</h3>
                  <p className="text-gray-600">Request ID: {selectedRequest.id}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2 ${getStatusColor(selectedRequest.status)}`}>
                  {getStatusIcon(selectedRequest.status)}
                  {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                </span>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(selectedRequest.type)}`}>
                  {formatRequestType(selectedRequest.type)}
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Request Details */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Request Details</h4>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-700">{selectedRequest.description}</p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Timeline</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Request Submitted</p>
                      <p className="text-sm text-gray-600">{formatDate(selectedRequest.date)}</p>
                    </div>
                  </div>
                  
                  {selectedRequest.processedDate && (
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Request Processed</p>
                        <p className="text-sm text-gray-600">{formatDate(selectedRequest.processedDate)}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedRequest.completedDate && (
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Request Completed</p>
                        <p className="text-sm text-gray-600">{formatDate(selectedRequest.completedDate)}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Admin Response */}
              {selectedRequest.adminResponse && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Admin Response</h4>
                  <div className={`p-4 rounded-xl border-2 ${
                    selectedRequest.status === 'approved' ? 'bg-green-50 border-green-200' :
                    selectedRequest.status === 'rejected' ? 'bg-red-50 border-red-200' :
                    'bg-blue-50 border-blue-200'
                  }`}>
                    <p className="text-gray-700">{selectedRequest.adminResponse}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-100">
                {selectedRequest.status === 'completed' && (
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-all font-medium">
                    <Download className="h-4 w-4 inline mr-2" />
                    Download Receipt
                  </button>
                )}
                
                {selectedRequest.status === 'rejected' && (
                  <button className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-xl hover:bg-orange-700 transition-all font-medium">
                    <RefreshCw className="h-4 w-4 inline mr-2" />
                    Resubmit Request
                  </button>
                )}
                
                <button 
                  onClick={handleCloseModal}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentRequestsPage;