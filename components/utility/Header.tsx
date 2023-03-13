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
  const [searchState, setSearchState] = useState<string>("");
  const [sidebarIsOpen, setSidebarIsOpen] = useState<Boolean>(false);

  return (
    <>
      <header className=" z-50  bg-primaryColor lg:sticky top-0 ">
        <nav className="relative">
          <div className="lg:flex py-3 px-5 items-center justify-between">
            <div className="flex items-center justify-between">
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
                <span className=" font-bold uppercase text-white ">
                  Surf Otter
                </span>
              </Link>
              <button
                className="relative group lg:hidden"
                onClick={() => setSidebarIsOpen((prev) => !prev)}
              >
                <div
                  className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700  duration-200 shadow-md`}
                >
                  <div
                    className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
                      sidebarIsOpen && "-rotate-90 -translate-y-1.5 "
                    }`}
                  >
                    <div
                      className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left 3 delay-150 ${
                        sidebarIsOpen && "rotate-[42deg] w-2/3 "
                      } `}
                    ></div>
                    <div
                      className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                        sidebarIsOpen && "translate-x-10"
                      } `}
                    ></div>
                    <div
                      className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  delay-150 ${
                        sidebarIsOpen && "-rotate-[42deg] w-2/3"
                      }`}
                    ></div>
                  </div>
                </div>
              </button>
            </div>
            <div
              className={` ${sidebarIsOpen ? " h-56 pt-4 pb-1" : "h-0 p-0 "} ${
                searchState && sidebarIsOpen
                  ? " overflow-visible "
                  : "overflow-hidden"
              } ease-in transition-height duration-300 tra z-50 top-full right-0 left-0 lg:h-auto lg:static bg-primaryColor flex flex-col-reverse  gap-4 px-0 lg:p-0 lg:flex lg:flex-row  lg:gap-6 lg:items-center flex-1 lg:mx-6 lg:overflow-visible `}
            >
              <div className="   lg:text-xs text-white ">
                <div className=" self-stretch flex flex-col items-start gap-4 lg:gap-6 lg:flex-row lg:items-center  justify-around max-w-[1000px] m-auto h-full">
                  <Link
                    href="/reports"
                    className="flex gap-2 lg:block fill-[#adb5bd] text-[#adb5bd] hover:text-[#0daadc] hover:fill-[#0daadc] "
                  >
                    <div className="flex justify-center mb-1">
                      <WaveSVG />
                    </div>
                    <span>Reports</span>
                  </Link>
                  <Link
                    href="/reports"
                    className="flex gap-2 lg:block  fill-[#adb5bd] text-[#adb5bd] hover:text-[#0daadc] hover:fill-[#0daadc] "
                  >
                    <div className="flex justify-center mb-1">
                      <MapSVG />
                    </div>
                    <span>Map</span>
                  </Link>
                  <Link
                    href="/reports"
                    className="flex gap-2 lg:block  fill-[#adb5bd] text-[#adb5bd] hover:text-[#0daadc] hover:fill-[#0daadc] "
                  >
                    <div className="flex justify-center mb-1">
                      <ContactSVG />
                    </div>
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
              <div
                className=" flex bg-[#274368] text-md flex-1 cursor-pointer items-center relative py-2 px-3 rounded-xlc gap-2 text-sm font-bold rounded-xl"
                // onClick={() => activateSearch()}
              >
                <Image
                  height={20}
                  width={20}
                  src={"/icons/icons8-search.svg"}
                  alt={"Search Icon"}
                />
                <input
                  value={searchState}
                  placeholder="Search for River Waves, Reports, and Locations..."
                  className=" text-white  flex-1 bg-inherit placeholder-white outline-none"
                  onChange={(e) => {
                    setSearchState(e.target.value);
                  }}
                />
                {searchState && <SearchBar searchState={searchState} />}
              </div>
              <Link
                href="/"
                className=" flex self-start order-first h-full font-semibold text-sm  items-center cursor-pointer border-2 border-[#089f85]  bg-[#069f85] py-1 px-3 rounded-md text-white  hover:text-[#089f85] hover:bg-white lg:order-last lg:self-auto"
              >
                Log In
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex  bg-white items-center gap-4 py-2 px-4 border-b-2 border-[#e5e7eb]">
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
        </nav>
      </header>
    </>
  );
};

export default Header;
