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

const SearchBar = ({ deactivateSearch }: { deactivateSearch: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className=" min-h-screen bg-white fixed left-0 right-0 bottom-0 top-0 z-50  overflow-y-scroll overscroll-y-none ">
      <div className=" bg-primaryColor p-8">
        <div className=" bg-gray-100 text-md flex-1 flex h-full items-center relative p-2 rounded">
          <div className="px-4">
            <Image
              height={20}
              width={20}
              src={"/icons/icons8-search.svg"}
              alt={"Search Icon"}
            />
          </div>
          <input
            className=" font-bold text-gray-600 bg-transparent flex-1 text-xl p-2 focus:outline-0 placeholder:text-gray-400"
            placeholder="Search Spots Regions and waves"
          ></input>
          <button className="w-12" onClick={() => deactivateSearch()}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.242-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.242z" />
            </svg>
          </button>
        </div>
      </div>
      <div className=" flex py-10 px-20 ">
        <div>
          <h5 className="font-bold">Surf Spots</h5>
          <div className="flex flex-col py-2 text-sm ">
            {surfSpots.map((item, index) => (
              <Link
                href={"/"}
                key={index}
                className=" group flex items-center gap-2 p-1 px-4 hover:bg-primaryColor hover:text-white"
              >
                <div className=" h-3 w-3 fill-red ">
                  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className=" fill-[#269] group-hover:fill-white"
                      d="m33.398 23.678c-7.562 4.875-20.062-.438-18.375-8.062 1.479-6.684 9.419-4.763 11.225-3.861s.713-3.889-3.475-5.327c-5.673-1.948-12.617-1.535-14.812 8.25-1.5 6.687 1.438 16.062 12.719 16.187s12.718-7.187 12.718-7.187z"
                    />
                    <path
                      className=" fill-[#269] group-hover:fill-white"
                      d="m35.988 25.193c0-2.146-2.754-2.334-4-1.119-2.994 2.919-7.402 4.012-13.298 2.861-10.25-2-10.341-14.014-3.333-17.441 3.791-1.854 8.289.341 9.999 1.655 1.488 1.143 4.334 2.66 4.185.752-.318-4.062-8.279-12.761-18.946-7.261-10.666 5.5-10.595 17.913-10.595 20.163v7.25c0 2.209 1.814 3.947 4.023 3.947h28c2.209 0 3.977-1.738 3.977-3.947 0 0-.004-6.854-.012-6.86z"
                    />
                  </svg>
                </div>
                <span className=" hover:text-white">{item.surfSpot}</span>
                <div className="text-gray-500 ml-1 group-hover:text-white ">
                  <span>{item.state} / </span>
                  <span>{item.country}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
