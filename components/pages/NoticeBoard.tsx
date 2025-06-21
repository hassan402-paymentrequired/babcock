import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  type: 'important' | 'event' | 'maintenance' | 'general';
  priority: 'high' | 'medium' | 'low';
  author: string;
}

const NoticeBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const notices: Notice[] = [
    {
      id: 1,
      title: "Hostel Maintenance Schedule",
      content: "Dear Students, the hostel maintenance will be conducted from June 25-27. Water and electricity might be affected during these days.",
      date: "2024-06-20",
      type: "maintenance",
      priority: "high",
      author: "Maintenance Team"
    },
    {
      id: 2,
      title: "Annual Cultural Fest Registration",
      content: "Register now for the annual cultural fest! Various events including dance, music, drama, and art competitions.",
      date: "2024-06-19",
      type: "event",
      priority: "medium",
      author: "Student Affairs"
    },
    {
      id: 3,
      title: "New WiFi Password",
      content: "The WiFi password has been updated for security purposes. New password: UniSecure2024",
      date: "2024-06-18",
      type: "important",
      priority: "high",
      author: "IT Department"
    },
    {
      id: 4,
      title: "Mess Menu Update",
      content: "Updated mess menu for the month includes new vegetarian and non-vegetarian options based on student feedback.",
      date: "2024-06-17",
      type: "general",
      priority: "low",
      author: "Mess Committee"
    }
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || notice.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important': return 'bg-red-100 text-red-800';
      case 'event': return 'bg-blue-100 text-blue-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notice Board</h1>
          <p className="text-gray-600">Stay updated with hostel announcements</p>
        </div>
        <Bell className="h-8 w-8 text-blue-600" />
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="mr-2 h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="important">Important</SelectItem>
                  <SelectItem value="event">Events</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <Card key={notice.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{notice.title}</CardTitle>
                  <CardDescription className="mt-1">
                    By {notice.author} • {notice.date}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge className={getTypeColor(notice.type)}>
                    {notice.type}
                  </Badge>
                  <Badge variant={getPriorityColor(notice.priority)}>
                    {notice.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{notice.content}</p>
              <Link href="/notice-board/4" className="p-0 h-auto mt-3">
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNotices.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500">No notices found matching your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NoticeBoard;
