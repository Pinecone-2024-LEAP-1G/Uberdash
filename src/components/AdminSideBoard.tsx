"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

const restaurantId = localStorage.getItem("restaurantId");

const items = [
  { title: "Home", url: `/owner/${restaurantId}/Home`, icon: Home },
  { title: "Orders", url: `/owner/${restaurantId}/Orders`, icon: Inbox },
  {
    title: "Categories",
    url: `/owner/${restaurantId}/Categories`,
    icon: Calendar,
  },
  { title: "Reviews", url: `/owner/${restaurantId}/Reviews`, icon: Search },
  {
    title: "Хоолны цэс",
    url: `/owner/${restaurantId}/Products`,
    icon: Settings,
  },
];

export function AdminSideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* Sidebar Header */}
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
