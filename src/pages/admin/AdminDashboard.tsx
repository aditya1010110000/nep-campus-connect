import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Inbox, FileText, TrendingUp, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Faculty",
      value: "125",
      icon: Users,
      color: "primary",
      change: "+5 this month"
    },
    {
      title: "Total Students",
      value: "2,847",
      icon: Users,
      color: "success",
      change: "+127 this semester"
    },
    {
      title: "Active Courses",
      value: "89",
      icon: FileText,
      color: "warning",
      change: "+3 this term"
    },
    {
      title: "Pending Requests",
      value: "23",
      icon: Inbox,
      color: "destructive",
      change: "12 new today"
    }
  ];

  const quickActions = [
    {
      title: "Manage Faculty",
      description: "Add, edit, or remove faculty members",
      icon: Users,
      action: () => navigate("/admin/faculty"),
      color: "primary"
    },
    {
      title: "Generate Timetable",
      description: "Create and publish new timetables",
      icon: Calendar,
      action: () => navigate("/admin/timetable"),
      color: "primary"
    },
    {
      title: "Review Requests",
      description: "Process pending student and faculty requests",
      icon: Inbox,
      action: () => navigate("/admin/requests"),
      color: "primary"
    },
    {
      title: "Student Management",
      description: "View and manage student records",
      icon: Users,
      action: () => navigate("/admin/students"),
      color: "primary"
    }
  ];

  const recentActivity = [
    { action: "New faculty registration", user: "Dr. Sarah Johnson", time: "2 hours ago" },
    { action: "Timetable published", user: "System", time: "4 hours ago" },
    { action: "Student accommodation request", user: "John Smith", time: "6 hours ago" },
    { action: "Faculty unavailability request", user: "Prof. Michael Brown", time: "8 hours ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's an overview of your NEP portal management.
        </p>
      </div>

      {/* Stats Cards */}
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
                    <p className="text-sm text-muted-foreground mt-1">{stat.change}</p>
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

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card className="nep-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.title}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={action.action}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Open
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="nep-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border-l-2 border-primary-light">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">by {activity.user}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;