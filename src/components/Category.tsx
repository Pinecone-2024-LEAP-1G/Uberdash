import axios from "axios";
import { useEffect, useState } from "react";
import { Pen } from "lucide-react";
import { BookImage } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import { Category } from "@/lib/types";

export const CategoryComp = ({ _id, image, name }: Category) => {
  const [isEdit, setIsEdit] = useQueryState<string>("edit", parseAsString);
  console.log(isEdit);

  const edit = (id: string) => {
    setIsEdit(id);
  };
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-gray-300 items-center">
      <img src={image} className="w-48 h-36 rounded-lg  " />
      <p className="font-semibold text-xl mb-2"> {name} </p>
      <div className="flex gap-3 px-2 w-full pb-2 justify-between">
        <div className="flex gap-2 items-center px-2 py-1.5 hover:bg-slate-200 rounded-2xl">
          <BookImage size={16} />
          <button className="text-sm">Detail</button>
        </div>
        <div
          onClick={() => _id && edit(_id)}
          className="flex gap-2 items-center px-2 py-1.5 hover:bg-slate-200 rounded-2xl"
        >
          <Pen size={16} />
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};
