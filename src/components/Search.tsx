"use client";

import { parseAsString, useQueryState } from "nuqs";

export const Search = () => {
  const search = useQueryState("search", parseAsString);
  console.log(search);
  return <div> {search.toString()} </div>;
};
