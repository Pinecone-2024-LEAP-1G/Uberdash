"use client";

import React, { useState } from "react";
import PlusGray from "../ui/PlusSignGray";

export const OrderNote = () => {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  return (
    <div>
      <div className="flex h-[70px] w-[453px] bg-[#F3F3F3] px-4 py-3 justify-between items-center rounded-[8px]  cursor-pointer hover:bg-[#d2d0d0]">
        <div
          className=" text-ellipsis whitespace-nowrap overflow-hidden  "
          onClick={handleModal}
        >
          <p className="text-[16px] font-medium text">Add an order note</p>
          <p className="text-[14px] font-normal text-[#636262]">
            Utensisls,special instructions,etc.
          </p>
        </div>
        <div>
          <PlusGray />
        </div>
      </div>

      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="max-w-[500px] h-[328px]  bg-white shadow-lg py-2 rounded-md">
            <h2 className="text-2xl font-bold leading-[32px] flex justify-center text-gray-900 border-b border-gray-300 py-3 px-4 mb-4">
              Add an order note
            </h2>
            <div className="px-4 pb-4 pt-2">
              <input
                className="text-sm font-normal text-gray-700 w-[448px] h-[120px] text-wrap border flex items-start rounded-lg  bg-[#F3F3F3] text-[15px]  pl-4 pr-4 placeholder: pb-[80px] placeholder:whitespace-normal "
                placeholder="specify which utensils, napkins, straws, and condiments 
                you want to be included or any special instructions that you want the restruarant to be aware of"
              />
            </div>
            <div className="flex justify-between items-center px-4  ">
              <div className="flex flex-col">
                <div className="text-[16px] font-normal text-gray-700">
                  You may be charged for extras.
                </div>
                <div>
                  <button
                    type="button"
                    className="w-[452px] h-[56px] px-2 text-sm rounded-lg bg-[#000000] text-[19px] text-white mt-2 hover:bg-[#202020] "
                    onClick={handleModal}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
