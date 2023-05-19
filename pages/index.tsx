import React from "react";
import Link from "next/link";
import Image from "next/image";
import QuickInfoCard from "@/components/utility/QuickInfoCard";
import Head from "next/head";

import { TopFlows } from "@/helpers/types";

//index uses ssg and csr for fetching top flows and favorites

//favorites still needs to be implemented

const Index = ({ topFlows }: { topFlows: TopFlows[] }) => {
  return (
    <main className="m-auto max-w-screen-xl">
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta
          name="description"
          content="Discover the latest river surf reports and explore exciting new waves with Surf Otter. Get detailed information on wave conditions, weather, and more for the best river surf spots. Plan your next river surf session with our comprehensive app. Catch the perfect wave now!"
        />
      </Head>
      <div className="relative my-10 text-center font-semibold ">
        <h1 className="text-5xl text-primaryColor">Surf Otter</h1>
        <h2 className="text-xl text-primaryColor">River Surf Reports</h2>
      </div>
      <section className="m-auto my-10 flex flex-col gap-6 px-5 lg:flex-row ">
        <div className=" flex-1 ">
          <div className=" relative aspect-video">
            <Image
              src={"/river-surf-welcome.png"}
              alt={"An Otter, the river surf site mascot, riding a wave"}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 976px) 100vw,
              50vw"
            />
          </div>
        </div>
        <div className=" flex-1">
          <div>
            <h3 className="mb-2 pb-1 text-xl font-bold ">Favorites</h3>
            <Link
              href={"/sign-up"}
              className="  mb-2  flex items-center rounded border-2 border-[#0CAADC] bg-white px-4 py-2 text-base font-medium text-[#0CAADC] hover:border-white hover:bg-[#0CAADC] hover:text-white"
            >
              <span className=" ml-2 font-bold ">Log In To Add Favorites</span>
              <span className="ml-auto text-xl font-extrabold">+</span>
            </Link>
          </div>
          <h3 className=" mt-4 mb-2 pb-1 text-xl font-bold ">Top Flows</h3>
          {topFlows.map(({ waveName, cfs, countryFlag, urlPraram }) => (
            <QuickInfoCard
              key={urlPraram}
              wave={waveName}
              cfs={cfs}
              flag={countryFlag}
              urlParam={urlPraram}
            />
          ))}
        </div>
      </section>
      <section className="m-auto my-10 flex flex-col gap-6 px-5 lg:flex-row">
        <div className="flex-1">
          <h3 className="mb-4 text-3xl font-semibold text-primaryColor ">
            Discover New Waves and Surf Reports
          </h3>
          <div className=" text-lg ">
            <p className="mb-2">
              Check out our{" "}
              <Link className="text-[#0CAADC] underline" href="/explore">
                Explore
              </Link>{" "}
              and{" "}
              <Link className="text-[#0CAADC] underline" href="/map">
                Map
              </Link>{" "}
              pages to find exciting new river waves and stay updated with the
              latest surf reports. Explore the best river surf spots and get
              detailed information about wave conditions, weather, and more.
              Whether you&#x27;re a beginner or an experienced surfer, our app
              has you covered with the latest information to help you plan your
              next river surf session. Get started now and catch the perfect
              wave!
            </p>
          </div>
        </div>
        <div className=" relative  h-96 flex-[2] overflow-hidden ">
          <div className=" ml-[50%] flex h-[238px] w-full -translate-x-1/2 items-center justify-center lg:h-[384px] lg:w-[917px] ">
            <Image
              src={"/river-run-map.png"}
              alt="Map of River Run Park"
              width={917}
              height={384}
            />
          </div>
        </div>
      </section>
      <section className="m-auto my-10 flex flex-col-reverse gap-6 px-5 lg:flex-row">
        <figure className="flex flex-col">
          <div className=" relative  h-96 flex-[2] overflow-hidden ">
            <div className=" ml-[50%] flex h-[238px] w-full -translate-x-1/2 items-center justify-center lg:h-[384px] lg:w-[917px] ">
              <Image
                src={"/jake_voss.jpg"}
                alt="Surfer riding a river wave at River Run Park"
                width={917}
                height={384}
              />
            </div>
          </div>
          <figcaption className="mt-2 font-medium">
            Photo by Jake Voss``
          </figcaption>
        </figure>
        <div className="flex-1">
          <h3 className="mb-4 text-3xl font-semibold text-primaryColor">
            Can&#x27;t Find the Wave You&#x27;re Looking For?
          </h3>
          <div className=" text-lg">
            <p className="mb-2">
              If you&#x27;re having trouble finding the wave you are looking
              for, or if you encounter any issues while using our site, we want
              to hear from you! We&#x27;re constantly working to improve our
              site and add new waves to our database.
            </p>
            <p>
              Please don&#x27;t hesitate to{" "}
              <Link className="text-[#0CAADC] underline" href="/contact">
                contact us
              </Link>{" "}
              and let us know about any problems or suggestions you may have.
              Your feedback is invaluable in helping us provide the best
              possible experience for our users.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

export async function getServerSideProps() {
  const topFlows: TopFlows[] = [
    {
      waveName: "Munich City Wave",
      cfs: 100,
      countryFlag: "🇩🇪",
      urlPraram: "munich-city-wave",
    },
    {
      waveName: "Bend Whitewater Park",
      cfs: 150,
      countryFlag: "🇺🇸",
      urlPraram: "bend-whitewater-park",
    },
    {
      waveName: "Habitat 67 Wave",
      cfs: 200,
      countryFlag: "🇨🇦",
      urlPraram: "habitat-67-wave",
    },
    {
      waveName: "River Arno Wave",
      cfs: 120,
      countryFlag: "🇮🇹",
      urlPraram: "river-arno-wave",
    },
    {
      waveName: "Sevilla Wave",
      cfs: 180,
      countryFlag: "🇪🇸",
      urlPraram: "sevilla-wave",
    },
  ];

  return {
    props: {
      topFlows,
    },
  };
}
