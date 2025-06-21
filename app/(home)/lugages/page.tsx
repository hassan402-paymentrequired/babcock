"use client";
import LuggageManagement from "@/components/pages/LugageManagement";
import { Button } from "@/components/ui/button";
import React from "react";

const Lugages = () => {
  return (
    // <Link href="/lugages/register">
    // <Button className="rounded">Add Lugage</Button>
    // </Link>
    <div className="min-h-screen bg-sidebar p-6">
      <div className="max-w-7xl mx-auto">
      
        <LuggageManagement />
      </div>
    </div>
  );
};

export default Lugages;
