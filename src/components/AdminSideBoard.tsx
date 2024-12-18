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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  FaHome,
  FaEnvelope,
  FaCalendarAlt,
  FaSearch,
  FaCogs,
} from "react-icons/fa";

const restaurantId = localStorage.getItem("restaurantId");

const items = [
  {
    title: "Нүүр",
    url: `/owner/${restaurantId}/Home`,
    icon: FaHome,
    size: "w-6 h-6",
  },
  {
    title: "Захиалгууд",
    url: `/owner/${restaurantId}/Orders`,
    icon: FaEnvelope,
    size: "w-6 h-6",
  },
  {
    title: "Хоолны ангилал",
    url: `/owner/${restaurantId}/Categories`,
    icon: FaCalendarAlt,
    size: "w-6 h-6",
  },
  {
    title: "Сэтгэгдлүүд",
    url: `/owner/${restaurantId}/Reviews`,
    icon: FaSearch,
    size: "w-6 h-6",
  },
  {
    title: "Хоолны цэс",
    url: `/owner/${restaurantId}/Products`,
    icon: FaCogs,
    size: "w-6 h-6",
  },
];

export function AdminSideBar() {
  return (
    <Sidebar className="w-72 bg-gray-50 shadow-md h-screen">
      <SidebarContent className="flex flex-col justify-start">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-48"></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="border-gray-200 my-20">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-6 px-6 py-6 rounded-md hover:bg-blue-50 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out group mt-4"
                    >
                      <item.icon className={`${item.size} text-gray-500`} />
                      <span className="text-xl font-semibold text-gray-700">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarTrigger className="fixed top-4 left-4 z-20 w-10 ml-4 h-10 rounded-full flex justify-center items-center shadow-lg " />
    </Sidebar>
  );
}
