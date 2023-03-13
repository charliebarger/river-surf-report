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
      className=" my-2 bg-white  px-4 py-2 rounded text-base border-[1px] border-[#e6e6e6]
        text-gray-700 font-medium flex items-center hover:border-[#0daadc]
        "
    >
      <div className=" w-2 h-2 bg-chartGoodBorder rounded-full "></div>
      <span className=" ml-2">{wave}</span>
      <span className=" font-bold ml-2 ">{cfs}</span>
      <span className="ml-auto">{flag}</span>
    </Link>
  );
};

export default QuickInfoCard;
