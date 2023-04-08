import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const surfSpots = [
  { surfSpot: "Pipeline", state: "Hawaii", country: "USA" },
  { surfSpot: "Mavericks", state: "California", country: "USA" },
  { surfSpot: "The Wedge", state: "California", country: "USA" },
  { surfSpot: "Huntington Beach", state: "California", country: "USA" },
  { surfSpot: "Outer Banks", state: "North Carolina", country: "USA" },
  { surfSpot: "Cocoa Beach", state: "Florida", country: "USA" },
  { surfSpot: "New Smyrna Beach", state: "Florida", country: "USA" },
  { surfSpot: "Sebastian Inlet", state: "Florida", country: "USA" },
  { surfSpot: "Jupiter Inlet", state: "Florida", country: "USA" },
  { surfSpot: "St. Augustine Beach", state: "Florida", country: "USA" },
];

const SearchBar = ({ searchState }: { searchState: string }) => {
  return (
    <div className="absolute bg-[#e5e7eb] left-0 right-0 top-10 rounded border-[#e5e7eb] border-2 grid gap-[2px] font-normal items-center ">
      <div className=" bg-white flex p-3 gap-4 items-center hover:bg-[#f6f6f6]">
        <div className="p-1 bg-[#e5e7eb] rounded w-8 h-8 flex items-center justify-center ">
          <Image
            width={50}
            height={30}
            src={"/coloradoFlag.png"}
            alt="Colorado Flag"
            style={{ height: "auto" }}
          ></Image>
        </div>
        <div className="flex flex-col">
          <span className=" font-semibold ">Colorado</span>
          <div className=" text-[#94a3b8] ">
            <span>United States </span>
            <span>| </span>
            <span>38 Waves</span>
          </div>
        </div>
      </div>
      <div className=" bg-white flex p-3 gap-4 items-center hover:bg-[#f6f6f6]">
        <div className="p-1 bg-[#e5e7eb] rounded w-8 h-8 flex items-center justify-center ">
          <Image
            width={50}
            height={30}
            src={"/coloradoFlag.png"}
            alt="Colorado Flag"
            style={{ height: "auto" }}
          ></Image>
        </div>
        <div className="flex flex-col">
          <span className=" font-semibold ">Colorado</span>
          <div className=" text-[#94a3b8] ">
            <span>United States </span>
            <span>| </span>
            <span>38 Waves</span>
          </div>
        </div>
      </div>
      <div className=" bg-white flex p-3 gap-4 items-center hover:bg-[#f6f6f6]">
        <div className="p-1 bg-[#e5e7eb] rounded w-8 h-8 flex items-center justify-center ">
          <Image
            width={50}
            height={30}
            src={"/coloradoFlag.png"}
            alt="Colorado Flag"
            style={{ height: "auto" }}
          ></Image>
        </div>
        <div className="flex flex-col">
          <span className=" font-semibold ">Colorado</span>
          <div className=" text-[#94a3b8] ">
            <span>United States </span>
            <span>| </span>
            <span>38 Waves</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
