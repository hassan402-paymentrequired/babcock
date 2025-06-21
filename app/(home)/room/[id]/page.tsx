"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BedDouble, Users, Wifi, Fan, Bath } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const RoomDetails = () => {
  const id = 3;

  // Dummy room data with images
  const room = {
    id: id || "A-101",
    name: "A-101",
    hostel: "Block A - Boys Hostel",
    capacity: 2,
    occupied: 1,
    floor: "1st Floor",
    area: "12 sq meters",
    amenities: ["AC", "WiFi", "Attached Bath", "Study Table", "Wardrobe"],
    monthlyRent: 8500,
    currentOccupants: [
      { name: "Alex Johnson", id: "CS2021001", course: "Computer Science" },
    ],
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    ],
    description:
      "A well-furnished room with modern amenities located on the first floor of Block A. The room offers a peaceful environment perfect for studying.",
    rules: [
      "No smoking inside the room",
      "Maintain cleanliness",
      "No loud music after 10 PM",
      "Visitors allowed until 8 PM only",
    ],
    lastCleaned: "2024-06-20",
    maintenanceHistory: [
      { date: "2024-06-15", issue: "AC servicing", status: "Completed" },
      { date: "2024-06-10", issue: "Plumbing check", status: "Completed" },
    ],
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "ac":
        return <Fan className="h-4 w-4" />;
      case "wifi":
        return <Wifi className="h-4 w-4" />;
      case "attached bath":
        return <Bath className="h-4 w-4" />;
      default:
        return <BedDouble className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-sidebar p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/room-booking">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Room Booking
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Room {room.name}</h1>
          <p className="text-gray-600">
            {room.hostel} • {room.floor}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Room Images */}
          <Card>
            <CardHeader>
              <CardTitle>Room Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {room.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden"
                  >
                    <Image
                      width={500}
                      height={500}
                      src={image}
                      alt={`Room ${room.name} - Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Room Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Room Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Capacity
                  </span>
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-1" />
                    {room.capacity} beds
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Current Occupancy
                  </span>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {room.occupied}/{room.capacity}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Area</span>
                  <span>{room.area}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Monthly Rent
                  </span>
                  <span className="font-semibold">{room.monthlyRent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Availability
                  </span>
                  <Badge
                    variant={
                      room.occupied < room.capacity ? "default" : "destructive"
                    }
                  >
                    {room.occupied < room.capacity ? "Available" : "Full"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm bg-blue-100 text-blue-800 px-3 py-2 rounded"
                    >
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Occupants</CardTitle>
            </CardHeader>
            <CardContent>
              {room.currentOccupants.length > 0 ? (
                <div className="space-y-3">
                  {room.currentOccupants.map((occupant, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded"
                    >
                      <div>
                        <p className="font-medium">{occupant.name}</p>
                        <p className="text-sm text-gray-600">
                          {occupant.id} • {occupant.course}
                        </p>
                      </div>
                    </div>
                  ))}
                  {room.capacity > room.occupied && (
                    <div className="p-3 border-2 border-dashed border-gray-300 rounded text-center text-gray-500">
                      {room.capacity - room.occupied} bed(s) available
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500">No current occupants</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Room Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {room.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Button
                className="flex-1"
                disabled={room.occupied >= room.capacity}
              >
                {room.occupied < room.capacity
                  ? "Select This Room"
                  : "Room Full"}
              </Button>
              <Button variant="outline">Report Issue</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomDetails;
