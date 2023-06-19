import React from "react";
import Head from "next/head";
import Header from "@/components/utility/Header";
import Link from "next/link";
import Image from "next/image";
import { RiverAPIReturn } from "@/helpers/API_Calls/riverData";
import { getConditions } from "@/helpers/functions";
import Chart from "@/components/chart/Chart";
import DetailedWeatherCard, {
  DetailedWeatherCardProps,
  CardWrapper,
} from "@/components/utility/DetailedWeatherCard";

interface StateDetailPageProps {
  state: string;
  country: string;
  cardData: DetailedWeatherCardProps[];
}

const StateDetailPage = ({
  cardData,
  state,
  country,
}: StateDetailPageProps) => {
  return (
    <>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta name="description" content="The heart of River Surfing!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-4 px-4 md:px-6 ">
        <section className=" mx-auto my-6 max-w-4xl ">
          <div>
            <h1 className="relative my-6 mb-0 text-3xl font-semibold capitalize ">
              {state}
            </h1>
            <h2 className=" text-lg font-semibold capitalize text-[#1481BA]">
              {country}
            </h2>
          </div>
        </section>
        <section className=" mx-auto max-w-4xl ">
          <div className=" flex flex-col gap-6  ">
            {cardData.map((item, index) => (
              <div
                className="m-auto w-full max-w-4xl"
                key={item.locationData.country + index}
              >
                <DetailedWeatherCard
                  locationData={item.locationData}
                  riverData={item.riverData}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const mockRiverAxisData: RiverAPIReturn = {
    data: [
      {
        dateTime: "2023-05-22T08:00:00",
        value: 10,
      },
      {
        dateTime: "2023-05-22T09:00:00",
        value: 15,
      },
      {
        dateTime: "2023-05-22T10:00:00",
        value: 20,
      },
      {
        dateTime: "2023-05-22T11:00:00",
        value: 18,
      },
      {
        dateTime: "2023-05-22T12:00:00",
        value: 25,
      },
      {
        dateTime: "2023-05-22T13:00:00",
        value: 30,
      },
      {
        dateTime: "2023-05-22T14:00:00",
        value: 28,
      },
      {
        dateTime: "2023-05-22T15:00:00",
        value: 32,
      },
      {
        dateTime: "2023-05-22T16:00:00",
        value: 35,
      },
      {
        dateTime: "2023-05-22T17:00:00",
        value: 38,
      },
      {
        dateTime: "2023-05-22T18:00:00",
        value: 36,
      },
      {
        dateTime: "2023-05-22T19:00:00",
        value: 33,
      },
      {
        dateTime: "2023-05-22T20:00:00",
        value: 28,
      },
      {
        dateTime: "2023-05-22T21:00:00",
        value: 25,
      },
      {
        dateTime: "2023-05-22T22:00:00",
        value: 23,
      },
      {
        dateTime: "2023-05-22T23:00:00",
        value: 20,
      },
      {
        dateTime: "2023-05-23T00:00:00",
        value: 18,
      },
      {
        dateTime: "2023-05-23T01:00:00",
        value: 15,
      },
      {
        dateTime: "2023-05-23T02:00:00",
        value: 13,
      },
      {
        dateTime: "2023-05-23T03:00:00",
        value: 10,
      },
    ],
    error: false,
  };

  const mockWaveData: DetailedWeatherCardProps[] = [
    {
      locationData: {
        wave: {
          name: "Boulder Creek Wave",
          url: "https://example.com/boulder-creek-wave",
        },
        state: "Colorado",
        country: "United States",
      },
      riverData: {
        weather: {
          temp: 75,
          wind: 7,
        },
        flow: {
          current: 950,
          threshold: {
            fair: 700,
            good: 900,
          },
          chartData: mockRiverAxisData,
        },
      },
    },
    {
      locationData: {
        wave: {
          name: "Glenwood Wave",
          url: "https://example.com/glenwood-wave",
        },
        state: "Colorado",
        country: "United States",
      },
      riverData: {
        weather: {
          temp: 70,
          wind: 6,
        },
        flow: {
          current: 200,
          threshold: {
            fair: 800,
            good: 1000,
          },
          chartData: mockRiverAxisData,
        },
      },
    },
    {
      locationData: {
        wave: {
          name: "Animas River Wave",
          url: "https://example.com/animas-river-wave",
        },
        state: "Colorado",
        country: "United States",
      },
      riverData: {
        weather: {
          temp: 68,
          wind: 5,
        },
        flow: {
          current: 1150,
          threshold: {
            fair: 800,
            good: 1000,
          },
          chartData: mockRiverAxisData,
        },
      },
    },
    {
      locationData: {
        wave: {
          name: "Clear Creek Whitewater Park",
          url: "https://example.com/clear-creek-whitewater-park",
        },
        state: "Colorado",
        country: "United States",
      },
      riverData: {
        weather: {
          temp: 72,
          wind: 8,
        },
        flow: {
          current: 900,
          threshold: {
            fair: 700,
            good: 900,
          },
          chartData: mockRiverAxisData,
        },
      },
    },
    {
      locationData: {
        wave: {
          name: "South Platte River Wave",
          url: "https://example.com/south-platte-river-wave",
        },
        state: "Colorado",
        country: "United States",
      },
      riverData: {
        weather: {
          temp: 70,
          wind: 6,
        },
        flow: {
          current: 1050,
          threshold: {
            fair: 800,
            good: 1000,
          },
          chartData: mockRiverAxisData,
        },
      },
    },
  ];

  const detailProps: StateDetailPageProps = {
    state: "Colorado",
    country: "United States",
    cardData: mockWaveData,
  };

  return {
    props: detailProps,
  };
}

export default StateDetailPage;
