'use client'
import NoticeBoard from "@/components/pages/NoticeBoard";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-sidebar p-6">
      <div className="max-w-7xl mx-auto">
        <NoticeBoard />
      </div>
    </div>
  );
};

export default page;
