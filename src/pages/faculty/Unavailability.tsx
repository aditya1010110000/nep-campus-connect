import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, FileText, X, Check } from 'lucide-react';

const UnavailabilityRequest = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    reason: '',
    additionalNotes: ''
  });

  // Sample faculty data
  const facultyData = {
    name: "Dr. Sarah Johnson",
    id: "FAC001",
    department: "Computer Science"
  };

  // Time slots for the timetable
  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00", 
    "11:00 - 12:00",
    "12:00 - 13:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Sample timetable data with lectures
  const timetableData = {
    'Monday-09:00 - 10:00': { course: 'Data Structures', room: 'Room 101', code: 'CS201' },
    'Monday-10:00 - 11:00': { course: 'Algorithms', room: 'Room 102', code: 'CS301' },
    'Tuesday-09:00 - 10:00': { course: 'Database Systems', room: 'Room 201', code: 'CS401' },
    'Tuesday-14:00 - 15:00': { course: 'Web Development', room: 'Lab 1', code: 'CS501' },
    'Wednesday-11:00 - 12:00': { course: 'Software Engineering', room: 'Room 301', code: 'CS601' },
    'Wednesday-15:00 - 16:00': { course: 'Data Structures', room: 'Room 101', code: 'CS201' },
    'Thursday-10:00 - 11:00': { course: 'Machine Learning', room: 'Room 401', code: 'CS701' },
    'Thursday-14:00 - 15:00': { course: 'Algorithms', room: 'Room 102', code: 'CS301' },
    'Friday-09:00 - 10:00': { course: 'Web Development', room: 'Lab 1', code: 'CS501' },
    'Friday-16:00 - 17:00': { course: 'Database Systems', room: 'Room 201', code: 'CS401' },
    'Saturday-10:00 - 11:00': { course: 'Software Engineering', room: 'Room 301', code: 'CS601' }
  };

  // Handle cell click to toggle selection
  const handleCellClick = (day, timeSlot) => {
    const key = `${day}-${timeSlot}`;
    const lecture = timetableData[key];
    
    if (!lecture) return; // Only allow selection of scheduled lectures

    const isSelected = selectedSlots.some(slot => slot.key === key);
    
    if (isSelected) {
      setSelectedSlots(selectedSlots.filter(slot => slot.key !== key));
    } else {
      setSelectedSlots([...selectedSlots, {
        key,
        day,
        timeSlot,
        ...lecture
      }]);
    }
  };

  // Get cell styling based on lecture status and selection
  const getCellStyling = (day, timeSlot) => {
    const key = `${day}-${timeSlot}`;
    const lecture = timetableData[key];
    const isSelected = selectedSlots.some(slot => slot.key === key);

    if (!lecture) {
      return "bg-gray-100 text-gray-400 cursor-not-allowed";
    }

    if (isSelected) {
      return "bg-red-500 text-white cursor-pointer transform scale-95 shadow-md";
    }

    return "bg-green-500 text-white cursor-pointer hover:bg-green-600 transition-all duration-200";
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.reason.trim()) {
      alert('Please provide a reason for unavailability');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Submitting request:', {
      faculty: facultyData,
      selectedSlots,
      ...formData,
      submittedAt: new Date().toISOString()
    });

    alert('Unavailability request submitted successfully!');
    setShowModal(false);
    setSelectedSlots([]);
    setFormData({ reason: '', additionalNotes: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unavailability Request</h1>
        <p className="text-gray-600">Select your lectures and submit a request for unavailability</p>
      </div>

      {/* Weekly Timetable Grid */}
      <div className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Weekly Schedule
          </h2>
          
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-200 p-3 bg-gray-50 text-left font-medium text-gray-700 min-w-32">
                    Time
                  </th>
                  {days.map(day => (
                    <th key={day} className="border border-gray-200 p-3 bg-gray-50 text-center font-medium text-gray-700 min-w-36">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map(timeSlot => (
                  <tr key={timeSlot}>
                    <td className="border border-gray-200 p-3 bg-gray-50 font-medium text-gray-700 text-xs">
                      {timeSlot}
                    </td>
                    {days.map(day => {
                      const key = `${day}-${timeSlot}`;
                      const lecture = timetableData[key];
                      
                      return (
                        <td 
                          key={key}
                          className="border border-blue-600 p-0"
                        >
                          <div
                            className={`${getCellStyling(day, timeSlot)} m-2 h-full min-h-16 flex flex-col justify-center text-center text-sm transition-all duration-200`}
                            onClick={() => handleCellClick(day, timeSlot)}
                          >
                            {lecture ? (
                              <>
                                <div className="text-xs">{lecture.course}</div>
                                <div className="text-xs opacity-90">{lecture.room}</div>
                              </>
                            ) : (
                              <div className="text-xs">No Lecture</div>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-600">Scheduled Lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-600">Selected for Unavailability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 border rounded"></div>
              <span className="text-gray-600">No Lecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Slots Preview */}
      <div className="bg-white rounded-lg shadow-sm border mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Selected Lectures ({selectedSlots.length})
          </h2>
          
          {selectedSlots.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Click on green lecture slots in the timetable above to select them for unavailability request
            </p>
          ) : (
            <div className="grid gap-3">
              {selectedSlots.map((slot, index) => (
                <div key={slot.key} className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{slot.course}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {slot.day}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {slot.timeSlot}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {slot.room}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCellClick(slot.day, slot.timeSlot)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create Request Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          disabled={selectedSlots.length === 0}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200"
        >
          <FileText className="w-5 h-5" />
          Create Request ({selectedSlots.length} lectures)
        </button>
      </div>

      {/* Request Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Unavailability Request Form</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div>
                {/* Faculty Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Faculty Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Faculty Name</label>
                      <input
                        type="text"
                        value={facultyData.name}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Faculty ID</label>
                      <input
                        type="text"
                        value={facultyData.id}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Selected Lectures Summary */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Selected Lectures</h3>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
                    {selectedSlots.map((slot, index) => (
                      <div key={slot.key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="text-sm text-gray-900">{slot.course}</span>
                        <span className="text-sm text-gray-600">{slot.day}, {slot.timeSlot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reason for Unavailability */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Unavailability *
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Please provide a detailed reason for your unavailability request..."
                  />
                </div>

                {/* Additional Notes */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Any additional information or alternative arrangements..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center gap-2"
                  >
                    <Check className="w-5 h-5" />
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

export default UnavailabilityRequest;