import React from "react";
import Head from "next/head";
import Header from "@/components/utility/Header";
import Link from "next/link";
import Image from "next/image";
import { RiverAPIReturn } from "@/helpers/API_Calls/riverData";
import { getConditions } from "@/helpers/functions";
import Chart from "@/components/chart/Chart";

export interface DetailedReportCardProps {
  locationData: {
    wave: {
      name: string;
      url: string;
    };
    state: string;
    country: string;
  };
  riverData: {
    weather: {
      temp: number;
      wind: number;
    };
    flow: {
      current: number;
      threshold: {
        fair: number;
        good: number;
      };
      chartData: RiverAPIReturn;
    };
  };
}

const DetailedReportCard = (props: DetailedReportCardProps) => {
  const { locationData, riverData } = props;

  const conditionInfo = getConditions(
    riverData.flow.current,
    riverData.flow.threshold.good,
    riverData.flow.threshold.fair
  );

  return (
    <div className=" m-auto mb-6 max-w-[980px] rounded border-2 border-[#e5e7eb] bg-white py-3  px-5 font-semibold text-[#1481BA] ">
      <div className="flex flex-wrap gap-6 ">
        <div className="flex-1">
          <div className="border-b-2 border-b-[#e5e7eb] pb-2">
            <Link href={locationData.wave.url}>{locationData.wave.name}</Link>
            <div className="flex gap-1 text-xs text-black ">
              <div>{locationData.state} </div>
              <span className=" text-gray-600 ">• </span>
              <div>{locationData.country}</div>
            </div>
          </div>
          <div className="mt-4  flex gap-3 text-black ">
            <div className=" relative flex">
              <div className="flex flex-col gap-1 ">
                <span className=" md:text-l whitespace-nowrap  text-base font-bold ">
                  <span className=" text-2xl  md:text-4xl">
                    {riverData.flow.current}
                  </span>{" "}
                  cfs
                </span>
                <span
                  className={`self-start rounded ${conditionInfo.colors.dark}  py-1 px-3 text-center text-sm font-bold text-white md:text-lg`}
                >
                  {conditionInfo.condition}
                </span>
              </div>
            </div>
            <div className=" flex flex-col pl-4 align-top font-bold">
              <div className="flex items-center">
                <span className=" text-lg md:text-xl ">Weather</span>
                <Image
                  src={"/weather-icons/clear-day.svg"}
                  alt={"weather icon"}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex items-center whitespace-nowrap text-slate-600 ">
                  <span className=" md:text-md text-sm">Temp : </span>{" "}
                  <span className="md:text-md ml-1 text-sm text-black">96</span>{" "}
                  <span className="text-xm ml-1 text-black md:text-sm">°F</span>
                </div>
                <div className="flex items-center whitespace-nowrap text-slate-600 ">
                  <span className=" md:text-md text-sm">Wind : </span>{" "}
                  <span className=" md:text-md ml-1 text-sm text-black">
                    {100}{" "}
                  </span>{" "}
                  <span className="ml-1 text-xs text-black md:text-sm">
                    mph
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex aspect-[1.9/1] min-w-[50%] flex-1 items-center justify-center ">
          <Chart
            chartData={riverData.flow.chartData}
            smallScreen={true}
            flowRatings={{
              goodConditions: {
                min: 400,
                caption: "Good",
                color: {
                  background: "chartGood",
                  border: "chartGoodBorder",
                },
              },
              fairConditions: {
                min: 200,
                caption: "Fair",
                color: {
                  background: "chartFair",
                  border: "chartFairBorder",
                },
              },
              badConditions: {
                min: 100,
                caption: "Poor",
                color: {
                  background: "chartBad",
                  border: "chartBadBorder",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface StateDetailPageProps {
  state: string;
  country: string;
  cardData: DetailedReportCardProps[];
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
      <main className="m-auto max-w-5xl">
        <section className=" my-8 px-5">
          <div>
            <h1 className="relative my-8 mb-0 text-3xl font-semibold capitalize ">
              {state}
            </h1>
            <h2 className=" text-lg font-semibold capitalize text-[#1481BA]">
              {country}
            </h2>
          </div>
        </section>
        <section className=" m-auto my-8 px-5">
          <div>
            {cardData.map((item, index) => (
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
