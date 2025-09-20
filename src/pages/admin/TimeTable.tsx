import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Upload, 
  FileText, 
  Users, 
  Building, 
  BookOpen, 
  Settings,
  Play,
  CheckCircle,
  Zap,
  Clock,
  XCircle,
  RefreshCw,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUpload {
  name: string;
  uploaded: boolean;
}

interface DepartmentStatus {
  name: string;
  status: 'pending' | 'in-progress' | 'generated' | 'failed';
  progress?: number;
}

const TimetableGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(false);
  const [betaEmail, setBetaEmail] = useState("");
  
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, FileUpload>>({
    students: { name: "", uploaded: false },
    faculty: { name: "", uploaded: false },
    rooms: { name: "", uploaded: false },
    courses: { name: "", uploaded: false },
    constraints: { name: "", uploaded: false }
  });

  const [departmentStatuses, setDepartmentStatuses] = useState<DepartmentStatus[]>([
    { name: "Computer Science", status: "pending" },
    { name: "Electronics", status: "pending" },
    { name: "Mechanical", status: "pending" },
    { name: "Civil", status: "pending" },
    { name: "AI/DS", status: "pending" }
  ]);

  const handleFileUpload = (fileType: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [fileType]: { name: file.name, uploaded: true }
      }));
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'generated':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-gray-400" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'generated':
        return '✅ Generated';
      case 'in-progress':
        return '⚡ In Progress';
      case 'pending':
        return '⏳ Pending';
      case 'failed':
        return '❌ Failed';
      default:
        return '⏳ Pending';
    }
  };

  const simulateGeneration = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Reset all departments to pending
    setDepartmentStatuses(prev => prev.map(dept => ({ ...dept, status: 'pending' as const })));
    
    const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'AI/DS'];
    
    for (let i = 0; i < departments.length; i++) {
      // Set current department to in-progress
      setDepartmentStatuses(prev => prev.map(dept => 
        dept.name === departments[i] 
          ? { ...dept, status: 'in-progress' as const }
          : dept
      ));
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Random chance of failure for Civil department
      const shouldFail = departments[i] === 'Civil' && Math.random() < 0.7;
      
      setDepartmentStatuses(prev => prev.map(dept => 
        dept.name === departments[i]
          ? { ...dept, status: shouldFail ? 'failed' as const : 'generated' as const }
          : dept
      ));
      
      setGenerationProgress(((i + 1) / departments.length) * 100);
    }
    
    setIsGenerating(false);
    toast({
      title: "Timetable Generation Complete",
      description: "Timetables have been generated for all departments.",
    });
  };

  const retryDepartment = (departmentName: string) => {
    setDepartmentStatuses(prev => prev.map(dept => 
      dept.name === departmentName
        ? { ...dept, status: 'generated' as const }
        : dept
    ));
    toast({
      title: "Retry Successful",
      description: `${departmentName} timetable has been generated successfully.`,
    });
  };

  const handleBetaSignup = () => {
    if (betaEmail) {
      toast({
        title: "Beta Signup Successful",
        description: `Thank you! We'll notify you at ${betaEmail} when beta access is available.`,
      });
      setBetaEmail("");
      setIsBetaDialogOpen(false);
    }
  };

  const uploadSections = [
    { key: 'students', label: 'Student Data', icon: Users, color: 'text-blue-600' },
    { key: 'faculty', label: 'Faculty Data', icon: Users, color: 'text-green-600' },
    { key: 'rooms', label: 'Room Data', icon: Building, color: 'text-purple-600' },
    { key: 'courses', label: 'Course Data', icon: BookOpen, color: 'text-orange-600' },
    { key: 'constraints', label: 'Extra Constraints', icon: Settings, color: 'text-gray-600' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Timetable Generator</h1>
        <p className="text-lg text-gray-600">
          Generate optimized timetables for your institution using our AI-powered scheduling system
        </p>
      </div>

      {/* File Upload Section */}
      <Card className="border-2 border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Upload className="w-6 h-6" />
            Data Upload
          </CardTitle>
          <CardDescription>
            Upload your institutional data files to generate optimized timetables
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadSections.map(({ key, label, icon: Icon, color }) => (
              <div key={key} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-5 h-5 ${color}`} />
                  <Label className="font-medium text-gray-900">{label}</Label>
                </div>
                
                {uploadedFiles[key].uploaded ? (
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-200">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-700 truncate">
                      {uploadedFiles[key].name}
                    </span>
                    <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
                  </div>
                ) : (
                  <div>
                    <Input
                      type="file"
                      accept=".xlsx,.csv"
                      onChange={(e) => handleFileUpload(key, e)}
                      className="cursor-pointer file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Accepts .xlsx or .csv files</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Generation Button */}
      <div className="text-center">
        <Button
          onClick={simulateGeneration}
          disabled={isGenerating}
          className="px-12 py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-6 h-6 mr-2 animate-spin" />
              Generating Timetables...
            </>
          ) : (
            <>
              <Play className="w-6 h-6 mr-2" />
              Generate Timetable
            </>
          )}
        </Button>
        
        {isGenerating && (
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(generationProgress)}%</span>
            </div>
            <Progress value={generationProgress} className="h-3" />
          </div>
        )}
      </div>

      {/* Generation Status Section */}
      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            Generation Status by Department
          </CardTitle>
          <CardDescription>
            Monitor the timetable generation progress for each department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departmentStatuses.map((dept) => (
              <div 
                key={dept.name} 
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{dept.name}</h3>
                  {getStatusIcon(dept.status)}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {getStatusText(dept.status)}
                  </span>
                  
                  {dept.status === 'failed' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => retryDepartment(dept.name)}
                      className="text-xs px-2 py-1 h-7"
                    >
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Retry
                    </Button>
                  )}
                </div>
                
                {dept.status === 'in-progress' && (
                  <Progress value={65} className="h-2 mt-2" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Coming Soon Section */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Sparkles className="w-6 h-6" />
            Coming Soon: Advanced Timetable Generator
          </CardTitle>
          <CardDescription className="text-blue-700">
            Get early access to our next-generation AI-powered timetable generator with advanced optimization algorithms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900">✨ New Features</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Real-time conflict resolution</li>
                  <li>• Machine learning optimization</li>
                  <li>• Multi-campus support</li>
                  <li>• Advanced constraint handling</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900">🚀 Enhanced Performance</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 10x faster generation</li>
                  <li>• Better resource utilization</li>
                  <li>• Smart conflict prediction</li>
                  <li>• Automated quality scoring</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <Dialog open={isBetaDialogOpen} onOpenChange={setIsBetaDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join Beta Program
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Join Beta Program</DialogTitle>
                    <DialogDescription>
                      Be among the first to experience our advanced timetable generator. 
                      We'll notify you when beta access becomes available.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="beta-email">Email Address</Label>
                      <Input
                        id="beta-email"
                        type="email"
                        placeholder="your.email@institution.edu"
                        value={betaEmail}
                        onChange={(e) => setBetaEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsBetaDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleBetaSignup}>
                      Sign Up for Beta
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
              <span className="text-sm text-blue-700">
                Expected release: Q2 2024
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimetableGenerator;