"use client";

import { parseAsString, useQueryState } from "nuqs";

export const Search = () => {
  const search = useQueryState("search", parseAsString);
  return <div> {search.toString()} </div>;
};
