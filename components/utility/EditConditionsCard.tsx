import React from "react";
import Link from "next/link";
import DragHandler from "@/assets/images/dragHandler.svg";

interface EditConditionsCardProps {
  waveName: string;
  state: string;
  country: string;
}

const EditConditionsCard = ({
  waveName,
  state,
  country,
}: EditConditionsCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-3 font-semibold text-[#1481BA] ">
      <div>
        <div className=" whitespace-nowrap text-lg ">{waveName}</div>
        <div className="flex gap-1 whitespace-nowrap text-sm text-black ">
          <div>{state} </div>
          <span className=" text-gray-600 ">• </span>
          <div>{country}</div>
        </div>
      </div>
      <DragHandler className="w-8 fill-gray-400 " />
    </div>
  );
};

export default EditConditionsCard;
