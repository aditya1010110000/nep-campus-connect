import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  BookOpen,
  Plus,
  X,
  Check,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

const ClassSwappingPage = () => {
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);
  const [newRequestForm, setNewRequestForm] = useState({
    courseId: "",
    requestedDay: "",
    requestedTime: "",
    reason: "",
  });

  // Sample faculty data
  const currentFaculty = {
    name: "Dr. Sarah Johnson",
    id: "FAC001",
    department: "Computer Science",
  };

  // Sample courses taught by current faculty
  const myCourses = [
    {
      id: "CS201",
      name: "Data Structures",
      credits: 3,
      currentDay: "Monday",
      currentTime: "09:00 - 10:00",
      room: "Room 101",
    },
    {
      id: "CS301",
      name: "Algorithms",
      credits: 4,
      currentDay: "Tuesday",
      currentTime: "10:00 - 11:00",
      room: "Room 102",
    },
    {
      id: "CS501",
      name: "Web Development",
      credits: 3,
      currentDay: "Friday",
      currentTime: "14:00 - 15:00",
      room: "Lab 1",
    },
  ];

  // Sample incoming swap requests
  const [incomingRequests, setIncomingRequests] = useState([
    {
      id: 1,
      requestingFaculty: "Dr. Michael Chen",
      facultyId: "FAC002",
      course: "Database Systems",
      credits: 3,
      currentDay: "Wednesday",
      currentTime: "11:00 - 12:00",
      room: "Room 201",
      requestedDay: "Thursday",
      requestedTime: "15:00 - 16:00",
      reason: "Medical appointment conflict",
      status: "pending",
      submittedAt: "2025-09-15",
    },
    {
      id: 2,
      requestingFaculty: "Prof. Lisa Wang",
      facultyId: "FAC003",
      course: "Software Engineering",
      credits: 4,
      currentDay: "Friday",
      currentTime: "16:00 - 17:00",
      room: "Room 301",
      requestedDay: "Monday",
      requestedTime: "14:00 - 15:00",
      reason: "Conference attendance",
      status: "pending",
      submittedAt: "2025-09-16",
    },
  ]);

  // Sample my requests
  const [myRequests, setMyRequests] = useState([
    {
      id: 1,
      course: "Data Structures",
      courseId: "CS201",
      credits: 3,
      currentDay: "Monday",
      currentTime: "09:00 - 10:00",
      requestedDay: "Tuesday",
      requestedTime: "15:00 - 16:00",
      room: "Room 101",
      status: "pending",
      reason: "Personal commitment",
      submittedAt: "2025-09-14",
      targetFaculty: "Dr. Robert Smith",
    },
    {
      id: 2,
      course: "Web Development",
      courseId: "CS501",
      credits: 3,
      currentDay: "Friday",
      currentTime: "14:00 - 15:00",
      requestedDay: "Wednesday",
      requestedTime: "10:00 - 11:00",
      room: "Lab 1",
      status: "accepted",
      reason: "Better scheduling for students",
      submittedAt: "2025-09-12",
      targetFaculty: "Dr. Emily Davis",
    },
    {
      id: 3,
      course: "Algorithms",
      courseId: "CS301",
      credits: 4,
      currentDay: "Tuesday",
      currentTime: "10:00 - 11:00",
      requestedDay: "Thursday",
      requestedTime: "11:00 - 12:00",
      room: "Room 102",
      status: "declined",
      reason: "Room availability conflict",
      submittedAt: "2025-09-10",
      targetFaculty: "Prof. David Wilson",
    },
  ]);

  // Handle incoming request action
  const handleIncomingRequest = (requestId, action) => {
    setIncomingRequests((prev) =>
      prev.map((req) =>
        req.id === requestId
          ? { ...req, status: action === "accept" ? "accepted" : "declined" }
          : req
      )
    );
  };

  // Handle new request form submission
  const handleNewRequestSubmit = () => {
    if (
      !newRequestForm.courseId ||
      !newRequestForm.requestedDay ||
      !newRequestForm.requestedTime ||
      !newRequestForm.reason.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const selectedCourse = myCourses.find(
      (course) => course.id === newRequestForm.courseId
    );

    const newRequest = {
      id: Date.now(),
      course: selectedCourse.name,
      courseId: selectedCourse.id,
      credits: selectedCourse.credits,
      currentDay: selectedCourse.currentDay,
      currentTime: selectedCourse.currentTime,
      requestedDay: newRequestForm.requestedDay,
      requestedTime: newRequestForm.requestedTime,
      room: selectedCourse.room,
      status: "pending",
      reason: newRequestForm.reason,
      submittedAt: new Date().toISOString().split("T")[0],
      targetFaculty: "System Processing",
    };

    setMyRequests((prev) => [newRequest, ...prev]);
    setShowNewRequestModal(false);
    setNewRequestForm({
      courseId: "",
      requestedDay: "",
      requestedTime: "",
      reason: "",
    });
  };

  // Get status styling
  const getStatusStyling = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "declined":
        return "bg-red-100 text-red-800 border-red-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const selectedCourse = myCourses.find(
    (course) => course.id === newRequestForm.courseId
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Class Swapping Requests
        </h1>
        <p className="text-gray-600">
          Manage incoming swap requests and track your own requests
        </p>
      </div>

      {/* New Swap Request Button */}
      <div className="mb-8 flex justify-end">
        <button
          onClick={() => setShowNewRequestModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200"
        >
          <Plus className="w-5 h-5" />
          New Swap Request
        </button>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Incoming Requests Section */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              Incoming Requests (
              {
                incomingRequests.filter((req) => req.status === "pending")
                  .length
              }
              )
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Requests from other faculty to swap classes
            </p>
          </div>

          <div className="p-6">
            {incomingRequests.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No incoming swap requests</p>
              </div>
            ) : (
              <div className="space-y-4">
                {incomingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          {request.course}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                          <User className="w-4 h-4" />
                          Requested by: {request.requestingFaculty}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyling(
                          request.status
                        )}`}
                      >
                        {request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">
                          Current Schedule
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {request.credits} Credits
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          {request.currentDay}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {request.currentTime}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {request.room}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-blue-600 mb-1">
                          Requested Schedule
                        </div>
                        <div className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          {request.requestedDay}
                        </div>
                        <div className="text-sm text-blue-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {request.requestedTime}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-1">Reason</div>
                      <p className="text-sm text-gray-700">{request.reason}</p>
                    </div>

                    {request.status === "pending" && (
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            handleIncomingRequest(request.id, "accept")
                          }
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                        >
                          <Check className="w-4 h-4" />
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleIncomingRequest(request.id, "decline")
                          }
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                        >
                          <X className="w-4 h-4" />
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* My Requests Section */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5" />
              My Requests ({myRequests.length})
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Track your submitted swap requests
            </p>
          </div>

          <div className="p-6">
            {myRequests.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No swap requests submitted yet</p>
                <button
                  onClick={() => setShowNewRequestModal(true)}
                  className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Submit your first request
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {myRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          {request.course}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Target: {request.targetFaculty}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyling(
                          request.status
                        )}`}
                      >
                        {request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">
                          Current Schedule
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {request.credits} Credits
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          {request.currentDay}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {request.currentTime}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {request.room}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-blue-600 mb-1">
                          Requested Schedule
                        </div>
                        <div className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          {request.requestedDay}
                        </div>
                        <div className="text-sm text-blue-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {request.requestedTime}
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-xs text-gray-500 mb-1">Reason</div>
                      <p className="text-sm text-gray-700">{request.reason}</p>
                    </div>

                    <div className="text-xs text-gray-500">
                      Submitted on {request.submittedAt}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New Request Modal */}
      {showNewRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  New Swap Request
                </h2>
                <button
                  onClick={() => setShowNewRequestModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div>
                {/* Course Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Course *
                  </label>
                  <select
                    value={newRequestForm.courseId}
                    onChange={(e) =>
                      setNewRequestForm({
                        ...newRequestForm,
                        courseId: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Choose a course...</option>
                    {myCourses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name} ({course.id}) - {course.credits} Credits
                      </option>
                    ))}
                  </select>
                </div>

                {/* Current Class Details */}
                {selectedCourse && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Current Class Details
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Day</div>
                          <div className="font-medium">
                            {selectedCourse.currentDay}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Time</div>
                          <div className="font-medium">
                            {selectedCourse.currentTime}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Room</div>
                          <div className="font-medium">
                            {selectedCourse.room}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Requested Swap Details */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Requested Swap Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Requested Day *
                      </label>
                      <select
                        value={newRequestForm.requestedDay}
                        onChange={(e) =>
                          setNewRequestForm({
                            ...newRequestForm,
                            requestedDay: e.target.value,
                          })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select day...</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Requested Time *
                      </label>
                      <select
                        value={newRequestForm.requestedTime}
                        onChange={(e) =>
                          setNewRequestForm({
                            ...newRequestForm,
                            requestedTime: e.target.value,
                          })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select time...</option>
                        <option value="09:00 - 10:00">09:00 - 10:00</option>
                        <option value="10:00 - 11:00">10:00 - 11:00</option>
                        <option value="11:00 - 12:00">11:00 - 12:00</option>
                        <option value="12:00 - 13:00">12:00 - 13:00</option>
                        <option value="14:00 - 15:00">14:00 - 15:00</option>
                        <option value="15:00 - 16:00">15:00 - 16:00</option>
                        <option value="16:00 - 17:00">16:00 - 17:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Reason */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Swap *
                  </label>
                  <textarea
                    value={newRequestForm.reason}
                    onChange={(e) =>
                      setNewRequestForm({
                        ...newRequestForm,
                        reason: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Please provide a detailed reason for the swap request..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowNewRequestModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleNewRequestSubmit}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassSwappingPage;
