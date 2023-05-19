import { SectionWrapper } from "../../utility/SectionWrapper";
import Image from "next/image";
import { WeatherStatus } from "../../../report.types";
import { getImgURL } from "@/helpers/functions";
import { ConditionNames } from "../../../report.types";

interface boxData {
  title: string;
  data: string;
}

export interface riverReportProps {
  imgUrl: string;
  surfSpotName: string;
  riverName: string;
  weatherValues: {
    instantFlow: number;
    wind: number;
    temperature: number;
    lowTemp: number;
    highTemp: number;
    weatherStatus: WeatherStatus;
  };
  conditionStatus: ConditionNames;
}

const RiverReport = ({
  imgUrl,
  surfSpotName,
  riverName,
  weatherValues,
  conditionStatus,
}: riverReportProps) => {
  const { instantFlow, wind, temperature, weatherStatus } = weatherValues;
  const imgUrk = getImgURL(weatherStatus);
  return (
    <SectionWrapper>
      <div className=" m-auto max-w-screen-md lg:max-w-none xl:max-w-7xl">
        <div className="flex flex-wrap-reverse  gap-7 md:grid md:grid-cols-2">
          <div className="m-auto">
            <Image
              src={imgUrl}
              alt="surf location"
              width={500}
              height={500}
              className="m-auto"
            />
          </div>
          <div className="flex-1">
            <h3 className=" mt-0 mb-6 text-center text-xl font-semibold lg:text-left ">
              {`${surfSpotName} - ${riverName}`}
            </h3>
            <div className=" flex justify-center gap-4 lg:justify-start">
              <div className=" relative  flex pl-10">
                <div className=" absolute -left-5 h-1.5 w-16 translate-x-1.5 rotate-90 self-center rounded bg-slate-400"></div>
                <div className="flex flex-col gap-1 ">
                  <span className=" text-l font-bold">
                    <span className="text-4xl">{instantFlow}</span> cfs
                  </span>
                  <span
                    className={`text-l self-start  rounded py-1 px-3 text-center font-bold text-white
                   ${
                     (conditionStatus.name === "Poor" &&
                       " bg-chartBadBorder") ||
                     (conditionStatus.name === "Good" &&
                       " bg-chartGoodBorder ") ||
                     (conditionStatus.name === "Fair" && " bg-chartFairBorder")
                   }`}
                  >
                    {conditionStatus.name}
                  </span>
                </div>
              </div>
              <div className=" flex flex-col pl-4 align-top font-bold">
                <div className="flex items-center">
                  <span className="text-xl">Weather</span>
                  <Image
                    src={imgURL()}
                    alt={weatherStatus}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center text-slate-600">
                    <span className=" text-md">Temp : </span>{" "}
                    <span className=" text-md ml-1 text-black">
                      {temperature}{" "}
                    </span>{" "}
                    <span className="ml-1 text-sm text-black">°F</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <span className=" text-md">Wind : </span>{" "}
                    <span className=" text-md ml-1 text-black">{wind} </span>{" "}
                    <span className="ml-1 text-sm text-black">mph</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <ul className="m-auto grid gap-4 grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {liveRiverData.map((item, index) => (
                <li key={index} data-testid={`river-${index}`}>
                  <div className="flex flex-col items-center space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-100">
                    <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className=" text-xl font-bold whitespace-nowrap ">
                      {item.data}
                    </span>
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiverReport;
