"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bed, Users, MapPin, CheckCircle } from "lucide-react";
// import { toast } from "@/hooks/use-toast";
import Link from "next/link";

const Rooms = () => {
  const [selectedHostel, setSelectedHostel] = useState("all");
  const [studentHasRoom, setStudentHasRoom] = useState(false);

  const hostels = [
    {
      id: 1,
      name: "Sunrise Hostel",
      location: "Block A",
      rooms: [
        {
          id: "A-101",
          capacity: 2,
          occupied: 1,
          available: 1,
          floor: 1,
          amenities: ["AC", "WiFi", "Attached Bath"],
        },
        {
          id: "A-102",
          capacity: 2,
          occupied: 2,
          available: 0,
          floor: 1,
          amenities: ["AC", "WiFi", "Attached Bath"],
        },
        {
          id: "A-201",
          capacity: 3,
          occupied: 2,
          available: 1,
          floor: 2,
          amenities: ["AC", "WiFi", "Balcony"],
        },
        {
          id: "A-202",
          capacity: 3,
          occupied: 1,
          available: 2,
          floor: 2,
          amenities: ["AC", "WiFi", "Balcony"],
        },
      ],
    },
    {
      id: 2,
      name: "Moonlight Hostel",
      location: "Block B",
      rooms: [
        {
          id: "B-101",
          capacity: 2,
          occupied: 0,
          available: 2,
          floor: 1,
          amenities: ["Fan", "WiFi", "Common Bath"],
        },
        {
          id: "B-103",
          capacity: 4,
          occupied: 3,
          available: 1,
          floor: 1,
          amenities: ["Fan", "WiFi", "Study Table"],
        },
        {
          id: "B-201",
          capacity: 2,
          occupied: 1,
          available: 1,
          floor: 2,
          amenities: ["AC", "WiFi", "Attached Bath"],
        },
      ],
    },
    {
      id: 3,
      name: "Galaxy Hostel",
      location: "Block C",
      rooms: [
        {
          id: "C-101",
          capacity: 3,
          occupied: 2,
          available: 1,
          floor: 1,
          amenities: ["AC", "WiFi", "Common Bath"],
        },
        {
          id: "C-201",
          capacity: 2,
          occupied: 1,
          available: 1,
          floor: 2,
          amenities: ["AC", "WiFi", "Balcony"],
        },
        {
          id: "C-301",
          capacity: 4,
          occupied: 4,
          available: 0,
          floor: 3,
          amenities: ["Fan", "WiFi", "Study Area"],
        },
      ],
    },
  ];

  const filteredHostels =
    selectedHostel === "all"
      ? hostels
      : hostels.filter((hostel) => hostel.id.toString() === selectedHostel);

  const handleRoomSelect = (roomId: string, hostelName: string) => {
    if (studentHasRoom) {
    //   toast({
    //     title: "Room Already Selected",
    //     description:
    //       "You have already selected a room. Please contact admin to change rooms.",
    //     // variant: "destructive",
    //   });
    //   return;
    }

    // toast({
    //   title: "Room Selected Successfully",
    //   description: `You have selected room ${roomId} in ${hostelName}. You can now register your luggage.`,
    // });
    setStudentHasRoom(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Bed className="h-8 w-8 mr-3 text-blue-600" />
            Room Booking
          </h1>
          <p className="text-gray-600 mt-2">
            Browse available rooms and select your accommodation
          </p>
        </div>

        {/* Student Status Alert */}
        {studentHasRoom && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <div>
                <p className="text-green-800 font-medium">
                  Room Already Selected
                </p>
                <p className="text-green-600 text-sm">
                  You have successfully selected your room. Contact admin for
                  any changes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Filter by Hostel:</label>
              <Select value={selectedHostel} onValueChange={setSelectedHostel}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select hostel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Hostels</SelectItem>
                  {hostels.map((hostel) => (
                    <SelectItem key={hostel.id} value={hostel.id.toString()}>
                      {hostel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Hostels and Rooms */}
        <div className="space-y-8">
          {filteredHostels.map((hostel) => (
            <Card key={hostel.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    {hostel.name}
                  </div>
                  <Badge variant="outline">{hostel.location}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hostel.rooms.map((room) => (
                    <Card
                      key={room.id}
                      className={`${
                        room.available === 0 ? "opacity-60" : "hover:shadow-md"
                      } transition-shadow`}
                    >
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{room.id}</h3>
                          <Badge
                            variant={
                              room.available > 0 ? "default" : "secondary"
                            }
                            className={
                              room.available > 0
                                ? "bg-green-100 text-green-800"
                                : ""
                            }
                          >
                            {room.available > 0 ? "Available" : "Full"}
                          </Badge>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            <span>
                              Capacity: {room.capacity} | Occupied:{" "}
                              {room.occupied} | Available: {room.available}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Floor: {room.floor}
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Amenities:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {room.amenities.map((amenity, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          className="w-full"
                          disabled={room.available === 0 || studentHasRoom}
                          onClick={() => handleRoomSelect(room.id, hostel.name)}
                        >
                          {room.available === 0
                            ? "Room Full"
                            : studentHasRoom
                            ? "Already Selected"
                            : "Select Room"}
                        </Button>
                        <Link href="/room/4">
                          <Button variant="outline" size="sm" className="mt-3">
                            View Details
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Room Selection Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold mb-2">Important Notes:</h4>
                <ul className="space-y-1">
                  <li>• You can select only one room per academic year</li>
                  <li>• Room changes require admin approval</li>
                  <li>• All room fees must be paid before selection</li>
                  <li>• Room selection is on first-come, first-served basis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After Room Selection:</h4>
                <ul className="space-y-1">
                  <li>• Register your luggage immediately</li>
                  <li>• Collect room keys from the admin office</li>
                  <li>• Complete hostel registration formalities</li>
                  <li>• Join your hostel WhatsApp group for updates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rooms;
