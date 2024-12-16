"use client";
import axios from "axios";
import { X, Ban } from "lucide-react";
import { useEffect, useState } from "react";

type DetailType = {
  name: string | undefined;
  image: string | undefined;
  itemId: string;
  handleDetail: () => void;
};

export const MenuItemDetail: React.FC<DetailType> = (props: DetailType) => {
  const { itemId, handleDetail, image, name } = props;
  const [numberOfOrder, setNumberOfOrder] = useState<number>(0);
  const [numberOfQuantity, setNumberOfQuantity] = useState<number>(0);

  console.log(image);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.post(`/api/menu-item/numberOfSales`, {
          menuItemId: itemId,
        });
        console.log();
        setNumberOfOrder(response.data.numberofOrders);
        setNumberOfQuantity(response.data.sumOfQuantity);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, [itemId]);

  return (
    <div className="fixed inset-0 bg-gray-400 flex pt-20 justify-center">
      <div className="rounded-xl h-fit bg-white px-5 pt-6 pb-10  flex flex-col gap-8 items-center w-[320px]">
        <div className="w-full flex justify-end mb-[-20px]">
          <button onClick={handleDetail}>
            <X />
          </button>
        </div>
        <div className="flex items-center flex-col">
          <img src={`${image}`} />
          <p className="font-semibold"> {name} </p>
        </div>
        <div className="flex gap-5 items-center">
          <p> Бүтээгдэхүүн захиалагдсан тоо : </p>
          {numberOfOrder}
        </div>
        <div className="flex gap-5 items-center">
          <p> Бүтээгдэхүүн зарагдсан тоо : </p>
          {numberOfQuantity}
        </div>
        <div className="flex gap-8 ">
          <button
            onClick={handleDetail}
            className="px-7  py-3 rounded-md bg-gray-400 text-white"
          >
            Буцах
          </button>
          <button className="px-7 py-3 rounded-md bg-red-500 text-white">
            Устгах
          </button>
        </div>
      </div>
    </div>
  );
};
