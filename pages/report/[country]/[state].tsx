import React from "react";
import Head from "next/head";
import Header from "@/components/utility/Header";
import Image from "next/image";
import PageHeader from "@/components/utility/PageHeader";
import { SectionWrapper } from "@/components/utility/SectionWrapper";
import Link from "next/link";

const CountryPage = () => {
  return (
    <>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta name="description" content="The heart of River Surfing!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className=" my-10  px-5 m-auto lg:max-w-none xl:max-w-5xl">
          <div>
            <h1 className=" my-10 relative font-semibold text-3xl mb-0">
              Colorado
            </h1>
            <h2 className=" text-lg font-semibold text-[#1481BA]">
              United States
            </h2>
          </div>
        </section>
        <section className=" my-10  px-5 m-auto lg:max-w-none xl:max-w-5xl">
          <div>
            <div className=" bg-white p-3 font-semibold text-[#1481BA] border-2 border-[#e5e7eb] rounded  ">
              <div className="">
                <Link href={"/"}>River Run Park</Link>
                <div className="text-xs">
                  <Link href={""}>Colorado </Link>
                  <span className=" text-gray-600 ">• </span>
                  <Link href={""}>United States</Link>
                </div>
              </div>
              <div className="flex  gap-3 mt-4 text-black ">
                <div className=" flex  pl-10 relative">
                  <div className=" absolute w-16 h-1.5 bg-slate-400 rotate-90 -left-5 translate-x-1.5 rounded self-center"></div>
                  <div className="flex flex-col gap-1 ">
                    <span className=" font-bold text-l">
                      <span className="text-4xl">321</span> cfs
                    </span>
                    <span
                      className={`font-bold text-l  text-white text-center self-start py-1 px-3 rounded bg-chartGoodBorder
                   `}
                    >
                      Good
                    </span>
                  </div>
                </div>
                <div className=" flex flex-col align-top font-bold pl-4">
                  <div className="flex items-center">
                    <span className="text-xl ">Weather</span>
                    <Image
                      src={"/weather-icons/clear-day.svg"}
                      alt={"weather icon"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex items-center text-slate-600">
                      <span className=" text-md">Temp : </span>{" "}
                      <span className=" text-md text-black ml-1">96</span>{" "}
                      <span className="text-sm ml-1 text-black">°F</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <span className=" text-md">Wind : </span>{" "}
                      <span className=" text-md text-black ml-1">{100} </span>{" "}
                      <span className="text-sm ml-1 text-black">mph</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CountryPage;
