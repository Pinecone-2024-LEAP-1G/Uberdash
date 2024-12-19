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
import {
  FaHome,
  FaEnvelope,
  FaCalendarAlt,
  FaSearch,
  FaCogs,
  FaCodeBranch,
} from "react-icons/fa";
import Link from "next/link";

const restaurantId = localStorage.getItem("restaurantId");

const items = [
  {
    title: "Нүүр",
    url: `/owner/${restaurantId}/Home`,
    icon: FaHome,
    size: "w-6 h-6",
  },
  {
    title: "Салбарууд",
    url: `/owner/${restaurantId}/Branches`,
    icon: FaCodeBranch,
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
          <Link href={"/"} className="flex items-center justify-center">
            <div className="text-3xl font-extrabold leading-none tracking-tight text-white-300 mt-12">
              <div className="flex items-center justify-center">
                <span>Хоол</span>
                <mark className="px-2 text-white bg-green-500 rounded ">
                  Hub
                </mark>
              </div>
            </div>
          </Link>
          <SidebarGroupLabel className="mt-34"></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="border-gray-200 my-13">
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
    </Sidebar>
  );
}
