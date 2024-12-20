"use client";

import { Pen, BookOpen } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import { Category } from "@/lib/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CategoryComp = ({ _id, image, name }: Category) => {
  const [, setIsEdit] = useQueryState<string>("edit", parseAsString);

  const edit = (id: string) => {
    setIsEdit(id);
  };

  return (
    <Card className="w-64">
      <CardHeader className="p-0">
        <Image
          alt="Category Image"
          src={image}
          width={256}
          height={144}
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </CardHeader>

      <CardContent className="text-center">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      </CardContent>

      <CardFooter className="flex justify-between px-4 py-3">
        <Button variant="outline" className="flex gap-2 items-center">
          <BookOpen size={16} />
          Detail
        </Button>

        <Button
          variant="secondary"
          className="flex gap-2 items-center"
          onClick={() => _id && edit(_id)}
        >
          <Pen size={16} />
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};
