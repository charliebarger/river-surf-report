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
    <header className="flex gap-8 items-center just py-5 px-10 shadow-md z-50 bg-white h-20">
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
    </header>
  );
};

export default Header;
