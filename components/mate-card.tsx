import Link from "next/link";
import React from "react";

const MateCard = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full border bg-transparent text-xs flex items-center justify-center uppercase">
          IA
        </div>
        <div className="flex flex-col">
          <h4 className="text-xs">Inioluwa</h4>
          <span className="text-[10px]">0000/00</span>
        </div>
      </div>
      <Link
        href={"#"}
        className="text-[10px] font-semibold px-2 py-1 rounded-full shadow border border-[#ccc] hover:shadow-none"
      >
        View
      </Link>
    </div>
  );
};

export default MateCard;
