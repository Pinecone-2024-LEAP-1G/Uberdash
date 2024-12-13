import { useState } from "react";
import ThreeDot from "../ui/ThreeDot";
import TrashIcon from "../ui/TrashIcon";
import { useCart } from "@/Providers/CartProvider";

export default function SmallModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const { clearCart } = useCart();

  const clearOrder = () => {
    clearCart();
    toggleModal();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <ThreeDot />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[309px] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            <div className="flex items-center hover:bg-red-50">
              <div className="w-16 h-16 flex items-center justify-center">
                <TrashIcon />
              </div>
              <li>
                <button
                  className="block px-4 py-2 text-sm text-red-600  w-full text-left"
                  onClick={() => clearOrder()}
                >
                  Бүх Захиалгуудыг устгах
                </button>
              </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
