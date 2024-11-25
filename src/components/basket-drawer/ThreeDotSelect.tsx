"use client";

import { TheaterIcon } from "lucide-react";
import { useState } from "react";

export const ThreeDotModal = () => {
  const [modal, setSmallModal] = useState(false);
  const handleSmallModal = () => {
    setSmallModal(!modal);
  };

  return (
    <div>
      <div onClick={handleSmallModal}>
        <TheaterIcon />
      </div>

      {modal && (
        <div className="w-[309px] h-[192px]  px-4 py-3 justify-between items-center flex mr-12">
          <p></p>
        </div>
      )}
    </div>
  );
};
