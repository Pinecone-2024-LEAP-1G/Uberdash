"use client";

import { parseAsString, useQueryState } from "nuqs";
import { MenuItem } from "@/lib/models";
import { useState } from "react";

export const Search = () => {
  const search = useQueryState("search", parseAsString);
  return <div> {search.toString()} </div>;
};
