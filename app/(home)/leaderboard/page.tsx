'use client'
import Leaderboard from "@/components/pages/Leaderboard";
import React from "react";

const LeaderBoard = () => {
  return (
    <div className="min-h-screen bg-sidebar p-6">
      <div className="max-w-7xl mx-auto">
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderBoard;
