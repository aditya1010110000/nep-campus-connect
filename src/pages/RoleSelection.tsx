import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCheck, BookOpen, GraduationCap, Shield } from "lucide-react";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const roles = [
    {
      id: "admin",
      title: "Administrator",
      description: "Manage faculty, students, and system operations",
      icon: Shield,
      color: "primary",
      route: "/admin"
    },
    {
      id: "faculty",
      title: "Faculty Member",
      description: "Manage courses, schedules, and student interactions",
      icon: BookOpen,
      color: "primary",
      route: "/faculty"
    },
    {
      id: "student",
      title: "Student",
      description: "View schedules, notifications, and submit requests",
      icon: GraduationCap,
      color: "primary",
      route: "/student"
    }
  ];

  const handleLogin = () => {
    if (selectedRole && credentials.username && credentials.password) {
      const role = roles.find(r => r.id === selectedRole);
      if (role) {
        // Store user info in localStorage for demo purposes
        localStorage.setItem('nepUser', JSON.stringify({
          role: selectedRole,
          username: credentials.username,
          name: credentials.username.charAt(0).toUpperCase() + credentials.username.slice(1)
        }));
        navigate(role.route);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
              <UserCheck className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            NEP University Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            National Education Policy implementation system for streamlined academic management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Role Selection */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Select Your Role</h2>
            <div className="space-y-4">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <Card 
                    key={role.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-nep-md ${
                      selectedRole === role.id 
                        ? "ring-2 ring-primary border-primary bg-primary-light" 
                        : "hover:border-primary/30"
                    }`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <CardContent className="flex items-center p-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        selectedRole === role.id 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-1">{role.title}</h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Login Form */}
          <Card className="nep-card">
            <CardHeader>
              <CardTitle className="text-2xl">Login Credentials</CardTitle>
              <CardDescription>
                Enter your university credentials to access the portal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="h-12"
                />
              </div>

              <Button 
                onClick={handleLogin}
                disabled={!selectedRole || !credentials.username || !credentials.password}
                className="w-full h-12 text-base font-medium"
                size="lg"
              >
                Access Portal
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>Demo credentials: Use any username/password combination</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;