import React from "react";
import Head from "next/head";
import Header from "@/components/utility/Header";
import DetailedReportCard from "@/components/pages/states/DetailedReportCard";

const StateDetailPage = () => {
  return (
    <>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta name="description" content="The heart of River Surfing!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-auto max-w-5xl">
        <section className=" my-8  px-5">
          <div>
            <h1 className="relative my-8 mb-0 text-3xl font-semibold">
              Colorado
            </h1>
            <h2 className=" text-lg font-semibold text-[#1481BA]">
              United States
            </h2>
          </div>
        </section>
        <section className=" m-auto  my-8 px-5">
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <DetailedReportCard key={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default StateDetailPage;
