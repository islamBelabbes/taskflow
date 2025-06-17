"use client";
import React from "react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { Menu } from "lucide-react";

function Header() {
  const { isMobile } = useSidebar();
  return (
    <div className="flex h-[60px] w-full shrink-0 items-center justify-between bg-white px-4">
      <h1 className="text-2xl">Task Flow</h1>

      {isMobile && (
        <SidebarTrigger>
          <Menu className="size-5" />
        </SidebarTrigger>
      )}
    </div>
  );
}

export default Header;
