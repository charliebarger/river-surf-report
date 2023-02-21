import React from "react";
import Link from "next/link";
import List from "./ListGenerator";
import Image from "next/image";
import SearchBar from "./SearchBar";
import ReportSVG from "./icons8-ocean-wave.svg";
import WaveSVG from "./WaveSVG";
import MapSVG from "./MapSVG";
import ContactSVG from "./ContactSVG";
import { useState } from "react";

const headerItems = [
  { title: "Home", url: "/home" },
  { title: "Surf Reports", url: "/reports" },
  { title: "Contact", url: "/contact" },
];

const Header = () => {
  const [searchIsActive, setSearchIsActive] = useState<Boolean>(false);

  const activateSearch = (): void => {
    setSearchIsActive(true);
    document.body.style.overflow = "hidden";
  };

  const deactivateSearch = (): void => {
    setSearchIsActive(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {searchIsActive && <SearchBar deactivateSearch={deactivateSearch} />}
      <header className=" z-50 bg-primaryColor sticky top-0 ">
        <div className="flex gap-6 py-3 px-5 items-center">
          <Link
            href="/"
            className=" flex items-center gap-3 rounded-full text-2xl"
          >
            <div className="rounded-full bg-white p-1 border-[3px] border-[#0daadc]">
              <Image
                src={"/OtterLogo.png"}
                alt={"logo"}
                height={35}
                width={35}
              />
            </div>
            <span className=" font-bold uppercase text-white ">Surf Otter</span>
          </Link>
          <nav className=" text-xs text-white ">
            <div className=" self-stretch flex gap-6 items-center  justify-around max-w-[1000px] m-auto h-full">
              <Link
                href="/report"
                className=" fill-[#adb5bd] text-[#adb5bd] hover:text-[#0daadc] hover:fill-[#0daadc] "
              >
                <div className="flex justify-center mb-1">
                  <WaveSVG />
                </div>
                <span>Reports</span>
              </Link>
              <Link
                href="/report"
                className=" fill-[#adb5bd] text-[#adb5bd] hover:text-[#0daadc] hover:fill-[#0daadc] "
              >
                <div className="flex justify-center mb-1">
                  <MapSVG />
                </div>
                <span>Map</span>
              </Link>
              <Link
                href="/report"
                className=" fill-[#adb5bd] text-[#adb5bd] hover:text-[#0daadc] hover:fill-[#0daadc] "
              >
                <div className="flex justify-center mb-1">
                  <ContactSVG />
                </div>
                <span>Contact</span>
              </Link>
            </div>
          </nav>
          <div
            className=" bg-[#274368] text-md flex-1 flex cursor-pointer items-center relative py-2 px-3 rounded-xlc gap-2 text-sm font-bold rounded-xl "
            // onClick={() => activateSearch()}
          >
            <Image
              height={20}
              width={20}
              src={"/icons/icons8-search.svg"}
              alt={"Search Icon"}
            />
            <input
              placeholder="Search for River Waves, Reports, and Locations..."
              className=" text-white  flex-1 bg-inherit placeholder-white outline-none"
            />
          </div>
          <Link
            href="/"
            className="h-full font-semibold text-sm flex items-center text-primaryColor cursor-pointer border-2 border-[#089f85]  bg-[#069f85] py-1 px-3 rounded-md text-white  hover:text-[#089f85] hover:bg-white "
          >
            Log In
          </Link>
        </div>
        <div className=" bg-white flex items-center gap-4 py-2 px-4 border-b-2 border-[#e5e7eb]">
          <Link
            href={"/"}
            className=" bg-[#f6f6f6]  px-4 py-2 rounded text-xs border-[1px] border-[#e6e6e6]
        text-gray-700 font-medium flex items-center hover:bg-[#f0f0f0]
        "
          >
            <div className=" w-2 h-2 bg-chartGoodBorder rounded-full "></div>
            <span className=" ml-2">River Run Park</span>
            <span className=" font-bold ml-2 ">272 cfs</span>
          </Link>
          <Link
            href={"/"}
            className=" bg-[#f6f6f6]  px-4 py-2 rounded text-xs border-[1px] border-[#e6e6e6]
        text-gray-700 font-medium flex items-center hover:bg-[#f0f0f0]
        "
          >
            <div className=" w-2 h-2 bg-chartBadBorder rounded-full "></div>
            <span className=" ml-2">Glenwood Wave</span>
            <span className=" font-bold ml-2 ">134 cfs</span>
          </Link>
          <Link
            href={"/"}
            className=" bg-[#f6f6f6]  px-4 py-2 rounded text-xs border-[1px] border-[#e6e6e6]
        text-gray-700 font-medium flex items-center hover:bg-[#f0f0f0]
        "
          >
            <div className=" w-2 h-2 bg-chartGoodBorder rounded-full "></div>
            <span className=" ml-2">RC&apos;s</span>
            <span className=" font-bold ml-2 ">272 cfs</span>
          </Link>
          <Link
            href={"/"}
            className=" text-sm text-white font-bold rounded-full px-4 py-1 border-2 border-[#089f85] bg-[#089f85] hover:text-[#089f85] hover:bg-white "
          >
            {" "}
            + Add Favorites
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
