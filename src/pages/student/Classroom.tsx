// // import React, { useState } from 'react';
// // import { MapPin, Users, Clock, Thermometer, Monitor, X, Filter, Building, Layers } from 'lucide-react';

// // const EmptyClassroomFinder = () => {
// //   const [selectedBlock, setSelectedBlock] = useState('All');
// //   const [selectedFloor, setSelectedFloor] = useState('All');
// //   const [selectedClassroom, setSelectedClassroom] = useState(null);
// //   const [showModal, setShowModal] = useState(false);

// //   // Sample classroom data
// //   const classrooms = [
// //     // Block A - Floor 1
// //     { id: 'A101', block: 'A', floor: '1', capacity: 30, status: 'available', hasAC: true, hasProjector: true, availableSlots: ['9:00-10:30', '11:00-12:30', '14:00-15:30'] },
// //     { id: 'A102', block: 'A', floor: '1', capacity: 25, status: 'occupied', hasAC: false, hasProjector: true, availableSlots: ['16:00-17:30'] },
// //     { id: 'A103', block: 'A', floor: '1', capacity: 40, status: 'available', hasAC: true, hasProjector: true, availableSlots: ['9:00-10:30', '13:00-14:30', '15:00-16:30'] },
// //     { id: 'A104', block: 'A', floor: '1', capacity: 35, status: 'restricted', hasAC: true, hasProjector: false, availableSlots: [] },
// //     { id: 'A105', block: 'A', floor: '1', capacity: 20, status: 'available', hasAC: false, hasProjector: false, availableSlots: ['10:00-11:30', '14:00-15:30'] },
// //     { id: 'A106', block: 'A', floor: '1', capacity: 50, status: 'occupied', hasAC: true, hasProjector: true, availableSlots: ['17:00-18:30'] },

// //     // Block A - Floor 2
// //     { id: 'A201', block: 'A', floor: '2', capacity: 45, status: 'available', hasAC: true, hasProjector: true, availableSlots: ['9:00-10:30', '11:00-12:30', '15:00-16:30'] },
// //     { id: 'A202', block: 'A', floor: '2', capacity: 30, status: 'available', hasAC: false, hasProjector: true, availableSlots: ['13:00-14:30', '16:00-17:30'] },
// //     { id: 'A203', block: 'A', floor: '2', capacity: 25, status: 'occupied', hasAC: true, hasProjector: false, availableSlots: ['18:00-19:30'] },
// //     { id: 'A204', block: 'A', floor: '2', capacity: 40, status: 'available', hasAC: true, hasProjector: true, availableSlots: ['10:00-11:30', '14:00-15:30'] },

// //     // Block B - Floor 1
// //     { id: 'B101', block: 'B', floor: '1', capacity: 60, status: 'occupied', hasAC: true, hasProjector: true, availableSlots: ['17:00-18:30'] },
// //     { id: 'B102', block: 'B', floor: '1', capacity: 35, status: 'available', hasAC: true, hasProjector: false, availableSlots: ['9:00-10:30', '13:00-14:30'] },
// //     { id: 'B103', block: 'B', floor: '1', capacity: 40, status: 'available', hasAC: false, hasProjector: true, availableSlots: ['11:00-12:30', '15:00-16:30'] },
// //     { id: 'B104', block: 'B', floor: '1', capacity: 30, status: 'restricted', hasAC: true, hasProjector: true, availableSlots: [] },
// //     { id: 'B105', block: 'B', floor: '1', capacity: 25, status: 'available', hasAC: false, hasProjector: false, availableSlots: ['14:00-15:30', '16:00-17:30'] },

// //     // Block B - Floor 2
// //     { id: 'B201', block: 'B', floor: '2', capacity: 50, status: 'available', hasAC: true, hasProjector: true, availableSlots: ['9:00-10:30', '11:00-12:30', '14:00-15:30'] },
// //     { id: 'B202', block: 'B', floor: '2', capacity: 45, status: 'occupied', hasAC: true, hasProjector: true, availableSlots: ['16:00-17:30'] },
// //     { id: 'B203', block: 'B', floor: '2', capacity: 35, status: 'available', hasAC: false, hasProjector: true, availableSlots: ['10:00-11:30', '13:00-14:30'] },

// //     // Block C - Floor 1
// //     { id: 'C101', block: 'C', floor: '1', capacity: 80, status: 'available', hasAC: true, hasProjector: true, availableSlots: ['9:00-10:30', '15:00-16:30'] },
// //     { id: 'C102', block: 'C', floor: '1', capacity: 70, status: 'occupied', hasAC: true, hasProjector: true, availableSlots: ['17:00-18:30'] },
// //     { id: 'C103', block: 'C', floor: '1', capacity: 60, status: 'available', hasAC: true, hasProjector: false, availableSlots: ['11:00-12:30', '14:00-15:30'] },
// //     { id: 'C104', block: 'C', floor: '1', capacity: 40, status: 'restricted', hasAC: false, hasProjector: true, availableSlots: [] },
// //   ];

// //   // Get unique blocks and floors
// //   const blocks = ['All', ...new Set(classrooms.map(room => room.block))];
// //   const floors = ['All', ...new Set(classrooms.map(room => room.floor))];

// //   // Filter classrooms based on selected criteria
// //   const filteredClassrooms = classrooms.filter(room => {
// //     const matchesBlock = selectedBlock === 'All' || room.block === selectedBlock;
// //     const matchesFloor = selectedFloor === 'All' || room.floor === selectedFloor;
// //     return matchesBlock && matchesFloor;
// //   });

// //   // Get classroom status color
// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case 'available':
// //         return 'bg-green-500 hover:bg-green-600 border-green-600';
// //       case 'occupied':
// //         return 'bg-red-500 hover:bg-red-600 border-red-600';
// //       case 'restricted':
// //         return 'bg-gray-400 hover:bg-gray-500 border-gray-500';
// //       default:
// //         return 'bg-gray-400 hover:bg-gray-500 border-gray-500';
// //     }
// //   };

// //   // Get status text color
// //   const getStatusTextColor = (status) => {
// //     switch (status) {
// //       case 'available':
// //         return 'text-green-800 bg-green-100';
// //       case 'occupied':
// //         return 'text-red-800 bg-red-100';
// //       case 'restricted':
// //         return 'text-gray-800 bg-gray-100';
// //       default:
// //         return 'text-gray-800 bg-gray-100';
// //     }
// //   };

// //   // Open classroom details modal
// //   const openClassroomDetails = (classroom) => {
// //     setSelectedClassroom(classroom);
// //     setShowModal(true);
// //   };

// //   // Close modal
// //   const closeModal = () => {
// //     setShowModal(false);
// //     setSelectedClassroom(null);
// //   };

// //   // Get status counts for summary
// //   const statusCounts = filteredClassrooms.reduce(
// //     (acc, room) => {
// //       acc[room.status] = (acc[room.status] || 0) + 1;
// //       return acc;
// //     },
// //     { available: 0, occupied: 0, restricted: 0 }
// //   );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
// //       {/* Header Section */}
// //       <div className="bg-white shadow-sm border-b">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// //           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
// //             <div className="mb-4 sm:mb-0">
// //               <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
// //                 <MapPin className="h-8 w-8 text-blue-600" />
// //                 Find Empty Classrooms
// //               </h1>
// //               <p className="text-gray-600 mt-1">Locate available classrooms across different blocks and floors</p>
// //             </div>

// //             {/* Status Summary */}
// //             <div className="flex gap-4 text-sm">
// //               <div className="flex items-center gap-2">
// //                 <div className="w-4 h-4 bg-green-500 rounded"></div>
// //                 <span>Available ({statusCounts.available})</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <div className="w-4 h-4 bg-red-500 rounded"></div>
// //                 <span>Occupied ({statusCounts.occupied})</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <div className="w-4 h-4 bg-gray-400 rounded"></div>
// //                 <span>Restricted ({statusCounts.restricted})</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Filter Bar */}
// //         <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
// //           <div className="flex items-center gap-4 mb-4">
// //             <Filter className="h-5 w-5 text-gray-600" />
// //             <h3 className="text-lg font-semibold text-gray-900">Filter Classrooms</h3>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <Building className="h-4 w-4 inline mr-2" />
// //                 Block
// //               </label>
// //               <select
// //                 value={selectedBlock}
// //                 onChange={(e) => setSelectedBlock(e.target.value)}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
// //               >
// //                 {blocks.map(block => (
// //                   <option key={block} value={block}>{block === 'All' ? 'All Blocks' : `Block ${block}`}</option>
// //                 ))}
// //               </select>
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <Layers className="h-4 w-4 inline mr-2" />
// //                 Floor
// //               </label>
// //               <select
// //                 value={selectedFloor}
// //                 onChange={(e) => setSelectedFloor(e.target.value)}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
// //               >
// //                 {floors.map(floor => (
// //                   <option key={floor} value={floor}>{floor === 'All' ? 'All Floors' : `Floor ${floor}`}</option>
// //                 ))}
// //               </select>
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Current Time
// //               </label>
// //               <div className="px-3 py-2 bg-blue-50 rounded-lg border border-blue-200">
// //                 <span className="text-blue-800 font-medium">
// //                   {new Date().toLocaleTimeString('en-US', {
// //                     hour: '2-digit',
// //                     minute: '2-digit',
// //                     hour12: true
// //                   })}
// //                 </span>
// //               </div>
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Total Rooms
// //               </label>
// //               <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
// //                 <span className="text-gray-800 font-medium">{filteredClassrooms.length} rooms</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Classroom Grid */}
// //         <div className="bg-white rounded-xl shadow-sm p-6">
// //           <h3 className="text-lg font-semibold text-gray-900 mb-6">
// //             Classrooms {selectedBlock !== 'All' && `- Block ${selectedBlock}`} {selectedFloor !== 'All' && `- Floor ${selectedFloor}`}
// //           </h3>

// //           {filteredClassrooms.length === 0 ? (
// //             <div className="text-center py-12">
// //               <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
// //               <h3 className="text-lg font-medium text-gray-900 mb-2">No Classrooms Found</h3>
// //               <p className="text-gray-500">Try adjusting your filter criteria</p>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
// //               {filteredClassrooms.map((classroom) => (
// //                 <button
// //                   key={classroom.id}
// //                   onClick={() => openClassroomDetails(classroom)}
// //                   className={`
// //                     aspect-square rounded-xl border-2 transition-all duration-200 transform hover:scale-105 hover:shadow-lg
// //                     ${getStatusColor(classroom.status)}
// //                     ${classroom.status === 'restricted' ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
// //                     text-white font-semibold text-sm
// //                     flex flex-col items-center justify-center p-2
// //                   `}
// //                   disabled={classroom.status === 'restricted'}
// //                 >
// //                   <div className="text-xs mb-1">{classroom.id}</div>
// //                   <Users className="h-4 w-4 mb-1" />
// //                   <div className="text-xs">{classroom.capacity}</div>
// //                 </button>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Classroom Details Modal */}
// //       {showModal && selectedClassroom && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
// //             <div className="flex items-center justify-between p-6 border-b border-gray-200">
// //               <h3 className="text-xl font-semibold text-gray-900">
// //                 Classroom {selectedClassroom.id}
// //               </h3>
// //               <button
// //                 onClick={closeModal}
// //                 className="text-gray-400 hover:text-gray-600 transition-colors"
// //               >
// //                 <X className="h-6 w-6" />
// //               </button>
// //             </div>

// //             <div className="p-6 space-y-6">
// //               {/* Status */}
// //               <div className="text-center">
// //                 <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusTextColor(selectedClassroom.status)}`}>
// //                   {selectedClassroom.status.charAt(0).toUpperCase() + selectedClassroom.status.slice(1)}
// //                 </span>
// //               </div>

// //               {/* Basic Info */}
// //               <div className="grid grid-cols-2 gap-4">
// //                 <div className="text-center p-4 bg-blue-50 rounded-lg">
// //                   <Building className="h-6 w-6 text-blue-600 mx-auto mb-2" />
// //                   <div className="text-sm text-gray-600">Block</div>
// //                   <div className="text-lg font-semibold text-gray-900">{selectedClassroom.block}</div>
// //                 </div>

// //                 <div className="text-center p-4 bg-purple-50 rounded-lg">
// //                   <Layers className="h-6 w-6 text-purple-600 mx-auto mb-2" />
// //                   <div className="text-sm text-gray-600">Floor</div>
// //                   <div className="text-lg font-semibold text-gray-900">{selectedClassroom.floor}</div>
// //                 </div>
// //               </div>

// //               {/* Capacity */}
// //               <div className="text-center p-4 bg-green-50 rounded-lg">
// //                 <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
// //                 <div className="text-sm text-gray-600">Seating Capacity</div>
// //                 <div className="text-2xl font-bold text-gray-900">{selectedClassroom.capacity}</div>
// //               </div>

// //               {/* Facilities */}
// //               <div>
// //                 <h4 className="text-lg font-semibold text-gray-900 mb-3">Available Facilities</h4>
// //                 <div className="grid grid-cols-2 gap-3">
// //                   <div className={`flex items-center gap-2 p-3 rounded-lg ${selectedClassroom.hasAC ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-500'}`}>
// //                     <Thermometer className="h-5 w-5" />
// //                     <span className="text-sm font-medium">
// //                       {selectedClassroom.hasAC ? 'AC Available' : 'No AC'}
// //                     </span>
// //                   </div>

// //                   <div className={`flex items-center gap-2 p-3 rounded-lg ${selectedClassroom.hasProjector ? 'bg-purple-50 text-purple-700' : 'bg-gray-50 text-gray-500'}`}>
// //                     <Monitor className="h-5 w-5" />
// //                     <span className="text-sm font-medium">
// //                       {selectedClassroom.hasProjector ? 'Projector Available' : 'No Projector'}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Available Time Slots */}
// //               <div>
// //                 <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
// //                   <Clock className="h-5 w-5" />
// //                   Available Time Slots
// //                 </h4>

// //                 {selectedClassroom.availableSlots.length > 0 ? (
// //                   <div className="grid grid-cols-1 gap-2">
// //                     {selectedClassroom.availableSlots.map((slot, index) => (
// //                       <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
// //                         <Clock className="h-4 w-4 text-green-600" />
// //                         <span className="text-green-800 font-medium">{slot}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 ) : (
// //                   <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
// //                     <span className="text-red-700">No available slots today</span>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Action Button */}
// //               {selectedClassroom.status === 'available' && selectedClassroom.availableSlots.length > 0 && (
// //                 <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
// //                   Book This Classroom
// //                 </button>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default EmptyClassroomFinder;

// import React, { useState } from "react";
// import {
//   MapPin,
//   Users,
//   Clock,
//   Thermometer,
//   Monitor,
//   X,
//   Filter,
//   Building,
//   Layers,
//   Calendar,
//   FileText,
//   Send,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";

// const EmptyClassroomFinder = () => {
//   const [selectedBlock, setSelectedBlock] = useState("All");
//   const [selectedFloor, setSelectedFloor] = useState("All");
//   const [selectedClassroom, setSelectedClassroom] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionSuccess, setSubmissionSuccess] = useState(false);
//   const [bookingData, setBookingData] = useState({
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     timeSlot: "",
//     priority: "medium",
//     purpose: "study",
//   });

//   // Sample classroom data
//   const classrooms = [
//     {
//       id: "A101",
//       block: "A",
//       floor: "1",
//       capacity: 30,
//       status: "available",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["9:00-10:30", "11:00-12:30", "14:00-15:30"],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A102",
//       block: "A",
//       floor: "1",
//       capacity: 25,
//       status: "occupied",
//       hasAC: false,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["16:00-17:30"],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A103",
//       block: "A",
//       floor: "1",
//       capacity: 40,
//       status: "available",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: false,
//       availableSlots: ["9:00-10:30", "13:00-14:30", "15:00-16:30"],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A104",
//       block: "A",
//       floor: "1",
//       capacity: 35,
//       status: "restricted",
//       hasAC: true,
//       hasProjector: false,
//       hasWhiteboard: true,
//       availableSlots: [],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A105",
//       block: "A",
//       floor: "1",
//       capacity: 20,
//       status: "available",
//       hasAC: false,
//       hasProjector: false,
//       hasWhiteboard: true,
//       availableSlots: ["10:00-11:30", "14:00-15:30"],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A106",
//       block: "A",
//       floor: "1",
//       capacity: 50,
//       status: "occupied",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["17:00-18:30"],
//       building: "Computer Science Block",
//     },

//     {
//       id: "A201",
//       block: "A",
//       floor: "2",
//       capacity: 45,
//       status: "available",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["9:00-10:30", "11:00-12:30", "15:00-16:30"],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A202",
//       block: "A",
//       floor: "2",
//       capacity: 30,
//       status: "available",
//       hasAC: false,
//       hasProjector: true,
//       hasWhiteboard: false,
//       availableSlots: ["13:00-14:30", "16:00-17:30"],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A203",
//       block: "A",
//       floor: "2",
//       capacity: 25,
//       status: "occupied",
//       hasAC: true,
//       hasProjector: false,
//       hasWhiteboard: true,
//       availableSlots: ["18:00-19:30"],
//       building: "Computer Science Block",
//     },
//     {
//       id: "A204",
//       block: "A",
//       floor: "2",
//       capacity: 40,
//       status: "available",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["10:00-11:30", "14:00-15:30"],
//       building: "Computer Science Block",
//     },

//     {
//       id: "B101",
//       block: "B",
//       floor: "1",
//       capacity: 60,
//       status: "occupied",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["17:00-18:30"],
//       building: "Engineering Block",
//     },
//     {
//       id: "B102",
//       block: "B",
//       floor: "1",
//       capacity: 35,
//       status: "available",
//       hasAC: true,
//       hasProjector: false,
//       hasWhiteboard: true,
//       availableSlots: ["9:00-10:30", "13:00-14:30"],
//       building: "Engineering Block",
//     },
//     {
//       id: "B103",
//       block: "B",
//       floor: "1",
//       capacity: 40,
//       status: "available",
//       hasAC: false,
//       hasProjector: true,
//       hasWhiteboard: false,
//       availableSlots: ["11:00-12:30", "15:00-16:30"],
//       building: "Engineering Block",
//     },
//     {
//       id: "B104",
//       block: "B",
//       floor: "1",
//       capacity: 30,
//       status: "restricted",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: [],
//       building: "Engineering Block",
//     },
//     {
//       id: "B105",
//       block: "B",
//       floor: "1",
//       capacity: 25,
//       status: "available",
//       hasAC: false,
//       hasProjector: false,
//       hasWhiteboard: true,
//       availableSlots: ["14:00-15:30", "16:00-17:30"],
//       building: "Engineering Block",
//     },

//     {
//       id: "B201",
//       block: "B",
//       floor: "2",
//       capacity: 50,
//       status: "available",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["9:00-10:30", "11:00-12:30", "14:00-15:30"],
//       building: "Engineering Block",
//     },
//     {
//       id: "B202",
//       block: "B",
//       floor: "2",
//       capacity: 45,
//       status: "occupied",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: false,
//       availableSlots: ["16:00-17:30"],
//       building: "Engineering Block",
//     },
//     {
//       id: "B203",
//       block: "B",
//       floor: "2",
//       capacity: 35,
//       status: "available",
//       hasAC: false,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["10:00-11:30", "13:00-14:30"],
//       building: "Engineering Block",
//     },

//     {
//       id: "C101",
//       block: "C",
//       floor: "1",
//       capacity: 80,
//       status: "available",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["9:00-10:30", "15:00-16:30"],
//       building: "Auditorium Block",
//       isPremium: true,
//     },
//     {
//       id: "C102",
//       block: "C",
//       floor: "1",
//       capacity: 70,
//       status: "occupied",
//       hasAC: true,
//       hasProjector: true,
//       hasWhiteboard: true,
//       availableSlots: ["17:00-18:30"],
//       building: "Auditorium Block",
//       isPremium: true,
//     },
//     {
//       id: "C103",
//       block: "C",
//       floor: "1",
//       capacity: 60,
//       status: "available",
//       hasAC: true,
//       hasProjector: false,
//       hasWhiteboard: true,
//       availableSlots: ["11:00-12:30", "14:00-15:30"],
//       building: "Auditorium Block",
//     },
//     {
//       id: "C104",
//       block: "C",
//       floor: "1",
//       capacity: 40,
//       status: "restricted",
//       hasAC: false,
//       hasProjector: true,
//       hasWhiteboard: false,
//       availableSlots: [],
//       building: "Auditorium Block",
//     },
//   ];

//   // Get unique blocks and floors
//   const blocks = ["All", ...new Set(classrooms.map((room) => room.block))];
//   const floors = ["All", ...new Set(classrooms.map((room) => room.floor))];

//   // Filter classrooms
//   const filteredClassrooms = classrooms.filter((room) => {
//     const matchesBlock =
//       selectedBlock === "All" || room.block === selectedBlock;
//     const matchesFloor =
//       selectedFloor === "All" || room.floor === selectedFloor;
//     return matchesBlock && matchesFloor;
//   });

//   // Get status counts
//   const statusCounts = filteredClassrooms.reduce(
//     (acc, room) => {
//       acc[room.status] = (acc[room.status] || 0) + 1;
//       return acc;
//     },
//     { available: 0, occupied: 0, restricted: 0 }
//   );

//   // Helper functions
//   const getStatusColor = (status, isPremium = false) => {
//     const baseClasses = isPremium ? "ring-2 ring-yellow-300" : "";
//     switch (status) {
//       case "available":
//         return `bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 border-green-600 shadow-green-200 ${baseClasses}`;
//       case "occupied":
//         return `bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 border-red-600 shadow-red-200 ${baseClasses}`;
//       case "restricted":
//         return `bg-gradient-to-br from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 border-gray-600 shadow-gray-200 ${baseClasses}`;
//       default:
//         return `bg-gradient-to-br from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 border-gray-600 shadow-gray-200 ${baseClasses}`;
//     }
//   };

//   const getStatusTextColor = (status) => {
//     switch (status) {
//       case "available":
//         return "text-green-800 bg-green-100 border-green-200";
//       case "occupied":
//         return "text-red-800 bg-red-100 border-red-200";
//       case "restricted":
//         return "text-gray-800 bg-gray-100 border-gray-200";
//       default:
//         return "text-gray-800 bg-gray-100 border-gray-200";
//     }
//   };

//   // Event handlers
//   const handleClassroomClick = (classroom) => {
//     setSelectedClassroom(classroom);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedClassroom(null);
//     setShowBookingForm(false);
//     setSubmissionSuccess(false);
//     setBookingData({
//       title: "",
//       description: "",
//       startDate: "",
//       endDate: "",
//       timeSlot: "",
//       priority: "medium",
//       purpose: "study",
//     });
//   };

//   const handleOpenBookingForm = () => {
//     setShowBookingForm(true);
//     setBookingData({
//       ...bookingData,
//       title: `Classroom ${selectedClassroom.id} Booking Request`,
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBookingData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     // Create request object
//     const requestData = {
//       id: `REQ${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
//       type: "classroom_booking",
//       title: bookingData.title,
//       requestedBy: "Rahul Kumar",
//       userType: "student",
//       date: new Date().toISOString().split("T")[0],
//       status: "pending",
//       priority: bookingData.priority,
//       description: bookingData.description,
//       startDate: bookingData.startDate,
//       endDate: bookingData.endDate,
//       classroomId: selectedClassroom.id,
//       timeSlot: bookingData.timeSlot,
//       purpose: bookingData.purpose,
//       facilities: {
//         hasAC: selectedClassroom.hasAC,
//         hasProjector: selectedClassroom.hasProjector,
//         hasWhiteboard: selectedClassroom.hasWhiteboard,
//       },
//     };

//     console.log("Booking Request Submitted:", requestData);

//     setIsSubmitting(false);
//     setSubmissionSuccess(true);
//   };

//   const clearFilters = () => {
//     setSelectedBlock("All");
//     setSelectedFloor("All");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
//       {/* Header Section */}
//       <div className="bg-white shadow-lg border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//             <div className="mb-6 lg:mb-0">
//               <div className="flex items-center gap-4 mb-3">
//                 <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg">
//                   <MapPin className="h-8 w-8 text-white" />
//                 </div>
//                 <div>
//                   <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
//                     Find Empty Classrooms
//                   </h1>
//                   <p className="text-gray-600 mt-1">
//                     Book your perfect study space instantly
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-500">
//                 <Clock className="h-4 w-4" />
//                 <span>Real-time availability • Updated every 5 minutes</span>
//               </div>
//             </div>

//             {/* Status Summary */}
//             <div className="grid grid-cols-3 gap-4">
//               <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
//                 <div className="text-2xl font-bold text-green-700">
//                   {statusCounts.available}
//                 </div>
//                 <div className="text-sm text-green-600">Available</div>
//               </div>
//               <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
//                 <div className="text-2xl font-bold text-red-700">
//                   {statusCounts.occupied}
//                 </div>
//                 <div className="text-sm text-red-600">Occupied</div>
//               </div>
//               <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
//                 <div className="text-2xl font-bold text-gray-700">
//                   {statusCounts.restricted}
//                 </div>
//                 <div className="text-sm text-gray-600">Restricted</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Filter Bar */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
//               <Filter className="h-5 w-5 text-white" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900">
//               Filter Your Perfect Space
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="group">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 <Building className="h-4 w-4 inline mr-2 text-blue-600" />
//                 Building Block
//               </label>
//               <select
//                 value={selectedBlock}
//                 onChange={(e) => setSelectedBlock(e.target.value)}
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all group-hover:border-gray-300"
//               >
//                 {blocks.map((block) => (
//                   <option key={block} value={block}>
//                     {block === "All" ? "All Blocks" : `Block ${block}`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="group">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 <Layers className="h-4 w-4 inline mr-2 text-purple-600" />
//                 Floor Level
//               </label>
//               <select
//                 value={selectedFloor}
//                 onChange={(e) => setSelectedFloor(e.target.value)}
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-all group-hover:border-gray-300"
//               >
//                 {floors.map((floor) => (
//                   <option key={floor} value={floor}>
//                     {floor === "All" ? "All Floors" : `Floor ${floor}`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
//               <label className="block text-sm font-semibold text-blue-700 mb-2">
//                 <Clock className="h-4 w-4 inline mr-2" />
//                 Current Time
//               </label>
//               <div className="text-xl font-bold text-blue-800">
//                 {new Date().toLocaleTimeString("en-US", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 })}
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 <Users className="h-4 w-4 inline mr-2" />
//                 Total Rooms
//               </label>
//               <div className="text-xl font-bold text-gray-800">
//                 {filteredClassrooms.length}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Classroom Grid */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
//           <div className="flex items-center justify-between mb-8">
//             <h3 className="text-2xl font-bold text-gray-900">
//               Available Classrooms
//               {selectedBlock !== "All" && ` - Block ${selectedBlock}`}
//               {selectedFloor !== "All" && ` - Floor ${selectedFloor}`}
//             </h3>

//             {/* Legend */}
//             <div className="flex gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded shadow-sm"></div>
//                 <span className="text-gray-600">Available</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded shadow-sm"></div>
//                 <span className="text-gray-600">Occupied</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded shadow-sm"></div>
//                 <span className="text-gray-600">Restricted</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded shadow-sm ring-2 ring-yellow-300"></div>
//                 <span className="text-gray-600">Premium</span>
//               </div>
//             </div>
//           </div>

//           {filteredClassrooms.length === 0 ? (
//             <div className="text-center py-16">
//               <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
//                 <MapPin className="h-12 w-12 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 No Classrooms Found
//               </h3>
//               <p className="text-gray-500 mb-6">
//                 Try adjusting your filter criteria
//               </p>
//               <button
//                 onClick={clearFilters}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
//               {filteredClassrooms.map((classroom) => (
//                 <button
//                   key={classroom.id}
//                   onClick={() => handleClassroomClick(classroom)}
//                   className={`
//                     relative aspect-square rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
//                     ${getStatusColor(classroom.status, classroom.isPremium)}
//                     ${
//                       classroom.status === "restricted"
//                         ? "cursor-not-allowed opacity-75"
//                         : "cursor-pointer shadow-lg"
//                     }
//                     text-white font-bold text-sm
//                     flex flex-col items-center justify-center p-3
//                   `}
//                   disabled={classroom.status === "restricted"}
//                 >
//                   {classroom.isPremium && (
//                     <div className="absolute -top-2 -right-2 bg-yellow-500 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold shadow-lg">
//                       ⭐
//                     </div>
//                   )}

//                   <div className="text-lg font-bold mb-2">{classroom.id}</div>

//                   <div className="flex items-center gap-1 mb-2">
//                     <Users className="h-4 w-4" />
//                     <span className="text-xs">{classroom.capacity}</span>
//                   </div>

//                   <div className="flex gap-1">
//                     {classroom.hasAC && (
//                       <div className="w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>
//                     )}
//                     {classroom.hasProjector && (
//                       <div className="w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>
//                     )}
//                     {classroom.hasWhiteboard && (
//                       <div className="w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>
//                     )}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && selectedClassroom && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             {!showBookingForm ? (
//               <>
//                 {/* Classroom Details */}
//                 <div className="relative p-8 border-b border-gray-100">
//                   <button
//                     onClick={handleCloseModal}
//                     className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
//                   >
//                     <X className="h-6 w-6" />
//                   </button>

//                   <div className="flex items-center gap-4 mb-4">
//                     <div
//                       className={`p-4 rounded-2xl ${
//                         selectedClassroom.isPremium
//                           ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
//                           : "bg-gradient-to-r from-blue-600 to-purple-600"
//                       }`}
//                     >
//                       <Building className="h-8 w-8 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-3xl font-bold text-gray-900">
//                         Classroom {selectedClassroom.id}
//                         {selectedClassroom.isPremium && (
//                           <span className="text-yellow-600 ml-2">⭐</span>
//                         )}
//                       </h3>
//                       <p className="text-gray-600">
//                         {selectedClassroom.building}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="text-center mb-6">
//                     <span
//                       className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold border-2 ${getStatusTextColor(
//                         selectedClassroom.status
//                       )}`}
//                     >
//                       {selectedClassroom.status === "available" && (
//                         <CheckCircle className="h-4 w-4 mr-2" />
//                       )}
//                       {selectedClassroom.status === "occupied" && (
//                         <AlertCircle className="h-4 w-4 mr-2" />
//                       )}
//                       {selectedClassroom.status === "restricted" && (
//                         <X className="h-4 w-4 mr-2" />
//                       )}
//                       {selectedClassroom.status.charAt(0).toUpperCase() +
//                         selectedClassroom.status.slice(1)}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-8 space-y-8">
//                   {/* Basic Info */}
//                   <div className="grid grid-cols-3 gap-6">
//                     <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
//                       <Building className="h-8 w-8 text-blue-600 mx-auto mb-3" />
//                       <div className="text-sm text-gray-600 mb-1">Block</div>
//                       <div className="text-2xl font-bold text-gray-900">
//                         {selectedClassroom.block}
//                       </div>
//                     </div>

//                     <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
//                       <Layers className="h-8 w-8 text-purple-600 mx-auto mb-3" />
//                       <div className="text-sm text-gray-600 mb-1">Floor</div>
//                       <div className="text-2xl font-bold text-gray-900">
//                         {selectedClassroom.floor}
//                       </div>
//                     </div>

//                     <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
//                       <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
//                       <div className="text-sm text-gray-600 mb-1">Capacity</div>
//                       <div className="text-2xl font-bold text-gray-900">
//                         {selectedClassroom.capacity}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Facilities */}
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                       <Monitor className="h-6 w-6 text-blue-600" />
//                       Available Facilities
//                     </h4>
//                     <div className="grid grid-cols-3 gap-4">
//                       <div
//                         className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${
//                           selectedClassroom.hasAC
//                             ? "bg-blue-50 border-blue-200 text-blue-700"
//                             : "bg-gray-50 border-gray-200 text-gray-500"
//                         }`}
//                       >
//                         <Thermometer className="h-8 w-8 mb-3" />
//                         <span className="font-semibold text-sm text-center">
//                           {selectedClassroom.hasAC ? "AC Available" : "No AC"}
//                         </span>
//                       </div>

//                       <div
//                         className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${
//                           selectedClassroom.hasProjector
//                             ? "bg-purple-50 border-purple-200 text-purple-700"
//                             : "bg-gray-50 border-gray-200 text-gray-500"
//                         }`}
//                       >
//                         <Monitor className="h-8 w-8 mb-3" />
//                         <span className="font-semibold text-sm text-center">
//                           {selectedClassroom.hasProjector
//                             ? "Projector Available"
//                             : "No Projector"}
//                         </span>
//                       </div>

//                       <div
//                         className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${
//                           selectedClassroom.hasWhiteboard
//                             ? "bg-green-50 border-green-200 text-green-700"
//                             : "bg-gray-50 border-gray-200 text-gray-500"
//                         }`}
//                       >
//                         <FileText className="h-8 w-8 mb-3" />
//                         <span className="font-semibold text-sm text-center">
//                           {selectedClassroom.hasWhiteboard
//                             ? "Whiteboard Available"
//                             : "No Whiteboard"}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Available Time Slots */}
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                       <Clock className="h-6 w-6 text-green-600" />
//                       Available Time Slots Today
//                     </h4>

//                     {selectedClassroom.availableSlots.length > 0 ? (
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {selectedClassroom.availableSlots.map((slot, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all"
//                           >
//                             <div className="bg-green-600 p-2 rounded-full">
//                               <Clock className="h-4 w-4 text-white" />
//                             </div>
//                             <div>
//                               <span className="text-green-800 font-bold text-lg">
//                                 {slot}
//                               </span>
//                               <div className="text-green-600 text-sm">
//                                 Available for booking
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="text-center p-8 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-2 border-red-200">
//                         <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
//                         <span className="text-red-700 font-semibold text-lg">
//                           No available slots today
//                         </span>
//                         <div className="text-red-600 text-sm mt-2">
//                           Check back tomorrow or try a different room
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-4 pt-6 border-t border-gray-100">
//                     {selectedClassroom.status === "available" &&
//                     selectedClassroom.availableSlots.length > 0 ? (
//                       <>
//                         <button
//                           onClick={handleOpenBookingForm}
//                           className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//                         >
//                           <Calendar className="h-5 w-5 inline mr-2" />
//                           Book This Room
//                         </button>
//                         <button
//                           onClick={handleCloseModal}
//                           className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
//                         >
//                           Cancel
//                         </button>
//                       </>
//                     ) : (
//                       <button
//                         onClick={handleCloseModal}
//                         className="w-full bg-gray-600 text-white py-4 px-6 rounded-xl hover:bg-gray-700 transition-all font-bold text-lg"
//                       >
//                         Close
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </>
//             ) : (
//               /* Booking Form */
//               <>
//                 <div className="relative p-8 border-b border-gray-100">
//                   <button
//                     onClick={() => setShowBookingForm(false)}
//                     className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
//                   >
//                     <X className="h-6 w-6" />
//                   </button>

//                   <div className="flex items-center gap-4">
//                     <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-2xl">
//                       <Send className="h-8 w-8 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-3xl font-bold text-gray-900">
//                         Book Classroom {selectedClassroom.id}
//                       </h3>
//                       <p className="text-gray-600">
//                         Submit your booking request to admin
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {submissionSuccess ? (
//                   <div className="p-8 text-center">
//                     <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6">
//                       <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                       Request Submitted Successfully!
//                     </h3>
//                     <p className="text-gray-600 mb-6">
//                       Your booking request has been sent to the admin for
//                       approval. You'll receive an email confirmation shortly.
//                     </p>
//                     <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-6">
//                       <div className="text-sm text-blue-800">
//                         <strong>Request ID:</strong> REQ
//                         {Math.random().toString(36).substr(2, 6).toUpperCase()}
//                       </div>
//                       <div className="text-sm text-blue-800 mt-1">
//                         <strong>Status:</strong> Pending Admin Approval
//                       </div>
//                     </div>
//                     <button
//                       onClick={handleCloseModal}
//                       className="bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-blue-700 transition-all font-bold"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="p-8 space-y-6">
//                     {/* Title */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-3">
//                         <FileText className="h-4 w-4 inline mr-2 text-blue-600" />
//                         Request Title *
//                       </label>
//                       <input
//                         type="text"
//                         name="title"
//                         value={bookingData.title}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         placeholder="e.g., Study Group Session for Database Course"
//                       />
//                     </div>

//                     {/* Description */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-3">
//                         Description *
//                       </label>
//                       <textarea
//                         name="description"
//                         value={bookingData.description}
//                         onChange={handleInputChange}
//                         required
//                         rows={4}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
//                         placeholder="Please describe the purpose of your booking request..."
//                       />
//                     </div>

//                     {/* Date Range */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-3">
//                           <Calendar className="h-4 w-4 inline mr-2 text-purple-600" />
//                           Start Date *
//                         </label>
//                         <input
//                           type="date"
//                           name="startDate"
//                           value={bookingData.startDate}
//                           onChange={handleInputChange}
//                           required
//                           min={new Date().toISOString().split("T")[0]}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-3">
//                           End Date *
//                         </label>
//                         <input
//                           type="date"
//                           name="endDate"
//                           value={bookingData.endDate}
//                           onChange={handleInputChange}
//                           required
//                           min={
//                             bookingData.startDate ||
//                             new Date().toISOString().split("T")[0]
//                           }
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
//                         />
//                       </div>
//                     </div>

//                     {/* Time Slot */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-3">
//                         <Clock className="h-4 w-4 inline mr-2 text-green-600" />
//                         Preferred Time Slot *
//                       </label>
//                       <select
//                         name="timeSlot"
//                         value={bookingData.timeSlot}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all bg-white"
//                       >
//                         <option value="">Select a time slot</option>
//                         {selectedClassroom.availableSlots.map((slot, index) => (
//                           <option key={index} value={slot}>
//                             {slot}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Purpose and Priority */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-3">
//                           Purpose *
//                         </label>
//                         <select
//                           name="purpose"
//                           value={bookingData.purpose}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
//                         >
//                           <option value="study">Study Session</option>
//                           <option value="meeting">Group Meeting</option>
//                           <option value="presentation">
//                             Presentation Practice
//                           </option>
//                           <option value="project">Project Work</option>
//                           <option value="exam_prep">Exam Preparation</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-3">
//                           Priority Level *
//                         </label>
//                         <select
//                           name="priority"
//                           value={bookingData.priority}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white"
//                         >
//                           <option value="low">Low Priority</option>
//                           <option value="medium">Medium Priority</option>
//                           <option value="high">High Priority</option>
//                           <option value="urgent">Urgent</option>
//                         </select>
//                       </div>
//                     </div>

//                     {/* Classroom Info Summary */}
//                     <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
//                       <h5 className="font-bold text-gray-900 mb-4">
//                         Booking Summary
//                       </h5>
//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div>
//                           <span className="text-gray-600">Room:</span>
//                           <span className="font-semibold text-gray-900 ml-2">
//                             {selectedClassroom.id}
//                           </span>
//                         </div>
//                         <div>
//                           <span className="text-gray-600">Capacity:</span>
//                           <span className="font-semibold text-gray-900 ml-2">
//                             {selectedClassroom.capacity} persons
//                           </span>
//                         </div>
//                         <div>
//                           <span className="text-gray-600">Location:</span>
//                           <span className="font-semibold text-gray-900 ml-2">
//                             Block {selectedClassroom.block}, Floor{" "}
//                             {selectedClassroom.floor}
//                           </span>
//                         </div>
//                         <div>
//                           <span className="text-gray-600">Facilities:</span>
//                           <div className="flex gap-1 mt-1">
//                             {selectedClassroom.hasAC && (
//                               <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
//                                 AC
//                               </span>
//                             )}
//                             {selectedClassroom.hasProjector && (
//                               <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
//                                 Projector
//                               </span>
//                             )}
//                             {selectedClassroom.hasWhiteboard && (
//                               <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
//                                 Whiteboard
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Submit Buttons */}
//                     <div className="flex gap-4 pt-6 border-t border-gray-100">
//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 ${
//                           isSubmitting
//                             ? "bg-gray-400 cursor-not-allowed"
//                             : "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl"
//                         } text-white`}
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full inline mr-2"></div>
//                             Submitting Request...
//                           </>
//                         ) : (
//                           <>
//                             <Send className="h-5 w-5 inline mr-2" />
//                             Submit Booking Request
//                           </>
//                         )}
//                       </button>

//                       <button
//                         type="button"
//                         onClick={() => setShowBookingForm(false)}
//                         disabled={isSubmitting}
//                         className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium disabled:opacity-50"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmptyClassroomFinder;




import React, { useState } from 'react';
import { MapPin, Users, Clock, Thermometer, Monitor, X, Filter, Building, Layers, Calendar, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';

const EmptyClassroomFinder = () => {
  const [selectedBlock, setSelectedBlock] = useState('All');
  const [selectedFloor, setSelectedFloor] = useState('All');
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    timeSlot: '',
    priority: 'medium',
    purpose: 'study'
  });

  // Sample classroom data - realistic availability (only 2-3 available rooms)
  const classrooms = [
    { id: 'A101', block: 'A', floor: '1', capacity: 30, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    { id: 'A102', block: 'A', floor: '1', capacity: 25, status: 'occupied', hasAC: false, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    { id: 'A103', block: 'A', floor: '1', capacity: 40, status: 'available', hasAC: true, hasProjector: true, hasWhiteboard: false, availableSlots: ['15:00-16:30', '17:00-18:30'], building: 'Computer Science Block' },
    { id: 'A104', block: 'A', floor: '1', capacity: 35, status: 'restricted', hasAC: true, hasProjector: false, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    { id: 'A105', block: 'A', floor: '1', capacity: 20, status: 'occupied', hasAC: false, hasProjector: false, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    { id: 'A106', block: 'A', floor: '1', capacity: 50, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    
    { id: 'A201', block: 'A', floor: '2', capacity: 45, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    { id: 'A202', block: 'A', floor: '2', capacity: 30, status: 'occupied', hasAC: false, hasProjector: true, hasWhiteboard: false, availableSlots: [], building: 'Computer Science Block' },
    { id: 'A203', block: 'A', floor: '2', capacity: 25, status: 'occupied', hasAC: true, hasProjector: false, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    { id: 'A204', block: 'A', floor: '2', capacity: 40, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Computer Science Block' },
    
    { id: 'B101', block: 'B', floor: '1', capacity: 60, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Engineering Block' },
    { id: 'B102', block: 'B', floor: '1', capacity: 35, status: 'occupied', hasAC: true, hasProjector: false, hasWhiteboard: true, availableSlots: [], building: 'Engineering Block' },
    { id: 'B103', block: 'B', floor: '1', capacity: 40, status: 'available', hasAC: false, hasProjector: true, hasWhiteboard: false, availableSlots: ['14:00-15:30'], building: 'Engineering Block' },
    { id: 'B104', block: 'B', floor: '1', capacity: 30, status: 'restricted', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Engineering Block' },
    { id: 'B105', block: 'B', floor: '1', capacity: 25, status: 'occupied', hasAC: false, hasProjector: false, hasWhiteboard: true, availableSlots: [], building: 'Engineering Block' },
    
    { id: 'B201', block: 'B', floor: '2', capacity: 50, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Engineering Block' },
    { id: 'B202', block: 'B', floor: '2', capacity: 45, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: false, availableSlots: [], building: 'Engineering Block' },
    { id: 'B203', block: 'B', floor: '2', capacity: 35, status: 'restricted', hasAC: false, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Engineering Block' },
    
    { id: 'C101', block: 'C', floor: '1', capacity: 80, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Auditorium Block' },
    { id: 'C102', block: 'C', floor: '1', capacity: 70, status: 'occupied', hasAC: true, hasProjector: true, hasWhiteboard: true, availableSlots: [], building: 'Auditorium Block' },
    { id: 'C103', block: 'C', floor: '1', capacity: 60, status: 'available', hasAC: true, hasProjector: false, hasWhiteboard: true, availableSlots: ['16:00-17:30'], building: 'Auditorium Block' },
    { id: 'C104', block: 'C', floor: '1', capacity: 40, status: 'restricted', hasAC: false, hasProjector: true, hasWhiteboard: false, availableSlots: [], building: 'Auditorium Block' },
  ];

  // Get unique blocks and floors
  const blocks = ['All', ...new Set(classrooms.map(room => room.block))];
  const floors = ['All', ...new Set(classrooms.map(room => room.floor))];

  // Filter classrooms
  const filteredClassrooms = classrooms.filter(room => {
    const matchesBlock = selectedBlock === 'All' || room.block === selectedBlock;
    const matchesFloor = selectedFloor === 'All' || room.floor === selectedFloor;
    return matchesBlock && matchesFloor;
  });

  // Get status counts
  const statusCounts = filteredClassrooms.reduce(
    (acc, room) => {
      acc[room.status] = (acc[room.status] || 0) + 1;
      return acc;
    },
    { available: 0, occupied: 0, restricted: 0 }
  );

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 border-green-600 shadow-green-200';
      case 'occupied':
        return 'bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 border-red-600 shadow-red-200';
      case 'restricted':
        return 'bg-gradient-to-br from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 border-gray-600 shadow-gray-200';
      default:
        return 'bg-gradient-to-br from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 border-gray-600 shadow-gray-200';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-green-800 bg-green-100 border-green-200';
      case 'occupied':
        return 'text-red-800 bg-red-100 border-red-200';
      case 'restricted':
        return 'text-gray-800 bg-gray-100 border-gray-200';
      default:
        return 'text-gray-800 bg-gray-100 border-gray-200';
    }
  };

  // Event handlers
  const handleClassroomClick = (classroom) => {
    setSelectedClassroom(classroom);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClassroom(null);
    setShowBookingForm(false);
    setSubmissionSuccess(false);
    setBookingData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      timeSlot: '',
      priority: 'medium',
      purpose: 'study'
    });
  };

  const handleOpenBookingForm = () => {
    setShowBookingForm(true);
    setBookingData({
      ...bookingData,
      title: `Classroom ${selectedClassroom.id} Booking Request`
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create request object
    const requestData = {
      id: `REQ${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      type: "classroom_booking",
      title: bookingData.title,
      requestedBy: "Rahul Kumar",
      userType: "student",
      date: new Date().toISOString().split('T')[0],
      status: "pending",
      priority: bookingData.priority,
      description: bookingData.description,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      classroomId: selectedClassroom.id,
      timeSlot: bookingData.timeSlot,
      purpose: bookingData.purpose,
      facilities: {
        hasAC: selectedClassroom.hasAC,
        hasProjector: selectedClassroom.hasProjector,
        hasWhiteboard: selectedClassroom.hasWhiteboard
      }
    };

    console.log('Booking Request Submitted:', requestData);
    
    setIsSubmitting(false);
    setSubmissionSuccess(true);
  };

  const clearFilters = () => {
    setSelectedBlock('All');
    setSelectedFloor('All');
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
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Find Empty Classrooms
                  </h1>
                  <p className="text-gray-600 mt-1">Book your perfect study space instantly</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Real-time availability • Updated every 5 minutes</span>
              </div>
            </div>
            
            {/* Status Summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-2xl font-bold text-green-700">{statusCounts.available}</div>
                <div className="text-sm text-green-600">Available</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
                <div className="text-2xl font-bold text-red-700">{statusCounts.occupied}</div>
                <div className="text-sm text-red-600">Occupied</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="text-2xl font-bold text-gray-700">{statusCounts.restricted}</div>
                <div className="text-sm text-gray-600">Restricted</div>
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
            <h3 className="text-xl font-bold text-gray-900">Filter Your Perfect Space</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Building className="h-4 w-4 inline mr-2 text-blue-600" />
                Building Block
              </label>
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all group-hover:border-gray-300"
              >
                {blocks.map(block => (
                  <option key={block} value={block}>
                    {block === 'All' ? 'All Blocks' : `Block ${block}`}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Layers className="h-4 w-4 inline mr-2 text-purple-600" />
                Floor Level
              </label>
              <select
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-all group-hover:border-gray-300"
              >
                {floors.map(floor => (
                  <option key={floor} value={floor}>
                    {floor === 'All' ? 'All Floors' : `Floor ${floor}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <label className="block text-sm font-semibold text-blue-700 mb-2">
                <Clock className="h-4 w-4 inline mr-2" />
                Current Time
              </label>
              <div className="text-xl font-bold text-blue-800">
                {new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Users className="h-4 w-4 inline mr-2" />
                Total Rooms
              </label>
              <div className="text-xl font-bold text-gray-800">{filteredClassrooms.length}</div>
            </div>
          </div>
        </div>

        {/* Classroom Grid */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Available Classrooms
              {selectedBlock !== 'All' && ` - Block ${selectedBlock}`}
              {selectedFloor !== 'All' && ` - Floor ${selectedFloor}`}
            </h3>
            
            {/* Legend */}
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded shadow-sm"></div>
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded shadow-sm"></div>
                <span className="text-gray-600">Occupied</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded shadow-sm"></div>
                <span className="text-gray-600">Restricted</span>
              </div>
            </div>
          </div>
          
          {filteredClassrooms.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Classrooms Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
              <button 
                onClick={clearFilters}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {filteredClassrooms.map((classroom) => (
                <button
                  key={classroom.id}
                  onClick={() => handleClassroomClick(classroom)}
                  className={`
                    relative aspect-square rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                    ${getStatusColor(classroom.status)}
                    ${classroom.status === 'restricted' ? 'cursor-not-allowed opacity-75' : 'cursor-pointer shadow-lg'}
                    text-white font-bold text-sm
                    flex flex-col items-center justify-center p-3
                  `}
                  disabled={classroom.status === 'restricted'}
                >
                  <div className="text-lg font-bold mb-2">{classroom.id}</div>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Users className="h-4 w-4" />
                    <span className="text-xs">{classroom.capacity}</span>
                  </div>
                  
                  <div className="flex gap-1">
                    {classroom.hasAC && <div className="w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>}
                    {classroom.hasProjector && <div className="w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>}
                    {classroom.hasWhiteboard && <div className="w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedClassroom && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {!showBookingForm ? (
              <>
                {/* Classroom Details */}
                <div className="relative p-8 border-b border-gray-100">
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        Classroom {selectedClassroom.id}
                      </h3>
                      <p className="text-gray-600">{selectedClassroom.building}</p>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold border-2 ${getStatusTextColor(selectedClassroom.status)}`}>
                      {selectedClassroom.status === 'available' && <CheckCircle className="h-4 w-4 mr-2" />}
                      {selectedClassroom.status === 'occupied' && <AlertCircle className="h-4 w-4 mr-2" />}
                      {selectedClassroom.status === 'restricted' && <X className="h-4 w-4 mr-2" />}
                      {selectedClassroom.status.charAt(0).toUpperCase() + selectedClassroom.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Basic Info */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <Building className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm text-gray-600 mb-1">Block</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedClassroom.block}</div>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <Layers className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <div className="text-sm text-gray-600 mb-1">Floor</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedClassroom.floor}</div>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                      <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <div className="text-sm text-gray-600 mb-1">Capacity</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedClassroom.capacity}</div>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Monitor className="h-6 w-6 text-blue-600" />
                      Available Facilities
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${selectedClassroom.hasAC ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
                        <Thermometer className="h-8 w-8 mb-3" />
                        <span className="font-semibold text-sm text-center">
                          {selectedClassroom.hasAC ? 'AC Available' : 'No AC'}
                        </span>
                      </div>
                      
                      <div className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${selectedClassroom.hasProjector ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
                        <Monitor className="h-8 w-8 mb-3" />
                        <span className="font-semibold text-sm text-center">
                          {selectedClassroom.hasProjector ? 'Projector Available' : 'No Projector'}
                        </span>
                      </div>

                      <div className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${selectedClassroom.hasWhiteboard ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
                        <FileText className="h-8 w-8 mb-3" />
                        <span className="font-semibold text-sm text-center">
                          {selectedClassroom.hasWhiteboard ? 'Whiteboard Available' : 'No Whiteboard'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Available Time Slots */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Clock className="h-6 w-6 text-green-600" />
                      Available Time Slots Today
                    </h4>
                    
                    {selectedClassroom.availableSlots.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedClassroom.availableSlots.map((slot, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all">
                            <div className="bg-green-600 p-2 rounded-full">
                              <Clock className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <span className="text-green-800 font-bold text-lg">{slot}</span>
                              <div className="text-green-600 text-sm">Available for booking</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center p-8 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-2 border-red-200">
                        <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                        <span className="text-red-700 font-semibold text-lg">No available slots today</span>
                        <div className="text-red-600 text-sm mt-2">Check back tomorrow or try a different room</div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    {selectedClassroom.status === 'available' && selectedClassroom.availableSlots.length > 0 ? (
                      <>
                        <button 
                          onClick={handleOpenBookingForm}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <Calendar className="h-5 w-5 inline mr-2" />
                          Book This Room
                        </button>
                        <button 
                          onClick={handleCloseModal}
                          className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={handleCloseModal}
                        className="w-full bg-gray-600 text-white py-4 px-6 rounded-xl hover:bg-gray-700 transition-all font-bold text-lg"
                      >
                        Close
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              /* Booking Form */
              <>
                <div className="relative p-8 border-b border-gray-100">
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-2xl">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Book Classroom {selectedClassroom.id}</h3>
                      <p className="text-gray-600">Submit your booking request to admin</p>
                    </div>
                  </div>
                </div>

                {submissionSuccess ? (
                  <div className="p-8 text-center">
                    <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6">
                      <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h3>
                    <p className="text-gray-600 mb-6">Your booking request has been sent to the admin for approval. You'll receive an email confirmation shortly.</p>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-6">
                      <div className="text-sm text-blue-800">
                        <strong>Request ID:</strong> REQ{Math.random().toString(36).substr(2, 6).toUpperCase()}
                      </div>
                      <div className="text-sm text-blue-800 mt-1">
                        <strong>Status:</strong> Pending Admin Approval
                      </div>
                    </div>
                    <button 
                      onClick={handleCloseModal}
                      className="bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-blue-700 transition-all font-bold"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FileText className="h-4 w-4 inline mr-2 text-blue-600" />
                        Request Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={bookingData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="e.g., Study Group Session for Database Course"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        value={bookingData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                        placeholder="Please describe the purpose of your booking request..."
                      />
                    </div>

                    {/* Date Range */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <Calendar className="h-4 w-4 inline mr-2 text-purple-600" />
                          Start Date *
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={bookingData.startDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          End Date *
                        </label>
                        <input
                          type="date"
                          name="endDate"
                          value={bookingData.endDate}
                          onChange={handleInputChange}
                          required
                          min={bookingData.startDate || new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Clock className="h-4 w-4 inline mr-2 text-green-600" />
                        Preferred Time Slot *
                      </label>
                      <select
                        name="timeSlot"
                        value={bookingData.timeSlot}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all bg-white"
                      >
                        <option value="">Select a time slot</option>
                        {selectedClassroom.availableSlots.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>

                    {/* Purpose and Priority */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Purpose *
                        </label>
                        <select
                          name="purpose"
                          value={bookingData.purpose}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                        >
                          <option value="study">Study Session</option>
                          <option value="meeting">Group Meeting</option>
                          <option value="presentation">Presentation Practice</option>
                          <option value="project">Project Work</option>
                          <option value="exam_prep">Exam Preparation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Priority Level *
                        </label>
                        <select
                          name="priority"
                          value={bookingData.priority}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white"
                        >
                          <option value="low">Low Priority</option>
                          <option value="medium">Medium Priority</option>
                          <option value="high">High Priority</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>

                    {/* Classroom Info Summary */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h5 className="font-bold text-gray-900 mb-4">Booking Summary</h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Room:</span>
                          <span className="font-semibold text-gray-900 ml-2">{selectedClassroom.id}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Capacity:</span>
                          <span className="font-semibold text-gray-900 ml-2">{selectedClassroom.capacity} persons</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Location:</span>
                          <span className="font-semibold text-gray-900 ml-2">Block {selectedClassroom.block}, Floor {selectedClassroom.floor}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Facilities:</span>
                          <div className="flex gap-1 mt-1">
                            {selectedClassroom.hasAC && <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">AC</span>}
                            {selectedClassroom.hasProjector && <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Projector</span>}
                            {selectedClassroom.hasWhiteboard && <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Whiteboard</span>}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 ${
                          isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                        } text-white`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full inline mr-2"></div>
                            Submitting Request...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 inline mr-2" />
                            Submit Booking Request
                          </>
                        )}
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        disabled={isSubmitting}
                        className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium disabled:opacity-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmptyClassroomFinder;