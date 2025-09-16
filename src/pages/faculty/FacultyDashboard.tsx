import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Calendar, Bell, MessageSquare, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const navigate = useNavigate();

  const todaySchedule = [
    { time: "09:00 AM", subject: "Computer Science 101", room: "A-201", students: 45 },
    { time: "11:00 AM", subject: "Data Structures", room: "B-105", students: 38 },
    { time: "02:00 PM", subject: "Algorithms", room: "A-301", students: 42 },
    { time: "04:00 PM", subject: "Office Hours", room: "Faculty Lounge", students: "Open" },
  ];

  const stats = [
    { title: "Courses Teaching", value: "6", icon: BookOpen },
    { title: "Total Students", value: "247", icon: TrendingUp },
    { title: "Classes Today", value: "4", icon: Clock },
    { title: "Pending Requests", value: "2", icon: MessageSquare },
  ];

  const notifications = [
    { title: "Class swap request approved", time: "1 hour ago", type: "success" },
    { title: "Student accommodation request", time: "3 hours ago", type: "info" },
    { title: "Timetable update available", time: "5 hours ago", type: "warning" },
  ];

  const quickActions = [
    {
      title: "View Full Schedule",
      description: "See your complete weekly timetable",
      icon: Clock,
      action: () => navigate("/faculty/schedule")
    },
    {
      title: "Request Unavailability",
      description: "Submit time-off requests",
      icon: Calendar,
      action: () => navigate("/faculty/unavailability")
    },
    {
      title: "Class Swapping",
      description: "Request class exchanges with colleagues",
      icon: MessageSquare,
      action: () => navigate("/faculty/swapping")
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Faculty Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Good morning! Here's your schedule and updates for today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="nep-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

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
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{class_.subject}</h3>
                    <p className="text-sm text-muted-foreground">
                      {class_.room} • {class_.students} students
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

        {/* Notifications & Quick Actions */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card className="nep-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.map((notification, index) => (
                <div key={index} className="p-3 border-l-2 border-primary-light">
                  <p className="text-sm font-medium text-foreground">{notification.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Notifications
              </Button>
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

export default FacultyDashboard;