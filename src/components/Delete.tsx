"use client";
import axios from "axios";
import { Ban, X } from "lucide-react";

type DeleteType = {
  itemId: string;
  handleDelete: () => void;
};

export const Delete: React.FC<DeleteType> = (props: DeleteType) => {
  const { itemId, handleDelete } = props;
  const handleToggle = () => {
    handleDelete();
  };

  const deleteItem = () => {
    const deleteOne = async () => {
      try {
        await axios.delete(`/api/menu-item/delete/${itemId}`);
        handleDelete();
      } catch (error) {
        console.log(error);
      }
    };
    deleteOne();
  };
  return (
    <div className="fixed inset-0 bg-gray-400 flex items-center justify-center">
      <div className="rounded-xl bg-white px-5 pt-6 pb-10  flex flex-col gap-8 items-center w-[300px]">
        <div className="w-full flex justify-end mb-[-20px]">
          <button onClick={handleToggle}>
            <X />
          </button>
        </div>
        <Ban size={44} color="red" />
        <p className="text-gray-500 font-medium text-lg"> Зөвшөөрөх? </p>
        <p className="text-center text-gray-400 font-light text-xs mb-2">
          Та энэхүү бүтээгдэхүүнийг менюгээс хасахыг зөвшөөрч байна уу?
        </p>
        <div className="flex gap-8 ">
          <button
            onClick={handleToggle}
            className="px-7  py-3 rounded-md bg-gray-400 text-white"
          >
            Буцах
          </button>
          <button
            onClick={deleteItem}
            className="px-7 py-3 rounded-md bg-red-500 text-white"
          >
            Устгах
          </button>
        </div>
      </div>
    </div>
  );
};
