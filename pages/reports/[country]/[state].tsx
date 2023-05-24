import React from "react";
import Head from "next/head";
import Header from "@/components/utility/Header";
import DetailedReportCard, {
  DetailedReportCardProps,
} from "@/components/pages/states/DetailedReportCard";
import { RiverAPIReturn } from "@/helpers/API_Calls/riverData";

const StateDetailPage = ({
  mockWaveData,
}: {
  mockWaveData: DetailedReportCardProps[];
}) => {
  return (
    <>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta name="description" content="The heart of River Surfing!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-auto max-w-5xl">
        <section className=" my-8 px-5">
          <div>
            <h1 className="relative my-8 mb-0 text-3xl font-semibold">
              Colorado
            </h1>
            <h2 className=" text-lg font-semibold text-[#1481BA]">
              United States
            </h2>
          </div>
        </section>
        <section className=" m-auto my-8 px-5">
          <div>
            {mockWaveData.map((item, index) => (
              <DetailedReportCard
                key={item.locationData.country + index}
                locationData={item.locationData}
                riverData={item.riverData}
              />
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

  const mockWaveData: DetailedReportCardProps[] = [
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
  return {
    props: {
      mockWaveData,
    },
  };
}

export default StateDetailPage;
