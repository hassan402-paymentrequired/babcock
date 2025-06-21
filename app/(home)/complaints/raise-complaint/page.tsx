import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const RaiseComplaint = () => {
  return (
    <div className="flex flex-col items-center  w-full h-screen">
      <form className="bg-white rounded shadow-sm mt-10 p-6 w-full border max-w-[900px]">
        <h1 className="sm:text-2xl md:text-3xl font-semibold ">
          Raise A New Complaints
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          form to make a new complaint
        </p>

        <div className="grid mt-5">
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Complaint Title</Label>
              <Input
                id="name"
                placeholder="Enter your lugage name"
                className="rounded "
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="model">Complaint Model</Label>
              <Input
                id="model"
                placeholder="Enter your lugage model"
                className="rounded "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4">
            <Label htmlFor="model">Complaint Description</Label>
            <textarea
              name="description"
              id=""
              rows={7}
              className="outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-sm placeholder:text-muted-foreground rounded resize-none border shadow-sm p-3 "
              placeholder="Description..."
            ></textarea>
          </div>

          <div className="flex items-center justify-end mt-4">
            <Button>Register Lugage</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RaiseComplaint;
