import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  UserCheck,
  LogOut,
  Settings,
  Menu,
  Users,
  Calendar,
  FileText,
  Inbox,
  Clock,
  BookOpen,
  Bell,
  MessageSquare,
  Home,
  CreditCard,
  Building,
} from "lucide-react";

interface User {
  role: string;
  username: string;
  name: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("nepUser");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("nepUser");
    navigate("/");
  };

  if (!user) return null;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar user={user} />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="nep-header flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden" />
              <div className="flex items-center gap-3">
                <div className="flex">
                  <img src="/Logo.png" alt="" className="w-10 h-10 mr-0 pr-0" />

                  <div className="flex items-center gap-3">
                    <div>
                      <h1 className="text-xl font-bold">
                        Time <span className="text-blue-800">GRID</span>
                      </h1>
                      <p className="text-sm text-gray-500">
                        AI-Powered Scheduling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt={user.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="max-w-full mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const DashboardSidebar = ({ user }: { user: User }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavigationItems = () => {
    switch (user.role) {
      case "admin":
        return [
          { title: "Dashboard", url: "/admin", icon: Home },
          { title: "Manage Faculty", url: "/admin/faculty", icon: Users },
          { title: "Manage Students", url: "/admin/students", icon: Users },
          {
            title: "Timetable Generator",
            url: "/admin/timetable",
            icon: Calendar,
          },
          { title: "Requests Inbox", url: "/admin/requests", icon: Inbox },
        ];
      case "faculty":
        return [
          { title: "Dashboard", url: "/faculty", icon: Home },
          { title: "Today's Schedule", url: "/faculty/schedule", icon: Clock },
          {
            title: "Courses & Credits",
            url: "/faculty/courses",
            icon: BookOpen,
          },
          {
            title: "Request Unavailability",
            url: "/faculty/unavailability",
            icon: Calendar,
          },
          {
            title: "Class Swapping",
            url: "/faculty/swapping",
            icon: MessageSquare,
          },
          { title: "Notifications", url: "/faculty/notifications", icon: Bell },
        ];
      case "student":
        return [
          { title: "Dashboard", url: "/student", icon: Home },
          { title: "Today's Schedule", url: "/student/schedule", icon: Clock },
          { title: "Notifications", url: "/student/notifications", icon: Bell },
          {
            title: "Credits Enrolled",
            url: "/student/credits",
            icon: CreditCard,
          },
          {
            title: "Empty Classrooms",
            url: "/student/classrooms",
            icon: Building,
          },
          {
            title: "Accommodation Requests",
            url: "/student/accommodation",
            icon: FileText,
          },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-primary font-medium">
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`w-full ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/50"
                      }`}
                    >
                      <button
                        onClick={() => navigate(item.url)}
                        className="flex items-center gap-3 p-3 text-left"
                      >
                        <Icon className="h-5 w-5" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardLayout;
