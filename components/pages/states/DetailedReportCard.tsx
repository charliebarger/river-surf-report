import React from "react";
import Link from "next/link";
import Image from "next/image";
import Chart from "../surf-spot/chart/Chart";
import { RiverAxis } from "@/helpers/API_Calls/riverData";
import { getImgURL } from "@/helpers/functions";

interface DetailedReportCardProps {
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
      chartData: RiverAxis[];
    };
  };
}

function getFlowRating(
  currentFlow: number,
  goodFlow: number,
  fairFlow: number
) {
  if (currentFlow > goodFlow) {
    return "Good";
  } else if (currentFlow > fairFlow) {
    return "Fair";
  } else {
    return "Poor";
  }
}

const DetailedReportCard = (props: DetailedReportCardProps) => {
  const { locationData, riverData } = props;
  return (
    <div className=" m-auto mb-6 max-w-[980px] rounded border-2 border-[#e5e7eb] bg-white py-3  px-5 font-semibold text-[#1481BA] ">
      <div className="flex flex-wrap gap-6 ">
        <div className="flex-1">
          <div className="border-b-2 border-b-[#e5e7eb] pb-2">
            <Link href={locationData.wave.url}>{locationData.wave.name}</Link>
            <div className="text-xs">
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
                  className={`self-start rounded bg-chartGoodBorder  py-1 px-3 text-center text-sm font-bold text-white md:text-lg`}
                >
                  {getFlowRating(
                    riverData.flow.current,
                    riverData.flow.threshold.good,
                    riverData.flow.threshold.fair
                  )}
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
            usgsID="06710247"
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

export default DetailedReportCard;
