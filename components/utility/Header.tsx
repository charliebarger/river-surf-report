import React from "react";
import Link from "next/link";
import List from "./ListGenerator";

const headerItems = [
  { title: "Home", url: "/home" },
  { title: "Surf Reports", url: "/reports" },
  { title: "Contact", url: "/contact" },
];

const Header = () => {
  return (
    <header className="flex  items-center just px-10 shadow-md z-50 sticky top-0 bg-white">
      <Link href="/" className=" m-auto w-28 md:m-0">
        <span>LOGO</span>
        {/* <img className="py-5" src={Logo} alt="logos "></img> */}
      </Link>
      <nav className="relative container py-6 ml-auto basis-0 hidden font-medium md:block">
        <List
          wrapperClasses="flex items-center justify-between space-x-20"
          list={headerItems}
          render={(item) => (
            <Link
              href={item.url}
              className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
            >
              {item.title}
            </Link>
          )}
        />
      </nav>
    </header>
  );
};

export default Header;
