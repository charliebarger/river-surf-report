import React from "react";
import Link from "next/link";
import { TopFlows } from "report.types";
import { getConditions } from "@/helpers/functions";

const QuickInfoCard = ({
  waveName,
  countryFlag,
  urlParam,
  flows,
}: TopFlows) => {
  const {
    colors: { dark: statusColor },
  } = getConditions(flows.current, flows.good, flows.fair);

  return (
    <Link
      href={`/location/${urlParam}`}
      className=" my-2 flex  items-center rounded border-[1px] border-[#e6e6e6] bg-white px-4
        py-2 text-base font-medium text-gray-700 hover:border-[#0daadc]
        "
    >
      <div className={` h-2 w-2 rounded-full  ${statusColor} `}></div>
      <span className=" ml-2">{waveName}</span>
      <span className=" ml-2 font-bold ">{flows.current}</span>
      <span className="ml-auto">{countryFlag}</span>
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
