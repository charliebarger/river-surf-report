import { SectionWrapper } from "../../utility/SectionWrapper";
import Image from "next/image";
import { WeatherStatus } from "../../../report.types";
import {
  getConditions,
  getImgURL,
  getSurfStatusStyles,
} from "@/helpers/functions";
import { ConditionNames, SurfConditionStatus } from "../../../report.types";

export interface riverReportProps {
  spotImgUrl: string;
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
  conditions: {
    flow: number;
    goodConditions: number;
    fairConditions: number;
  };
}

const RiverReport = ({
  spotImgUrl,
  surfSpotName,
  riverName,
  weatherValues,
  conditions,
}: riverReportProps) => {
  const { instantFlow, wind, temperature, weatherStatus } = weatherValues;
  const imgUrl = getImgURL(weatherStatus);

  const conditionInfo = getConditions(
    instantFlow,
    conditions.goodConditions,
    conditions.fairConditions
  );

  return (
    <SectionWrapper>
      <div className=" m-auto max-w-screen-md lg:max-w-none xl:max-w-7xl">
        <div className="flex flex-wrap-reverse  gap-7 md:grid md:grid-cols-2">
          <div className="m-auto">
            <Image
              src={spotImgUrl}
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
                   ${conditionInfo.colors.dark}`}
                  >
                    {conditionInfo.condition}
                  </span>
                </div>
              </div>
              <div className=" flex flex-col pl-4 align-top font-bold">
                <div className="flex items-center">
                  <span className="text-xl">Weather</span>
                  <Image
                    src={imgUrl}
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
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiverReport;
