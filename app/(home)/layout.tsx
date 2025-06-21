"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { GitBranch } from "lucide-react";
import Link from "next/link";
import { MakeComplaint } from "./complaints/raise-complaint/create";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [showAssignTaskModal, setShowAssignTaskModal] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAssignTaskModal(true);
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between   h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="justify-self-end flex">
              <div className="nline-flex focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input bg-background hover:bg-accent hover:text-accent-foreground hidden h-8 items-center justify-center gap-2 rounded border px-3 text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 md:inline-flex [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                <GitBranch size={16} className="mr-1.5" />
                Create
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="#href">Add Lugage</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/room">Request a Room</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleClick}>
                Make Complaint
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>


          <Avatar className="mr-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <MakeComplaint
            open={showAssignTaskModal}
            onClose={setShowAssignTaskModal}
          />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
