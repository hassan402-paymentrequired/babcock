import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Award, TrendingUp, User, Medal } from "lucide-react";

interface Student {
  id: number;
  name: string;
  rollNumber: string;
  room: string;
  meritPoints: number;
  rank: number;
  totalDuties: number;
  recentActivity: string;
}

const Leaderboard = () => {
  const students: Student[] = [
    {
      id: 1,
      name: "Priya Sharma",
      rollNumber: "CS2021005",
      room: "A-301",
      meritPoints: 485,
      rank: 1,
      totalDuties: 12,
      recentActivity: "Organized floor cleaning drive"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      rollNumber: "EE2021023",
      room: "B-205",
      meritPoints: 420,
      rank: 2,
      totalDuties: 10,
      recentActivity: "Reported broken window"
    },
    {
      id: 3,
      name: "Ananya Singh",
      rollNumber: "ME2021014",
      room: "A-408",
      meritPoints: 395,
      rank: 3,
      totalDuties: 11,
      recentActivity: "Volunteered for mess duty"
    },
    {
      id: 4,
      name: "Vikram Reddy",
      rollNumber: "CS2021018",
      room: "C-102",
      meritPoints: 380,
      rank: 4,
      totalDuties: 9,
      recentActivity: "Helped with room maintenance"
    },
    {
      id: 5,
      name: "Sakshi Patel",
      rollNumber: "IT2021007",
      room: "B-310",
      meritPoints: 365,
      rank: 5,
      totalDuties: 8,
      recentActivity: "Garden cleaning volunteer"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      rollNumber: "EC2021012",
      room: "A-207",
      meritPoints: 350,
      rank: 6,
      totalDuties: 9,
      recentActivity: "Waste segregation duty"
    },
    {
      id: 7,
      name: "Kavya Nair",
      rollNumber: "CS2021031",
      room: "C-405",
      meritPoints: 335,
      rank: 7,
      totalDuties: 7,
      recentActivity: "Library organization help"
    },
    {
      id: 8,
      name: "Rohan Gupta",
      rollNumber: "ME2021026",
      room: "B-108",
      meritPoints: 320,
      rank: 8,
      totalDuties: 8,
      recentActivity: "Common area cleaning"
    },
    {
      id: 9,
      name: "Deepika Joshi",
      rollNumber: "EE2021019",
      room: "A-315",
      meritPoints: 305,
      rank: 9,
      totalDuties: 6,
      recentActivity: "Event organization help"
    },
    {
      id: 10,
      name: "Siddharth Rao",
      rollNumber: "IT2021033",
      room: "C-201",
      meritPoints: 290,
      rank: 10,
      totalDuties: 7,
      recentActivity: "Security patrol volunteer"
    },
    {
      id: 11,
      name: "Neha Verma",
      rollNumber: "CS2021045",
      room: "B-412",
      meritPoints: 275,
      rank: 11,
      totalDuties: 6,
      recentActivity: "Recycling initiative"
    },
    {
      id: 12,
      name: "Alex Johnson",
      rollNumber: "CS2021001",
      room: "A-205",
      meritPoints: 245,
      rank: 12,
      totalDuties: 5,
      recentActivity: "Equipment maintenance help"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Medal className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Medal className="h-6 w-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-yellow-100 text-yellow-800';
      case 2: return 'bg-gray-100 text-gray-800';
      case 3: return 'bg-amber-100 text-amber-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Merit Leaderboard</h1>
          <p className="text-gray-600">Top students based on duty performance and community service</p>
        </div>
        <Award className="h-8 w-8 text-yellow-600" />
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Scorer</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students[0]?.meritPoints}</div>
            <p className="text-xs text-muted-foreground mt-1">{students[0]?.name}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
            <User className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#12</div>
            <p className="text-xs text-muted-foreground mt-1">245 points</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Points</CardTitle>
            <Award className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(students.reduce((sum, s) => sum + s.meritPoints, 0) / students.length)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">All students</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <User className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Participating</p>
          </CardContent>
        </Card>
      </div>

      {/* Top 3 Podium */}
      <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center">
            <Award className="mr-2 h-6 w-6 text-yellow-600" />
            Top Performers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {students.slice(0, 3).map((student) => (
              <div key={student.id} className="text-center">
                <div className="flex justify-center mb-3">
                  {getRankIcon(student.rank)}
                </div>
                <Avatar className="mx-auto mb-3 h-16 w-16">
                  <AvatarFallback className="text-lg font-bold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{student.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{student.rollNumber}</p>
                <Badge className={getRankBadgeColor(student.rank)}>
                  {student.meritPoints} points
                </Badge>
                <p className="text-xs text-gray-500 mt-2">{student.totalDuties} duties completed</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Rankings</CardTitle>
          <CardDescription>All students ranked by merit points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {students.map((student) => (
              <div key={student.id} className={`flex items-center justify-between p-4 rounded-lg border ${
                student.rollNumber === 'CS2021001' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10">
                    {getRankIcon(student.rank)}
                  </div>
                  <Avatar>
                    <AvatarFallback>
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{student.name}</h4>
                    <p className="text-sm text-gray-600">{student.rollNumber} • {student.room}</p>
                    <p className="text-xs text-gray-500">{student.recentActivity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{student.meritPoints}</div>
                  <p className="text-xs text-gray-500">{student.totalDuties} duties</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Points Earning Guide */}
      <Card>
        <CardHeader>
          <CardTitle>How to Earn Merit Points</CardTitle>
          <CardDescription>Ways to improve your ranking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Daily Activities</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Room cleaning duty: 10 points</li>
                <li>• Common area maintenance: 15 points</li>
                <li>• Mess duty assistance: 12 points</li>
                <li>• Garden cleaning: 8 points</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Special Contributions</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Organizing events: 25 points</li>
                <li>• Reporting issues: 5 points</li>
                <li>• Helping new students: 20 points</li>
                <li>• Community service: 30 points</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
