import { SectionWrapper } from "../utility/SectionWrapper";
import Image from "next/image";
import dynamic from "next/dynamic";
import { WeatherStatus } from "../../report.types";
import { ConditionNames } from "../../report.types";
import List from "../utility/ListGenerator";

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

  const imgURL = () => {
    console.log(weatherStatus);
    switch (weatherStatus) {
      case "rain":
        return "/weather-icons/rainy-3.svg";
      case "hail":
        return "/weather-icons/hail.svg";
      case "snow":
        return "/weather-icons/snowy-3.svg";
      case "sunny":
        return "/weather-icons/clear-day.svg";
      case "windy":
        return "/weather-icons/wind.svg";
      default:
        return "/weather-icons/clear-day.svg";
    }
  };

  return (
    <SectionWrapper>
      <div className=" max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
        <div className="flex flex-wrap-reverse  md:grid md:grid-cols-2 gap-7">
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
            <h3 className=" text-center mt-0 mb-6 lg:text-left font-semibold text-xl ">
              {`${surfSpotName} - ${riverName}`}
            </h3>
            <div className=" justify-center lg:justify-start flex lg:flex-col gap-4">
              <div className=" flex  pl-10 relative">
                <div className=" absolute w-16 h-1.5 bg-slate-400 rotate-90 -left-5 translate-x-1.5 rounded self-center"></div>
                <div className="flex flex-col gap-1 ">
                  <span className=" font-bold text-l">
                    <span className="text-4xl">{instantFlow}</span> cfs
                  </span>
                  <span
                    className={`font-bold text-l  text-white text-center self-start py-1 px-3 rounded
                   ${
                     (conditionStatus.name === "Not Surfable" &&
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
              <div className=" flex flex-col align-top font-bold pl-4">
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
                    <span className=" text-md text-black ml-1">
                      {temperature}{" "}
                    </span>{" "}
                    <span className="text-sm ml-1 text-black">°F</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <span className=" text-md">Wind : </span>{" "}
                    <span className=" text-md text-black ml-1">{wind} </span>{" "}
                    <span className="text-sm ml-1 text-black">mph</span>
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
