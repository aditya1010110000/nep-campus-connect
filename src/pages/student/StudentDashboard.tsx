import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Bell, CreditCard, Building, FileText, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const todaySchedule = [
    { time: "09:00 AM", subject: "Mathematics", room: "A-101", professor: "Dr. Smith" },
    { time: "11:00 AM", subject: "Physics", room: "B-205", professor: "Prof. Johnson" },
    { time: "02:00 PM", subject: "Chemistry Lab", room: "Lab-3", professor: "Dr. Brown" },
  ];

  const creditInfo = {
    enrolled: 18,
    total: 24,
    percentage: 75,
    courses: [
      { name: "Mathematics", credits: 4, grade: "A" },
      { name: "Physics", credits: 4, grade: "B+" },
      { name: "Chemistry", credits: 4, grade: "A-" },
      { name: "Computer Science", credits: 3, grade: "A" },
      { name: "English", credits: 3, grade: "B+" },
    ]
  };

  const notifications = [
    { title: "Assignment due tomorrow", course: "Mathematics", time: "2 hours ago", type: "warning" },
    { title: "Class rescheduled", course: "Physics", time: "4 hours ago", type: "info" },
    { title: "New announcement", course: "Chemistry", time: "6 hours ago", type: "info" },
  ];

  const emptyClassrooms = [
    { room: "A-102", time: "10:00 AM - 11:00 AM", capacity: 50 },
    { room: "B-301", time: "12:00 PM - 02:00 PM", capacity: 35 },
    { room: "C-105", time: "03:00 PM - 05:00 PM", capacity: 40 },
  ];

  const quickActions = [
    {
      title: "View Full Schedule",
      description: "See your complete weekly timetable",
      icon: Clock,
      action: () => navigate("/student/schedule")
    },
    {
      title: "Check Credits",
      description: "View detailed credit information",
      icon: CreditCard,
      action: () => navigate("/student/credits")
    },
    {
      title: "Request Accommodation",
      description: "Submit housing requests",
      icon: FileText,
      action: () => navigate("/student/accommodation")
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's your academic overview and today's schedule.
        </p>
      </div>

      {/* Credits Overview */}
      <Card className="nep-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Credits Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-foreground">{creditInfo.enrolled}/{creditInfo.total}</p>
              <p className="text-sm text-muted-foreground">Credits Enrolled</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-primary">{creditInfo.percentage}%</p>
              <p className="text-sm text-muted-foreground">Progress</p>
            </div>
          </div>
          <Progress value={creditInfo.percentage} className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {creditInfo.courses.slice(0, 3).map((course, index) => (
              <div key={index} className="p-3 border border-border rounded-lg">
                <p className="font-medium text-foreground">{course.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-muted-foreground">{course.credits} credits</span>
                  <span className="text-sm font-medium text-primary">{course.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <Card className="nep-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaySchedule.map((class_, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{class_.subject}</h3>
                    <p className="text-sm text-muted-foreground">
                      {class_.room} • {class_.professor}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{class_.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications & Quick Info */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card className="nep-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Important Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.map((notification, index) => (
                <div key={index} className="p-3 border-l-2 border-primary-light">
                  <p className="text-sm font-medium text-foreground">{notification.title}</p>
                  <p className="text-xs text-muted-foreground">{notification.course}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Empty Classrooms */}
          <Card className="nep-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Empty Classrooms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {emptyClassrooms.map((room, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <p className="font-medium text-foreground">{room.room}</p>
                  <p className="text-sm text-muted-foreground">{room.time}</p>
                  <p className="text-xs text-muted-foreground">Capacity: {room.capacity}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="nep-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.title}
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    onClick={action.action}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{action.title}</p>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;