import React from "react";
import Link from "next/link";
import Image from "next/image";
import WaveSVG from "@/assets/images/wave.svg";
import ContactSVG from "@/assets/images/contact.svg";
import MapSVG from "@/assets/images/map.svg";
import { useState } from "react";

const SearchBar = ({ searchState }: { searchState: string }) => {
  return (
    <div className="absolute left-0 right-0 top-10 grid items-center gap-[2px] rounded border-2 border-[#e5e7eb] bg-[#e5e7eb] font-normal ">
      <div className=" flex items-center gap-4 bg-white p-3 hover:bg-[#f6f6f6]">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#e5e7eb] p-1 ">
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
      <div className=" flex items-center gap-4 bg-white p-3 hover:bg-[#f6f6f6]">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#e5e7eb] p-1 ">
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
      <div className=" flex items-center gap-4 bg-white p-3 hover:bg-[#f6f6f6]">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#e5e7eb] p-1 ">
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

const Header = () => {
  const [searchState, setSearchState] = useState<string>("");
  const [sidebarIsOpen, setSidebarIsOpen] = useState<Boolean>(false);

  return (
    <>
      <header className=" top-0  z-50 bg-primaryColor lg:sticky ">
        <nav className="relative">
          <div className="items-center justify-between py-3 px-5 lg:flex">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className=" flex items-center gap-3 rounded-full text-2xl"
              >
                <div className="rounded-full border-[3px] border-[#0daadc] bg-white p-1">
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
                className="group relative lg:hidden"
                onClick={() => setSidebarIsOpen((prev) => !prev)}
              >
                <div
                  className={`relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-slate-700 shadow-md  transition-all duration-200`}
                >
                  <div
                    className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${
                      sidebarIsOpen && "-translate-y-1.5 -rotate-90 "
                    }`}
                  >
                    <div
                      className={`3 h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 ${
                        sidebarIsOpen && "w-2/3 rotate-[42deg] "
                      } `}
                    ></div>
                    <div
                      className={`h-[2px] w-7 transform rounded bg-white transition-all duration-300 ${
                        sidebarIsOpen && "translate-x-10"
                      } `}
                    ></div>
                    <div
                      className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-150  duration-300 ${
                        sidebarIsOpen && "w-2/3 -rotate-[42deg]"
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
              } transition-height tra top-full right-0 left-0 z-50 flex flex-1 flex-col-reverse gap-4 bg-primaryColor px-0 duration-300  ease-in lg:static lg:mx-6 lg:flex lg:h-auto  lg:flex-row lg:items-center lg:gap-6 lg:overflow-visible lg:p-0 `}
            >
              <div className="   text-white lg:text-xs ">
                <div className=" m-auto flex h-full max-w-[1000px] flex-col items-start justify-around gap-4  self-stretch lg:flex-row lg:items-center lg:gap-6">
                  <Link
                    href="/reports"
                    className="flex gap-2 fill-[#adb5bd] text-[#adb5bd] hover:fill-[#0daadc] hover:text-[#0daadc] lg:block "
                  >
                    <div className="mb-1 flex justify-center">
                      <WaveSVG />
                    </div>
                    <span>Reports</span>
                  </Link>
                  <Link
                    href="/map"
                    className="flex gap-2 fill-[#adb5bd]  text-[#adb5bd] hover:fill-[#0daadc] hover:text-[#0daadc] lg:block "
                  >
                    <div className="mb-1 flex justify-center">
                      <MapSVG />
                    </div>
                    <span>Map</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex gap-2 fill-[#adb5bd]  text-[#adb5bd] hover:fill-[#0daadc] hover:text-[#0daadc] lg:block "
                  >
                    <div className="mb-1 flex justify-center">
                      <ContactSVG />
                    </div>
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
              <div
                className=" text-md rounded-xlc relative flex flex-1 cursor-pointer items-center gap-2 rounded-xl bg-[#274368] py-2 px-3 text-sm font-bold"
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
                  className=" flex-1  bg-inherit text-white placeholder-white outline-none"
                  onChange={(e) => {
                    setSearchState(e.target.value);
                  }}
                />
                {searchState && <SearchBar searchState={searchState} />}
              </div>
              <Link
                href="/"
                className=" order-first flex h-full cursor-pointer items-center self-start  rounded-md border-2 border-[#089f85] bg-[#069f85]  py-1 px-3 text-sm font-semibold text-white  hover:bg-white hover:text-[#089f85] lg:order-last lg:self-auto"
              >
                Log In
              </Link>
            </div>
          </div>
          <div className="hidden items-center  gap-4 border-b-2 border-[#e5e7eb] bg-white py-2 px-4 lg:flex">
            <Link
              href={"/"}
              className=" flex  items-center rounded border-[1px] border-[#e6e6e6] bg-[#f6f6f6] px-4
        py-2 text-xs font-medium text-gray-700 hover:bg-[#f0f0f0]
        "
            >
              <div className=" h-2 w-2 rounded-full bg-chartGoodBorder "></div>
              <span className=" ml-2">River Run Park</span>
              <span className=" ml-2 font-bold ">272 cfs</span>
            </Link>
            <Link
              href={"/"}
              className=" flex  items-center rounded border-[1px] border-[#e6e6e6] bg-[#f6f6f6] px-4
        py-2 text-xs font-medium text-gray-700 hover:bg-[#f0f0f0]
        "
            >
              <div className=" h-2 w-2 rounded-full bg-chartBadBorder "></div>
              <span className=" ml-2">Glenwood Wave</span>
              <span className=" ml-2 font-bold ">134 cfs</span>
            </Link>
            <Link
              href={"/"}
              className=" flex  items-center rounded border-[1px] border-[#e6e6e6] bg-[#f6f6f6] px-4
        py-2 text-xs font-medium text-gray-700 hover:bg-[#f0f0f0]
        "
            >
              <div className=" h-2 w-2 rounded-full bg-chartGoodBorder "></div>
              <span className=" ml-2">RC&apos;s</span>
              <span className=" ml-2 font-bold ">272 cfs</span>
            </Link>
            <Link
              href={"/"}
              className=" rounded-full border-2 border-[#089f85] bg-[#089f85] px-4 py-1 text-sm font-bold text-white hover:bg-white hover:text-[#089f85] "
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
