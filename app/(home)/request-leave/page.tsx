'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const LeaveApplication = () => {
  const leaveHistory = [
    { id: 1, reason: "Family Emergency", startDate: "2024-06-15", endDate: "2024-06-17", status: "approved", appliedDate: "2024-06-10" },
    { id: 2, reason: "Medical Checkup", startDate: "2024-05-20", endDate: "2024-05-21", status: "approved", appliedDate: "2024-05-15" },
    { id: 3, reason: "Home Visit", startDate: "2024-07-01", endDate: "2024-07-05", status: "pending", appliedDate: "2024-06-20" },
  ];

  return (
    <div className="min-h-screen bg-sidebar p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Leave Application</h1>
          <p className="text-gray-600">Apply for leave and track your applications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Apply for Leave</CardTitle>
              <CardDescription>Fill out the form to request leave from the hostel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Leave</Label>
                <Input id="reason" placeholder="e.g., Family Emergency, Medical, Home Visit" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number While Away</Label>
                <Input id="contact" type="tel" placeholder="+1234567890" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Additional Details</Label>
                <Textarea 
                  id="description" 
                  placeholder="Provide any additional information about your leave..."
                  rows={4}
                />
              </div>

              <Button className="w-full">Submit Leave Application</Button>
            </CardContent>
          </Card>

          {/* Leave History */}
          <Card>
            <CardHeader>
              <CardTitle>Leave History</CardTitle>
              <CardDescription>Track your previous and current leave applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveHistory.map((leave) => (
                  <div key={leave.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{leave.reason}</h3>
                      <Badge 
                        variant={leave.status === 'approved' ? 'default' : leave.status === 'pending' ? 'secondary' : 'destructive'}
                        className={
                          leave.status === 'approved' ? 'bg-green-100 text-green-800' :
                          leave.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }
                      >
                        {leave.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {leave.startDate} to {leave.endDate}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Applied on {leave.appliedDate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplication;
