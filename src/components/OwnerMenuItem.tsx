"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItemType } from "@/lib/types";
import { Pen, BadgeMinus } from "lucide-react";
import { Delete } from "./Delete";
import { MenuItemDetail } from "./MenuItemDetail";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type OwnerMenuItemProps = {
  menuItemId: string;
};

type DetailType = {
  name: string | undefined;
  image: string | undefined;
  itemId: string;
  handleDetail: () => void;
};

type DeleteType = {
  itemId: string;
  handleDelete: () => void;
};

export const OwnerMenuItem = ({ menuItemId }: OwnerMenuItemProps) => {
  const [menuItem, setMenuItem] = useState<MenuItemType>();
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [isDelete, setDelete] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/menu-item/${menuItemId}`);
        setMenuItem(response.data.menuItem);
      } catch (error) {
        console.log(error); // toast notification
      }
    };
    fetchData();
  }, [menuItemId]);

  const handleDelete = () => {
    setDelete(!isDelete);
  };

  const newProps: DeleteType = {
    itemId: menuItemId,
    handleDelete: handleDelete,
  };

  const handleDetail = () => {
    setShowDetail(!showDetail);
  };

  const detailProps: DetailType = {
    name: menuItem?.name,
    image: menuItem?.image,
    itemId: menuItemId,
    handleDetail: handleDetail,
  };

  return (
    <Card className="w-full max-w-xs mx-auto mb-6">
      {isDelete && <Delete {...newProps} />}
      {showDetail && <MenuItemDetail {...detailProps} />}

      <CardHeader className="p-0">
        <Image
          alt={menuItem?.name || "Menu item image"}
          src={menuItem?.image || "/default-image.jpg"}
          width={256}
          height={144}
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </CardHeader>

      <CardContent className="text-center">
        <CardTitle className="text-lg font-semibold text-gray-900">
          {menuItem?.name}
        </CardTitle>
      </CardContent>

      <CardFooter className="flex justify-between px-4 py-3">
        <Button
          variant="outline"
          className="flex gap-2 items-center"
          onClick={handleDelete}
        >
          <BadgeMinus size={16} />
          Устгах
        </Button>

        <Button
          variant="secondary"
          className="flex gap-2 items-center"
          onClick={handleDetail}
        >
          <Pen size={16} />
          Дэлгэрэнгүй
        </Button>
      </CardFooter>
    </Card>
  );
};
