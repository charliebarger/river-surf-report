import React from "react";
import Link from "next/link";
import Image from "next/image";
import WaveSVG from "@/assets/images/wave.svg";
import ContactSVG from "@/assets/images/contact.svg";
import MapSVG from "@/assets/images/map.svg";
import FavoriteSVG from "@/assets/images/favorite.svg";
import { getConditions } from "@/helpers/functions";
import { useState } from "react";

const SearchItem = ({
  flagImg,
  country,
  waveNumber,
}: {
  flagImg: {
    src: string;
    alt: string;
  };
  country: string;
  waveNumber: number;
}) => {
  return (
    <div className=" flex items-center gap-4 bg-white p-3 hover:bg-[#f6f6f6]">
      <div className="flex h-8 w-8 items-center justify-center rounded bg-[#e5e7eb] p-1 ">
        <Image
          width={50}
          height={30}
          src={flagImg.src}
          alt={flagImg.alt}
          style={{ height: "auto" }}
        ></Image>
      </div>
      <div className="flex flex-col">
        <span className=" font-semibold ">Colorado</span>
        <div className=" text-[#94a3b8] ">
          <span>{country} </span>
          <span>| </span>
          <span>{waveNumber} Waves</span>
        </div>
      </div>
    </div>
  );
};

const SearchBarResults = ({ searchState }: { searchState: string }) => {
  return (
    <div className="absolute left-0 right-0 top-10 grid items-center gap-[2px] rounded border-2 border-[#e5e7eb] bg-[#e5e7eb] font-normal ">
      <SearchItem
        flagImg={{
          src: "/coloradoFlag.png",
          alt: "Colorado Flag",
        }}
        country={"United States"}
        waveNumber={38}
      />
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      aria-label="Home Page"
      href="/"
      className=" flex items-center gap-3 rounded-full text-2xl "
    >
      <div className=" p-1">
        <Image
          src={"/assets/images/logo.png"}
          alt={"Surf Otter Logo"}
          height={50}
          width={175}
        />
      </div>
    </Link>
  );
};

const Hamburger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="group relative lg:hidden"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={`relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-slate-700 shadow-md  transition-all duration-200`}
      >
        <div
          className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${
            isOpen && "-translate-y-1.5 -rotate-90 "
          }`}
        >
          <div
            className={`3 h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 ${
              isOpen && "w-2/3 rotate-[42deg] "
            } `}
          ></div>
          <div
            className={`h-[2px] w-7 transform rounded bg-white transition-all duration-300 ${
              isOpen && "translate-x-10"
            } `}
          ></div>
          <div
            className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-150  duration-300 ${
              isOpen && "w-2/3 -rotate-[42deg]"
            }`}
          ></div>
        </div>
      </div>
    </button>
  );
};

const NavItem = ({
  href,
  label,
  SvgElement,
  handleClick,
}: {
  href: string;
  label: string;
  SvgElement: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  handleClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={handleClick}
      className="flex gap-2 fill-[#adb5bd] text-[#adb5bd] hover:fill-[#0daadc] hover:text-[#0daadc] lg:block  "
    >
      <div className="mb-1 flex justify-center">
        <SvgElement />
      </div>
      <span>{label}</span>
    </Link>
  );
};

const SearchBar = ({
  searchState,
  setSearchState,
}: {
  searchState: string;
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
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
      {searchState && <SearchBarResults searchState={searchState} />}
    </div>
  );
};

const MainNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchState, setSearchState] = useState<string>("");

  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={` ${isOpen ? " h-64 pt-4 pb-1 " : "h-0 p-0 "} ${
        searchState && isOpen ? " overflow-visible " : "overflow-hidden"
      } transition-height top-full right-0 left-0 z-50 flex flex-1 flex-col-reverse gap-4 bg-primaryColor px-0 duration-300  ease-in lg:static lg:mx-6 lg:flex lg:h-auto  lg:flex-row lg:items-center lg:gap-6 lg:overflow-visible lg:p-0 `}
    >
      <div className="  text-white lg:text-xs ">
        <div className=" m-auto flex h-full max-w-[1000px] flex-col items-start justify-around gap-4  self-stretch lg:flex-row lg:items-center lg:gap-6">
          <NavItem
            href="/favorites"
            label="Favorites"
            SvgElement={FavoriteSVG}
            handleClick={closeSidebar}
          />
          <NavItem
            href="/reports"
            label="Reports"
            SvgElement={WaveSVG}
            handleClick={closeSidebar}
          />
          <NavItem
            href="/map"
            label="Map"
            SvgElement={MapSVG}
            handleClick={closeSidebar}
          />
          <NavItem
            href="/contact"
            label="Contact"
            SvgElement={ContactSVG}
            handleClick={closeSidebar}
          />
        </div>
      </div>
      <SearchBar searchState={searchState} setSearchState={setSearchState} />
      <Link
        href="/"
        className=" order-first flex h-full cursor-pointer items-center self-start  rounded-md border-2 border-[#089f85] bg-[#069f85]  py-1 px-3 text-sm font-semibold text-white  hover:bg-white hover:text-[#089f85] lg:order-last lg:self-auto"
      >
        Log In
      </Link>
    </div>
  );
};

interface FlowCardProps {
  href: string;
  name: string;
  flow: {
    current: number;
    threshold: {
      fair: number;
      good: number;
    };
  };
}

const FlowCard = ({ href, name, flow }: FlowCardProps) => {
  const conditions = getConditions(
    flow.current,
    flow.threshold.good,
    flow.threshold.fair
  );
  return (
    <Link
      href={href}
      className=" flex  items-center rounded border-[1px] border-[#e6e6e6] bg-[#f6f6f6] px-4
        py-2 text-xs font-medium text-gray-700 hover:bg-[#f0f0f0]
        "
    >
      <div className={` h-2 w-2 rounded-full ${conditions.colors.dark} `}></div>
      <span className=" ml-2">{name}</span>
      <span className=" ml-2 font-bold ">{flow.current} cfs</span>
    </Link>
  );
};

const mockFlowCards: FlowCardProps[] = [
  {
    href: "/",
    name: "Gore Canyon",
    flow: {
      current: 1000,
      threshold: {
        fair: 500,
        good: 1000,
      },
    },
  },
  {
    href: "/",
    name: "Gore Canyon",
    flow: {
      current: 400,
      threshold: {
        fair: 500,
        good: 1000,
      },
    },
  },
];

const FavoritesBar = () => {
  return (
    <div className="hidden items-center  gap-4 border-b-2 border-[#e5e7eb] bg-white py-2 px-4 lg:flex">
      {mockFlowCards.map((card) => (
        <FlowCard
          key={card.name}
          href={card.href}
          name={card.name}
          flow={card.flow}
        />
      ))}
      <Link
        href={"/"}
        className=" rounded-full border-2 border-[#089f85] bg-[#089f85] px-4 py-1 text-sm font-bold text-white hover:bg-white hover:text-[#089f85] "
      >
        {" "}
        + Add Favorites
      </Link>
    </div>
  );
};

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className=" top-0  z-50 bg-primaryColor lg:sticky ">
        <nav className="relative">
          <div className="items-center justify-between py-3 px-5 lg:flex">
            <div className="flex items-center justify-between">
              <Logo />
              <Hamburger isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} />
            </div>
            <MainNav isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} />
          </div>
          <FavoritesBar />
        </nav>
      </header>
    </>
  );
};

export default Header;
