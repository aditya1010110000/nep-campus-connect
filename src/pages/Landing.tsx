import {
  Brain,
  Calendar,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description:
      "Advanced algorithms create optimal timetables following NEP guidelines",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intelligent conflict resolution and resource optimization",
  },
  {
    icon: Users,
    title: "Multi-Role Management",
    description:
      "Separate interfaces for administrators, faculty, and students",
  },
  {
    icon: BookOpen,
    title: "NEP Compliance",
    description:
      "Built-in compliance with National Education Policy requirements",
  },
];

const benefits = [
  "Automated timetable generation in minutes",
  "Zero scheduling conflicts guaranteed",
  "NEP 2020 compliant structure",
  "Real-time updates and modifications",
  "Faculty workload optimization",
  "Student credit hour tracking",
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex">
            <img src="/Logo.png" alt="" className="w-10 h-10 mr-0 pr-0" />

            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-bold">Time <span className="text-blue-800">GRID</span></h1>
                <p className="text-sm text-gray-500">AI-Powered Scheduling</p>
              </div>
            </div>
          </div>
          <Button onClick={() => navigate("/role-selection")}>
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Smart Timetable Generation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your academic scheduling with AI-powered timetable
            generation. Create conflict-free, NEP-compliant schedules in
            minutes, not hours.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 bg-blue-500 hover:bg-indigo-700 text-white"
              onClick={() => navigate("/login")}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-gray-300 text-gray-700"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to create and manage academic timetables
              efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our System?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => navigate("/login")}
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Ready to Transform?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join hundreds of institutions already using our AI-powered
                  system
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">
                      500+
                    </div>
                    <div className="text-xs text-gray-500">Institutions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">
                      50K+
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">
                      99.9%
                    </div>
                    <div className="text-xs text-gray-500">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">NEP Timetable System</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 NEP Timetable System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
