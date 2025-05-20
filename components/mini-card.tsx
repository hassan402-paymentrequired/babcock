import { IconPencilX } from "@tabler/icons-react";
import React from "react";

const MiniCard = () => {
  return (
    <div className="flex items-center p-1 rounded border border-gray-50 py-2 gap-1">
      <div className="size-10 rounded-full flex items-center justify-center bg-green-100">
        <IconPencilX size={10} />
      </div>
      <div className="flex flex-col items-start">
        <small className="text-[10px] text-gray-500">Merit</small>
        <span className="text-base font-semibold">Branding</span>
      </div>
    </div>
  );
};

export default MiniCard;
