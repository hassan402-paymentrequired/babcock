import LugageCard from "@/components/Lugage-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Lugages = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl font-bold">My Lugages</h1>
          <p className="text-sm text-gray-500">
            This is the list of lugages you have.
          </p>
        </div>
        <Button className="rounded">Add Lugage</Button>
      </div>

      <div className="grid mt-4 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <LugageCard />
          <LugageCard />
          <LugageCard />
          <LugageCard />
          <LugageCard />
      </div>
    </div>
  );
};

export default Lugages;
