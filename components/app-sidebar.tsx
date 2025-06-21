"use client";

import * as React from "react";
import {
  LayoutDashboard,
  GalleryVerticalEnd,
  
  LaptopMinimalCheck,
  Hand,
  BriefcaseBusiness,
  AlignVerticalJustifyStart,
} from "lucide-react";

// import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Babcock University",
    email: "babcock@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Babcock",
      logo: GalleryVerticalEnd,
      plan: "Student portal",
    },
  ],

  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard ,
    },
    {
      name: "Lugages",
      url: "/lugages",
      icon: BriefcaseBusiness,
    },
    {
      name: "Notice Board",
      url: "/notice-board",
      icon: Hand,
    },
    {
      name: "Complaints",
      url: "/complaints",
      icon: Hand,
    },
    {
      name: "Apply leave",
      url: "/request-leave",
      icon: LaptopMinimalCheck,
    },
    {
      name: "Leaderboard",
      url: "/leaderboard",
      icon: AlignVerticalJustifyStart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data?.navMain ?? []} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
