/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Plus, Clock, CheckCircle, Camera } from "lucide-react";
import { useState } from "react";

interface Complaint {
  id: number;
  subject: string;
  description: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'resolved';
  dateSubmitted: string;
  dateResolved?: string;
  response?: string;
}

const Complaint = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([
    {
      id: 1,
      subject: "AC not working",
      description: "The air conditioning unit in room A-205 has stopped working. It's not cooling at all.",
      urgency: "high",
      status: "in-progress",
      dateSubmitted: "2024-06-20",
      response: "Maintenance team has been notified. They will visit your room today."
    },
    {
      id: 2,
      subject: "Water leakage in bathroom",
      description: "There's a continuous water leak from the bathroom ceiling.",
      urgency: "medium",
      status: "resolved",
      dateSubmitted: "2024-06-18",
      dateResolved: "2024-06-19",
      response: "Leak has been fixed by our plumbing team."
    },
    {
      id: 3,
      subject: "WiFi connectivity issues",
      description: "Internet connection is very slow and frequently disconnects.",
      urgency: "low",
      status: "pending",
      dateSubmitted: "2024-06-17"
    }
  ]);

  const [newComplaint, setNewComplaint] = useState({
    subject: "",
    description: "",
    urgency: "medium" as const
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmitComplaint = () => {
    const complaint: Complaint = {
      id: Date.now(),
      ...newComplaint,
      status: "pending",
      dateSubmitted: new Date().toISOString().split('T')[0]
    };
    
    setComplaints([complaint, ...complaints]);
    setNewComplaint({
      subject: "",
      description: "",
      urgency: "medium"
    });
    setIsDialogOpen(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in-progress': return <AlertTriangle className="h-4 w-4" />;
      case 'resolved': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Complaints & Issues</h1>
          <p className="text-gray-600">Report issues and track complaint status</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Complaint
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Submit New Complaint</DialogTitle>
              <DialogDescription>
                Describe your issue and we&apos;ll work to resolve it quickly.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of the issue"
                  value={newComplaint.subject}
                  onChange={(e) => setNewComplaint({...newComplaint, subject: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about the issue..."
                  rows={4}
                  value={newComplaint.description}
                  onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select value={newComplaint.urgency} onValueChange={(value: any) => setNewComplaint({...newComplaint, urgency: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait a few days</SelectItem>
                    <SelectItem value="medium">Medium - Should be fixed soon</SelectItem>
                    <SelectItem value="high">High - Urgent attention needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Attach Photo (Optional)</Label>
                <Button variant="outline" className="w-full mt-2">
                  <Camera className="mr-2 h-4 w-4" />
                  Take Photo
                </Button>
              </div>

              <Button 
                onClick={handleSubmitComplaint} 
                className="w-full" 
                disabled={!newComplaint.subject || !newComplaint.description}
              >
                Submit Complaint
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <AlertTriangle className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{complaints.length}</div>
            <p className="text-xs text-muted-foreground mt-1">All complaints</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {complaints.filter(c => c.status === 'pending').length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <AlertTriangle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {complaints.filter(c => c.status === 'in-progress').length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Being worked on</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {complaints.filter(c => c.status === 'resolved').length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Complaints</h2>
        {complaints.map((complaint) => (
          <Card key={complaint.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center">
                    {getStatusIcon(complaint.status)}
                    <span className="ml-2">{complaint.subject}</span>
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Submitted on {complaint.dateSubmitted}
                    {complaint.dateResolved && ` • Resolved on ${complaint.dateResolved}`}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusColor(complaint.status)}>
                    {complaint.status.replace('-', ' ')}
                  </Badge>
                  <Badge variant={getUrgencyColor(complaint.urgency)}>
                    {complaint.urgency} priority
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">{complaint.description}</p>
              {complaint.response && (
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-blue-800 text-sm">
                    <strong>Response:</strong> {complaint.response}
                  </p>
                </div>
              )}
              {complaint.status !== 'resolved' && (
                <Button variant="outline" size="sm" className="mt-3">
                  View Details
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {complaints.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <AlertTriangle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4">No complaints submitted yet.</p>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Submit Your First Complaint</Button>
              </DialogTrigger>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Complaint;
