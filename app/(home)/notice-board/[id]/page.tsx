import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bell, Calendar, User, Share2, Bookmark, Download } from "lucide-react";
import Link from "next/link";
// import { Link, useParams } from "react-router-dom";

const NoticeDetails = () => {
  const id  = 3;

  // Dummy notice data
  const notice = {
    id: id || "1",
    title: "Hostel Maintenance Schedule",
    content: `Dear Students,

We hope this notice finds you well. We are writing to inform you about the upcoming scheduled maintenance activities in the hostel premises.

**Maintenance Period:** June 25-27, 2024 (3 days)
**Affected Areas:** All blocks (A, B, C, and D)

**Details of Work to be Performed:**

1. **Electrical System Maintenance**
   - Inspection and repair of electrical panels
   - Replacement of faulty wiring in common areas
   - Testing of emergency lighting systems
   - Generator maintenance and testing

2. **Plumbing and Water Supply**
   - Cleaning of overhead water tanks
   - Pipe leak repairs and replacements
   - Water pump servicing
   - Bathroom fixture repairs

3. **Infrastructure Repairs**
   - Painting of common areas
   - Repair of damaged walls and ceilings
   - Floor maintenance and cleaning
   - Window and door repairs

**Expected Disruptions:**
- Water supply may be interrupted for 2-3 hours daily (timing will be announced)
- Electricity backup may be limited during working hours
- Temporary closure of common areas (library, gym, recreation room)
- Limited elevator services

**Important Instructions:**
- Please stock up on drinking water
- Charge your electronic devices in advance
- Avoid using high-power electrical appliances during work hours
- Keep your room windows open for ventilation when possible
- Report any urgent issues to the hostel office immediately

We apologize for any inconvenience caused and appreciate your patience and cooperation during this period. This maintenance is essential to ensure the safety and comfort of all residents.

For any queries or emergency assistance, please contact:
- Hostel Office: +91-XXX-XXX-XXXX
- Emergency Contact: +91-XXX-XXX-XXXX (Available 24/7)

Thank you for your understanding.

Best regards,
Hostel Management Team`,
    fullContent: `This is the complete detailed content of the notice with all information...`,
    date: "2024-06-20",
    publishedDate: "2024-06-20 09:00",
    lastUpdated: "2024-06-20 14:30",
    type: 'maintenance' as const,
    priority: 'high' as const,
    author: {
      name: "Maintenance Team",
      designation: "Facilities Manager",
      contact: "maintenance@hostel.edu"
    },
    tags: ["maintenance", "electricity", "water", "important"],
    attachments: [
      { name: "Maintenance_Schedule.pdf", size: "245 KB", type: "pdf" },
      { name: "Emergency_Contacts.pdf", size: "125 KB", type: "pdf" }
    ],
    views: 245,
    relatedNotices: [
      { id: "2", title: "Updated Mess Menu", date: "2024-06-19" },
      { id: "3", title: "WiFi Password Update", date: "2024-06-18" }
    ]
  };

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
    <div className="min-h-screen bg-sidebar p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/notices">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Notices
            </Link>
          </Button>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{notice.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Published: {notice.publishedDate}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {notice.author.name}
                </div>
                <div>
                  {notice.views} views
                </div>
              </div>
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-blue-600 mr-2" />
                    <CardTitle>Notice Content</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {notice.content}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attachments */}
            {notice.attachments && notice.attachments.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Attachments</CardTitle>
                  <CardDescription>Download related documents and files</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notice.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Download className="h-4 w-4 text-gray-600 mr-2" />
                          <div>
                            <p className="font-medium">{attachment.name}</p>
                            <p className="text-sm text-gray-600">{attachment.size}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Notices */}
            <Card>
              <CardHeader>
                <CardTitle>Related Notices</CardTitle>
                <CardDescription>Other notices you might find relevant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notice.relatedNotices.map((relatedNotice) => (
                    <Link 
                      key={relatedNotice.id} 
                      href={`/notices/${relatedNotice.id}`}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <p className="font-medium">{relatedNotice.title}</p>
                      <p className="text-sm text-gray-600">{relatedNotice.date}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notice Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <Badge className={getTypeColor(notice.type)}>{notice.type}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Priority</p>
                  <Badge variant={getPriorityColor(notice.priority)}>{notice.priority}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Updated</p>
                  <p className="text-sm">{notice.lastUpdated}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Views</p>
                  <p className="text-sm">{notice.views}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Published By</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-600" />
                    <span className="font-medium">{notice.author.name}</span>
                  </div>
                  <p className="text-sm text-gray-600">{notice.author.designation}</p>
                  <p className="text-sm text-gray-600">{notice.author.contact}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {notice.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Print Notice
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share via Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
