import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  BookOpen, 
  Clock, 
  MapPin,
  Users,
  GraduationCap
} from "lucide-react";

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
  <tr className={`border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-muted ${className}`} {...props}>
    {children}
  </tr>
);

const TableHead = ({ children, className = "", ...props }: any) => (
  <th className={`h-12 px-4 text-left align-middle font-medium text-gray-600 [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </th>
);

const TableCell = ({ children, className = "", ...props }: any) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </td>
);

interface ScheduleItem {
  id: string;
  time: string;
  endTime: string;
  course: string;
  courseCode: string;
  room: string;
  batch: string;
  duration: string;
  type: 'lecture' | 'lab' | 'tutorial';
}

const TodaysSchedule = () => {
  const currentDate = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

  const [todaysSchedule] = useState<ScheduleItem[]>([
    {
      id: '1',
      time: '09:00',
      endTime: '10:00',
      course: 'Data Structures',
      courseCode: 'CS301',
      room: 'CS-101',
      batch: 'CSE-2023 Sem 3',
      duration: '1 hr',
      type: 'lecture'
    },
    {
      id: '2',
      time: '10:00',
      endTime: '11:00',
      course: 'Database Management Systems',
      courseCode: 'CS302',
      room: 'CS-102',
      batch: 'CSE-2023 Sem 3',
      duration: '1 hr',
      type: 'lecture'
    },
    {
      id: '3',
      time: '11:30',
      endTime: '12:30',
      course: 'Data Structures Lab',
      courseCode: 'CS301L',
      room: 'Lab-A',
      batch: 'CSE-2023 Sem 3',
      duration: '1 hr',
      type: 'lab'
    },
    {
      id: '4',
      time: '12:00',
      endTime: '13:00',
      course: 'Machine Learning',
      courseCode: 'CS501',
      room: 'CS-201',
      batch: 'CSE-2022 Sem 5',
      duration: '1 hr',
      type: 'lecture'
    },
    {
      id: '5',
      time: '14:00',
      endTime: '15:00',
      course: 'Software Engineering',
      courseCode: 'CS401',
      room: 'CS-103',
      batch: 'CSE-2022 Sem 4',
      duration: '1 hr',
      type: 'lecture'
    },
    {
      id: '6',
      time: '15:30',
      endTime: '17:30',
      course: 'Machine Learning Lab',
      courseCode: 'CS501L',
      room: 'Lab-B',
      batch: 'CSE-2022 Sem 5',
      duration: '2 hrs',
      type: 'lab'
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lecture':
        return <BookOpen className="w-4 h-4 text-indigo-600" />;
      case 'lab':
        return <GraduationCap className="w-4 h-4 text-green-600" />;
      case 'tutorial':
        return <Users className="w-4 h-4 text-orange-600" />;
      default:
        return <BookOpen className="w-4 h-4 text-indigo-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100';
      case 'lab':
        return 'bg-green-50 border-green-200 hover:bg-green-100';
      case 'tutorial':
        return 'bg-orange-50 border-orange-200 hover:bg-orange-100';
      default:
        return 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100';
    }
  };

  const getCurrentTimeSlot = () => {
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    return todaysSchedule.find(item => {
      const startTime = parseInt(item.time.replace(':', ''));
      const endTime = parseInt(item.endTime.replace(':', ''));
      return currentTime >= startTime && currentTime <= endTime;
    });
  };

  const currentClass = getCurrentTimeSlot();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600">{formattedDate}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Today's Schedule</h1>
          <p className="text-lg text-gray-600">
            View your lectures and sessions for the day
          </p>
        </div>

        {/* Current Class Alert */}
        {currentClass && (
          <Card className="border-2 border-indigo-200 bg-indigo-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-indigo-900">Currently Teaching</p>
                  <p className="text-indigo-800">
                    {currentClass.course} • {currentClass.room} • {currentClass.time} - {currentClass.endTime}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Full Timetable Table */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Clock className="w-5 h-5 text-indigo-600" />
              Daily Timetable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Time</TableHead>
                    <TableHead className="font-semibold">Course</TableHead>
                    <TableHead className="font-semibold">Room</TableHead>
                    <TableHead className="font-semibold">Batch/Semester</TableHead>
                    <TableHead className="font-semibold">Duration</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {todaysSchedule.map((item) => (
                    <TableRow 
                      key={item.id}
                      className={`hover:bg-gray-50 transition-colors ${
                        currentClass?.id === item.id ? 'bg-indigo-50 border-l-4 border-indigo-500' : ''
                      }`}
                    >
                      <TableCell className="font-medium text-gray-900">
                        {item.time} – {item.endTime}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900">{item.course}</p>
                          <p className="text-sm text-gray-500">{item.courseCode}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{item.room}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-700">{item.batch}</TableCell>
                      <TableCell className="text-gray-700">{item.duration}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(item.type)}
                          <span className="capitalize text-sm font-medium text-gray-700">{item.type}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {todaysSchedule.length === 0 && (
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No classes scheduled for today</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Summary Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todaysSchedule.map((item) => (
              <Card 
                key={`card-${item.id}`} 
                className={`rounded-lg border transition-all duration-200 hover:shadow-md ${getTypeColor(item.type)}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(item.type)}
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                        {item.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.duration}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">
                    {item.course}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{item.courseCode}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{item.room}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{item.time} – {item.endTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{item.batch}</span>
                    </div>
                  </div>
                  
                  {currentClass?.id === item.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-green-700">Currently Active</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {todaysSchedule.length === 0 && (
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Classes Today</h3>
                <p className="text-gray-500">Enjoy your free day! Check back tomorrow for your schedule.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodaysSchedule;