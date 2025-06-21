"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Award,
  FileText,
  Luggage,
  AlertTriangle,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const studentData = {
    name: "John Doe",
    rollNumber: "CS2021001",
    room: "A-201",
    hostel: "Sunrise Hostel",
    meritPoints: 850,
    feesPaid: true,
    recentNotices: [
      {
        id: 1,
        title: "Hostel Maintenance Schedule",
        date: "2024-01-15",
        urgent: true,
      },
      {
        id: 2,
        title: "Cultural Fest Registration Open",
        date: "2024-01-12",
        urgent: false,
      },
      { id: 3, title: "Mess Menu Update", date: "2024-01-10", urgent: false },
    ],
    recentComplaints: [
      { id: 1, subject: "WiFi Issue in Room", status: "pending" },
      { id: 2, subject: "Water Leakage", status: "resolved" },
    ],
  };

  return (
    <div className="min-h-screen bg-sidebar p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {studentData.name}
          </h1>
          <p className="text-gray-600">
            {studentData.rollNumber} • {studentData.room}, {studentData.hostel}
          </p>
        </div>

        {/* Fee Alert */}
        {!studentData.feesPaid && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-3" />
              <div>
                <p className="text-red-800 font-medium">
                  Hostel Fee Payment Pending
                </p>
                <p className="text-red-600 text-sm">
                  Please clear your dues to avoid any inconvenience.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Merit Points Card */}
          <Card className="lg:col-span-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">
                Merit Points
              </CardTitle>
              <Award className="h-5 w-5 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {studentData.meritPoints}
              </div>
              <p className="text-xs opacity-90 mt-1">+50 points this week</p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/luggages">
                  <Button className="w-full ">
                    <Luggage className="h-4 w-4 mr-2" />
                    Add Luggage
                  </Button>
                </Link>
                <Link href="/complaints">
                  <Button variant="outline" className="w-full">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Make Complaint
                  </Button>
                </Link>
                <Link href="/request-leave">
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Apply Leave
                  </Button>
                </Link>
                <Link href="/room">
                  <Button variant="outline" className="w-full">
                    Room Booking
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Notices */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Recent Notices
              </CardTitle>
              <Link href="/notice-board">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentData.recentNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {notice.title}
                      </p>
                      <p className="text-sm text-gray-500">{notice.date}</p>
                    </div>
                    {notice.urgent && (
                      <Badge variant="destructive" className="ml-2">
                        Urgent
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Complaints */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm">Recent Complaints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentData.recentComplaints.map((complaint) => (
                  <div key={complaint.id} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-sm text-gray-900">
                      {complaint.subject}
                    </p>
                    <Badge
                      variant={
                        complaint.status === "resolved"
                          ? "default"
                          : "secondary"
                      }
                      className="mt-2"
                    >
                      {complaint.status}
                    </Badge>
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

export default Dashboard;
