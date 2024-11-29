import axios from "axios";
import { useEffect, useState } from "react";
import { Pen } from "lucide-react";
import { BookImage } from "lucide-react";
import Link from "next/link";
import { parseAsBoolean, parseAsString, useQueryState } from "nuqs";

type CategoryID = {
  categoryId: string;
};

type Category = {
  _id: string;
  name: string;
  image: string;
};

export const CategoryComp = ({ categoryId }: CategoryID) => {
  const [isEdit, setIsEdit] = useQueryState<string>("edit", parseAsString);
  const [myCategory, setMyCategory] = useState<Category>();
  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/category/categoryId`, {
        categoryId,
      })
      .then(function (response) {
        setMyCategory(response.data.category);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const ownerId: string = "673e90415a6e8e222657bbb4";
  const edit = (id: string) => {
    setIsEdit(id);
  };
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-gray-300 items-center">
      <img src={myCategory?.image} className="w-48 h-36 rounded-lg  " />
      <p className="font-semibold text-xl mb-2"> {myCategory?.name} </p>
      <div className="flex gap-3 px-2 w-full pb-2 justify-between">
        <div className="flex gap-2 items-center px-2 py-1.5 hover:bg-slate-200 rounded-2xl">
          <BookImage size={16} />
          <button className="text-sm">Products</button>
        </div>
        <div
          onClick={() => myCategory?._id && edit(myCategory._id)}
          className="flex gap-2 items-center px-2 py-1.5 hover:bg-slate-200 rounded-2xl"
        >
          <Pen size={16} />
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};
