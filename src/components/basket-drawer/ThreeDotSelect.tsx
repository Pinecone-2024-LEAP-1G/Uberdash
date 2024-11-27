import { useState } from "react";
import ThreeDot from "../ui/ThreeDot";
import PlusSign from "../ui/PlusSignSvg";
import PersonPlus from "../ui/PersonPlus";
import TrashIcon from "../ui/TrashIcon";

export default function SmallModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <ThreeDot />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[309px] h-[192px] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            <div className="flex items-center hover:bg-gray-100">
              <div className="w-16 h-16 flex items-center justify-center">
                <PlusSign />
              </div>
              <li>
                <button className="block px-4 py-2 text-sm text-gray-700  w-full text-left">
                  Add items
                </button>
              </li>
            </div>
            <div className="flex items-center hover:bg-gray-100 ">
              <div className="w-16 h-16 flex items-center justify-center">
                <PersonPlus />
              </div>
              <li>
                <button className="block px-4 py-2 text-sm text-gray-700  w-full text-left">
                  Group order
                </button>
              </li>
            </div>
            <div className="flex items-center hover:bg-red-50">
              <div className="w-16 h-16 flex items-center justify-center">
                <TrashIcon />
              </div>
              <li>
                <button className="block px-4 py-2 text-sm text-red-600  w-full text-left">
                  Clear Cart
                </button>
              </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
