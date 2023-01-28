import React from "react";
import Link from "next/link";
import List from "./ListGenerator";
import Image from "next/image";

const headerItems = [
  { title: "Home", url: "/home" },
  { title: "Surf Reports", url: "/reports" },
  { title: "Contact", url: "/contact" },
];

const Header = () => {
  return (
    <header className=" z-50 bg-white">
      <div className="flex gap-8 items-center h-20 py-5 px-10 max-w-[1250px] m-auto">
        <Link href="/" className=" min-w-[150px]">
          <Image
            src={"/logo.png"}
            alt="logo"
            unoptimized={true}
            width={100}
            height={100}
            className={" p-2 rounded-full  object-cover "}
            priority
          />
          {/* <img className="py-5" src={Logo} alt="logos "></img> */}
        </Link>

        <div className=" bg-gray-100 text-md flex-1 flex justify-center cursor-pointer h-full items-center">
          <span className=" font-bold text-gray-400 ">Search Surf Otter</span>
        </div>
        <Link
          href="/"
          className=" bg-highlightColor h-full px-6 font-semibold text-sm flex items-center cursor-pointer hover:bg-highlightColorDulled"
        >
          <span>Sign Up</span>
        </Link>
        <Link
          href="/"
          className="h-full px-6 font-semibold text-sm flex items-center text-primaryColor cursor-pointer hover:underline"
        >
          Log In
        </Link>
      </div>
      <nav className=" border-t-[1px] border-solid border-[#e6e6e6]">
        <div className=" px-10 py-3 flex justify-around max-w-[1000px] m-auto">
          <Link href="/" className=" text-black font-normal text-lg ">
            REPORTS
          </Link>
          <Link href="/" className=" text-black font-normal text-lg ">
            PHOTOS
          </Link>
          <Link href="/" className=" text-black font-normal text-lg ">
            SHOP
          </Link>
          <Link href="/" className=" text-black font-normal text-lg ">
            NEWS
          </Link>
        </div>
      </nav>
      <div className=" bg-primaryColor flex items-center gap-4 py-1 px-4">
        <div
          className=" bg-[#f6f6f6]  px-4 py-2 rounded text-xs border-[1px] border-[#e6e6e6]
        text-gray-700 font-medium flex items-center
        "
        >
          <div className=" w-2 h-2 bg-chartGoodBorder rounded-full "></div>
          <span className=" ml-2">River Run Park</span>
          <span className=" font-bold ml-2 ">272 cfs</span>
        </div>
        <div
          className=" bg-[#f6f6f6]  px-4 py-2 rounded text-xs border-[1px] border-[#e6e6e6]
        text-gray-700 font-medium flex items-center
        "
        >
          <div className=" w-2 h-2 bg-chartBadBorder rounded-full "></div>
          <span className=" ml-2">Glenwood Wave</span>
          <span className=" font-bold ml-2 ">134 cfs</span>
        </div>
        <div
          className=" bg-[#f6f6f6]  px-4 py-2 rounded text-xs border-[1px] border-[#e6e6e6]
        text-gray-700 font-medium flex items-center
        "
        >
          <div className=" w-2 h-2 bg-chartGoodBorder rounded-full "></div>
          <span className=" ml-2">RC&apos;s</span>
          <span className=" font-bold ml-2 ">272 cfs</span>
        </div>
        <button className=" text-sm text-white font-bold border-2 border-solid border-white rounded-full py-1 px-3 hover:text-primaryColor hover:bg-white ">
          {" "}
          + Add Favorites
        </button>
      </div>
    </header>
  );
};

export default Header;
