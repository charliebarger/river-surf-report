import React from "react";
import Link from "next/link";

const QuickInfoCard = ({
  wave,
  cfs,
  flag,
  urlParam,
}: {
  wave: string;
  cfs: number;
  flag: string;
  urlParam: string;
}) => {
  return (
    <Link
      href={`/location/${urlParam}`}
      className=" my-2 flex  items-center rounded border-[1px] border-[#e6e6e6] bg-white px-4
        py-2 text-base font-medium text-gray-700 hover:border-[#0daadc]
        "
    >
      <div className=" h-2 w-2 rounded-full bg-chartGoodBorder "></div>
      <span className=" ml-2">{wave}</span>
      <span className=" ml-2 font-bold ">{cfs}</span>
      <span className="ml-auto">{flag}</span>
    </Link>
  );
};

export const LoadingQuickInfoCard = () => {
  return (
    <div
      className=" my-2 flex  animate-pulse items-center gap-4 rounded border-[1px] border-[#e6e6e6]
        bg-white px-4 py-2 text-base font-medium text-gray-700
        "
    >
      <div className=" h-2 w-2 rounded-full bg-gray-300 "></div>
      <div className=" h-6 flex-1 animate-pulse  rounded-full bg-gray-300 "></div>
    </div>
  );
};

export default QuickInfoCard;
