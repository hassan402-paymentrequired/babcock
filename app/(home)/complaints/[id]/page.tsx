'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, AlertTriangle, Clock, CheckCircle, Calendar, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const ComplaintDetails = () => {
  const id = 4;
  const [newMessage, setNewMessage] = useState("");

  // Dummy complaint data
  const complaint = {
    id: id || "1",
    subject: "AC not working",
    description: "The air conditioning unit in room A-205 has stopped working completely. It's not cooling at all and there's no airflow. This has been an issue for the past 3 days and it's becoming very uncomfortable, especially during the hot afternoons. I've tried adjusting the thermostat and checking the power supply, but nothing seems to work.",
    urgency: "high" as const,
    status: "in-progress" as const,
    dateSubmitted: "2024-06-20",
    dateResolved: undefined,
    submittedBy: {
      name: "Alex Johnson",
      id: "CS2021001",
      room: "A-205",
      contact: "alex.johnson@university.edu"
    },
    assignedTo: {
      name: "Maintenance Team",
      department: "Facilities Management",
      contact: "maintenance@hostel.edu"
    },
    priority: "High",
    category: "Electrical/AC",
    images: ["/placeholder.svg"],
    timeline: [
      {
        date: "2024-06-20 09:30",
        action: "Complaint submitted",
        by: "Alex Johnson",
        message: "AC unit completely stopped working"
      },
      {
        date: "2024-06-20 11:15",
        action: "Complaint acknowledged",
        by: "Maintenance Team",
        message: "We have received your complaint and assigned it to our technician."
      },
      {
        date: "2024-06-20 14:00",
        action: "Under investigation",
        by: "Tech Team",
        message: "Our technician has inspected the unit. Ordering replacement parts."
      },
      {
        date: "2024-06-21 10:00",
        action: "In progress",
        by: "Maintenance Team",
        message: "Parts have arrived. Repair work will begin today afternoon."
      }
    ]
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
    <div className="min-h-screen bg-sidebar p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/complaints">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Complaints
            </Link>
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{complaint.subject}</h1>
              <p className="text-gray-600">Complaint #{complaint.id}</p>
            </div>
            <div className="flex gap-2">
              <Badge className={getStatusColor(complaint.status)}>
                {getStatusIcon(complaint.status)}
                <span className="ml-1">{complaint.status.replace('-', ' ')}</span>
              </Badge>
              <Badge variant={getUrgencyColor(complaint.urgency)}>
                {complaint.urgency} priority
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Complaint Details</CardTitle>
                <CardDescription>
                  Submitted on {complaint.dateSubmitted}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{complaint.description}</p>
                {complaint.images && complaint.images.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Attached Images:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {complaint.images.map((image, index) => (
                        <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Image {index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
                <CardDescription>Activity history for this complaint</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complaint.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{event.action}</p>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                        <p className="text-sm text-gray-600">by {event.by}</p>
                        <p className="text-sm text-gray-700 mt-1">{event.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add Message */}
            <Card>
              <CardHeader>
                <CardTitle>Add Update</CardTitle>
                <CardDescription>Send a message or update about this complaint</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Type your message or update here..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={3}
                  />
                  <Button disabled={!newMessage.trim()}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Complaint Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-medium">{complaint.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Priority</p>
                  <Badge variant={getUrgencyColor(complaint.urgency)}>{complaint.priority}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(complaint.status)}>
                    {complaint.status.replace('-', ' ')}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Submitted By</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-600" />
                    <span className="font-medium">{complaint.submittedBy.name}</span>
                  </div>
                  <p className="text-sm text-gray-600">{complaint.submittedBy.id}</p>
                  <p className="text-sm text-gray-600">Room: {complaint.submittedBy.room}</p>
                  <p className="text-sm text-gray-600">{complaint.submittedBy.contact}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assigned To</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">{complaint.assignedTo.name}</p>
                  <p className="text-sm text-gray-600">{complaint.assignedTo.department}</p>
                  <p className="text-sm text-gray-600">{complaint.assignedTo.contact}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">
                  Print Complaint
                </Button>
                <Button variant="outline" className="w-full">
                  Escalate Issue
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
