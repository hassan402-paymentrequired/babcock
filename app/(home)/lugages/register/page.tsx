import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const RegisterLugage = () => {
  //TODO:: Luggage Type (Dropdown: Suitcase, Box, Bag, Other)
  return (
    <div className="flex flex-col items-center  w-full h-screen">
      <form className="bg-white rounded shadow-sm mt-10 p-6 w-full border max-w-[900px]">
        <h1 className="sm:text-2xl md:text-3xl font-semibold ">
          Register New Lugage
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Add a new lugage to your box this semester
        </p>

        <div className="grid mt-5">

          <div className="grid gap-4 mt-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Lugage Name</Label>
              <Input
                id="name"
                placeholder="Enter your lugage name"
                className="rounded "
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="model">Lugage Type</Label>
              <Input
                id="model"
                placeholder="Enter your lugage type"
                className="rounded "
              />
            </div>
          </div>

          <div className="grid  gap-4 mt-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Lugage Seria Number</Label>
              <Input
                id="number"
                placeholder="Enter your lugage number"
                className="rounded "
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="model">Lugage image</Label>
              <Input
                id="category"
                type="file"
                placeholder="Enter your lugage model"
                className="rounded "
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Label
              htmlFor="description"
              className="text-gray-800 dark:text-gray-300"
            >
              Colour
            </Label>
            <Input
              id="colour"
              type="color"
              placeholder="Lugage colour"
              required
              className="border-stone-800"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Label
              htmlFor="description"
              className="text-gray-800 dark:text-gray-300"
            >
             Short note on your lugage
            </Label>
            <Textarea
              id="description"
              placeholder="short note"
              rows={3}
              className="border-stone-800"
            />
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms">
              I confirm all items comply with [institution’s] guidelines.
            </Label>
          </div>
          <div className="flex items-center justify-end mt-4">
            <Button>Register Lugage</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterLugage;
