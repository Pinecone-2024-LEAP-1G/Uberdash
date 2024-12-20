"use client";
import { ChangeEventHandler } from "react";
import DownArrow from "../ui/DownArrow";

export const SelectQuantity = ({
  onChange,
}: {
  onChange: (value: number) => void;
}) => {
  const handleChangeValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onChange(Number(event?.target.value));
  };
  return (
    <div className="relative ">
      <select
        className="appearance-none w-[56px] h-[36px] bg-[#F3F3F3] text-[#000000] border-none rounded-[500px] pl-3 font-medium cursor-pointer flex items-center justify-center  hover:bg-[#b1b0b0] focus:outline-none  "
        onChange={handleChangeValue}
      >
        <option value={1} className="bg-white text-black">
          1
        </option>
        <option value={2} className="bg-white text-black">
          2
        </option>
        <option value={3} className="bg-white text-black">
          3
        </option>
        <option value={4} className="bg-white text-black">
          4
        </option>
        <option value={5} className="bg-white text-black">
          5
        </option>
        <option value={6} className="bg-white text-black">
          6
        </option>
        <option value={7} className="bg-white text-black">
          7
        </option>
        <option value={8} className="bg-white text-black">
          8
        </option>
      </select>
      <div className="absolute inset-y-0  flex items-center px-3 text-white pointer-events-none ml-3">
        <DownArrow />
      </div>
    </div>
  );
};
