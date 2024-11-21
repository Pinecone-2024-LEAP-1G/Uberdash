"use client";

import { NextRequest } from "next/server";

export default async function Page({
  params,
}: {
  params: { ownerId: string };
}) {
  const restaurantOwnerId = params.ownerId;
  console.log(restaurantOwnerId);
}
