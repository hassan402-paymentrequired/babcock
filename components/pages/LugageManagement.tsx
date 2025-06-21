import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Luggage, Plus, Camera } from "lucide-react";
import { useState } from "react";

interface LuggageItem {
  id: number;
  bagCount: number;
  description: string;
  roomId: string;
  dateAdded: string;
  specialNotes?: string;
  photoUrl?: string;
}

const LuggageManagement = () => {
  const [luggageItems, setLuggageItems] = useState<LuggageItem[]>([
    {
      id: 1,
      bagCount: 2,
      description: "Two suitcases with clothes and personal items",
      roomId: "A-205",
      dateAdded: "2024-06-15",
      specialNotes: "Contains laptop - handle with care"
    },
    {
      id: 2,
      bagCount: 1,
      description: "Sports equipment bag",
      roomId: "A-205",
      dateAdded: "2024-06-10"
    }
  ]);

  const [newLuggage, setNewLuggage] = useState({
    bagCount: 1,
    description: "",
    roomId: "A-205",
    specialNotes: ""
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddLuggage = () => {
    const luggage: LuggageItem = {
      id: Date.now(),
      ...newLuggage,
      dateAdded: new Date().toISOString().split('T')[0]
    };
    
    setLuggageItems([luggage, ...luggageItems]);
    setNewLuggage({
      bagCount: 1,
      description: "",
      roomId: "A-205",
      specialNotes: ""
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Luggage Management</h1>
          <p className="text-gray-600">Manage your belongings and track luggage</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Luggage
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Register New Luggage</DialogTitle>
              <DialogDescription>
                Add details about your luggage items for tracking.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bagCount">Number of Bags</Label>
                  <Input
                    id="bagCount"
                    type="number"
                    min="1"
                    value={newLuggage.bagCount}
                    onChange={(e) => setNewLuggage({...newLuggage, bagCount: parseInt(e.target.value) || 1})}
                  />
                </div>
                <div>
                  <Label htmlFor="roomId">Room ID</Label>
                  <Input
                    id="roomId"
                    value={newLuggage.roomId}
                    onChange={(e) => setNewLuggage({...newLuggage, roomId: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Item Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your luggage contents..."
                  value={newLuggage.description}
                  onChange={(e) => setNewLuggage({...newLuggage, description: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="specialNotes">Special Notes (Optional)</Label>
                <Textarea
                  id="specialNotes"
                  placeholder="Any special handling instructions..."
                  value={newLuggage.specialNotes}
                  onChange={(e) => setNewLuggage({...newLuggage, specialNotes: e.target.value})}
                />
              </div>

              <div>
                <Label>Photo (Optional)</Label>
                <Button variant="outline" className="w-full mt-2">
                  <Camera className="mr-2 h-4 w-4" />
                  Take Photo
                </Button>
              </div>

              <Button onClick={handleAddLuggage} className="w-full" disabled={!newLuggage.description}>
                Register Luggage
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Luggage className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{luggageItems.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Registered items</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bags</CardTitle>
            <Luggage className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {luggageItems.reduce((sum, item) => sum + item.bagCount, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Physical bags</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Room</CardTitle>
            <Luggage className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">A-205</div>
            <p className="text-xs text-muted-foreground mt-1">Block A, Floor 2</p>
          </CardContent>
        </Card>
      </div>

      {/* Luggage List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Luggage Items</h2>
        {luggageItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center">
                    <Luggage className="mr-2 h-5 w-5" />
                    {item.bagCount} {item.bagCount === 1 ? 'Bag' : 'Bags'}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Room {item.roomId} • Added on {item.dateAdded}
                  </CardDescription>
                </div>
                <Badge variant="outline">
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">{item.description}</p>
              {item.specialNotes && (
                <div className="bg-amber-50 border border-amber-200 rounded p-3 mt-3">
                  <p className="text-amber-800 text-sm">
                    <strong>Special Notes:</strong> {item.specialNotes}
                  </p>
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {luggageItems.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <Luggage className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4">No luggage items registered yet.</p>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Add Your First Item</Button>
              </DialogTrigger>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LuggageManagement;
