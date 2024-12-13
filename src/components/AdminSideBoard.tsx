import React from "react";

const ownerId = "673e90415a6e8e222657bbb4";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: `/owner/${ownerId}/Home`,
    icon: Home,
  },
  {
    title: "Orders",
    url: `/owner/${ownerId}/Orders`,
    icon: Inbox,
  },
  {
    title: "Categories",
    url: `/owner/${ownerId}/Categories`,
    icon: Calendar,
  },
  {
    title: "Reviews",
    url: `/owner/${ownerId}/Reviews`,
    icon: Search,
  },
  {
    title: "Products",
    url: `/owner/${ownerId}/Products`,
    icon: Settings,
  },
];

export function AdminSideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
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
