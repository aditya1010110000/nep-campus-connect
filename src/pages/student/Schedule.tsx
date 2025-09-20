import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Book, MapPin, User, GraduationCap, ChevronRight } from 'lucide-react';

const StudentScheduleDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sample schedule data
  const scheduleData = {
    '2025-09-19': [
      { id: 1, time: '09:00 - 10:30', course: 'Data Structures & Algorithms', room: 'CS-201', faculty: 'Dr. Sarah Johnson', credits: 4, startTime: '09:00', endTime: '10:30' },
      { id: 2, time: '11:00 - 12:30', course: 'Database Management Systems', room: 'CS-105', faculty: 'Prof. Michael Chen', credits: 3, startTime: '11:00', endTime: '12:30' },
      { id: 3, time: '14:00 - 15:30', course: 'Computer Networks', room: 'CS-301', faculty: 'Dr. Emily Rodriguez', credits: 3, startTime: '14:00', endTime: '15:30' },
      { id: 4, time: '16:00 - 17:30', course: 'Software Engineering', room: 'CS-202', faculty: 'Prof. David Wilson', credits: 4, startTime: '16:00', endTime: '17:30' }
    ],
    '2025-09-20': [
      { id: 5, time: '10:00 - 11:30', course: 'Machine Learning', room: 'CS-401', faculty: 'Dr. Lisa Park', credits: 4, startTime: '10:00', endTime: '11:30' },
      { id: 6, time: '13:00 - 14:30', course: 'Web Development', room: 'CS-302', faculty: 'Prof. James Lee', credits: 3, startTime: '13:00', endTime: '14:30' },
      { id: 7, time: '15:00 - 16:30', course: 'Data Analytics', room: 'CS-203', faculty: 'Dr. Anna Kumar', credits: 3, startTime: '15:00', endTime: '16:30' }
    ]
  };

  const todaySchedule = scheduleData[selectedDate] || [];

  // Function to determine lecture status
  const getLectureStatus = (startTime, endTime) => {
    const now = currentTime;
    const today = now.toISOString().split('T')[0];
    
    if (selectedDate !== today) {
      return 'normal';
    }

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    
    const startTimeInMinutes = startHour * 60 + startMin;
    const endTimeInMinutes = endHour * 60 + endMin;

    if (currentTimeInMinutes < startTimeInMinutes) {
      return 'upcoming';
    } else if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes) {
      return 'current';
    } else {
      return 'completed';
    }
  };

  // Get next lecture
  const getNextLecture = () => {
    const upcomingLectures = todaySchedule.filter(lecture => 
      getLectureStatus(lecture.startTime, lecture.endTime) === 'upcoming'
    );
    return upcomingLectures.length > 0 ? upcomingLectures[0] : null;
  };

  // Get remaining lectures count
  const getRemainingLectures = () => {
    return todaySchedule.filter(lecture => 
      ['upcoming', 'current'].includes(getLectureStatus(lecture.startTime, lecture.endTime))
    ).length;
  };

  // Check for free slots
  const hasFreeSlots = () => {
    if (todaySchedule.length < 2) return todaySchedule.length === 0;
    
    for (let i = 0; i < todaySchedule.length - 1; i++) {
      const currentEndTime = todaySchedule[i].endTime;
      const nextStartTime = todaySchedule[i + 1].startTime;
      
      const [currentEndHour, currentEndMin] = currentEndTime.split(':').map(Number);
      const [nextStartHour, nextStartMin] = nextStartTime.split(':').map(Number);
      
      const currentEndInMinutes = currentEndHour * 60 + currentEndMin;
      const nextStartInMinutes = nextStartHour * 60 + nextStartMin;
      
      if (nextStartInMinutes - currentEndInMinutes > 30) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (dateString === today.toISOString().split('T')[0]) {
      return 'Today';
    } else if (dateString === tomorrow.toISOString().split('T')[0]) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                Today's Schedule
              </h1>
              <p className="text-gray-600 mt-1">Here's your timetable for today's classes</p>
            </div>
            
            <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
              <Calendar className="h-5 w-5 text-blue-600" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent border-none outline-none text-blue-800 font-medium cursor-pointer"
              />
            </div>
          </div>
          
          <div className="mt-4 text-lg font-medium text-blue-700">
            {formatDate(selectedDate)} - {new Date(selectedDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Schedule Table - Desktop */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          {todaySchedule.length > 0 ? (
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Time
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-2">
                      <Book className="h-4 w-4" />
                      Course Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Room No.
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Faculty Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Credits
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {todaySchedule.map((lecture) => {
                  const status = getLectureStatus(lecture.startTime, lecture.endTime);
                  return (
                    <tr
                      key={lecture.id}
                      className={`
                        ${status === 'completed' ? 'bg-gray-50 opacity-60' : ''}
                        ${status === 'current' ? 'bg-green-50 border-l-4 border-green-500' : ''}
                        ${status === 'upcoming' ? 'bg-white hover:bg-blue-50' : ''}
                        transition-colors duration-200
                      `}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {lecture.time}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div className="font-medium">{lecture.course}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {lecture.room}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {lecture.faculty}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                          {lecture.credits} CR
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="p-12 text-center">
              <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Classes Today</h3>
              <p className="text-gray-500">Enjoy your free day! 🎉</p>
            </div>
          )}
        </div>

        {/* Schedule Cards - Mobile */}
        <div className="md:hidden space-y-4 mb-8">
          {todaySchedule.length > 0 ? (
            todaySchedule.map((lecture) => {
              const status = getLectureStatus(lecture.startTime, lecture.endTime);
              return (
                <div
                  key={lecture.id}
                  className={`
                    p-4 rounded-xl shadow-sm border-2 transition-all duration-200
                    ${status === 'completed' ? 'bg-gray-50 border-gray-200 opacity-60' : ''}
                    ${status === 'current' ? 'bg-green-50 border-green-300 shadow-md' : ''}
                    ${status === 'upcoming' ? 'bg-white border-blue-200 hover:shadow-md' : ''}
                  `}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-900">{lecture.time}</span>
                    {status === 'current' && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        LIVE
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{lecture.course}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {lecture.room}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{lecture.faculty}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="h-4 w-4" />
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                        {lecture.credits} Credits
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Classes Today</h3>
              <p className="text-gray-500">Enjoy your free day! 🎉</p>
            </div>
          )}
        </div>

        {/* Compact Summary Cards */}
        {todaySchedule.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Next Lecture Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Next Lecture</h3>
              </div>
              
              {getNextLecture() ? (
                <div>
                  <p className="font-medium text-gray-900 mb-1">{getNextLecture().course}</p>
                  <p className="text-sm text-gray-600 mb-1">{getNextLecture().time}</p>
                  <p className="text-sm text-blue-600 font-medium">{getNextLecture().room}</p>
                </div>
              ) : (
                <p className="text-gray-500">All lectures completed for today! 🎉</p>
              )}
            </div>

            {/* Remaining Lectures Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Remaining Today</h3>
              </div>
              
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{getRemainingLectures()}</p>
                <p className="text-sm text-gray-600">
                  {getRemainingLectures() === 1 ? 'lecture left' : 'lectures left'}
                </p>
              </div>
            </div>

            {/* Free Slots Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Free Time</h3>
              </div>
              
              <div>
                <p className="font-medium text-gray-900 mb-1">
                  {hasFreeSlots() ? 'Yes! 🎉' : 'Packed Schedule'}
                </p>
                <p className="text-sm text-gray-600">
                  {hasFreeSlots() 
                    ? 'You have breaks between classes' 
                    : 'No major gaps today'
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentScheduleDashboard;