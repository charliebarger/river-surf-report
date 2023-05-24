import { WeatherStatus, RiverData, ConditionNames } from "report.types";
import { SurfConditionInfo, SurfConditionStatus } from "report.types";

export const getImgURL = (weatherStatus: WeatherStatus): string => {
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

export const getConditions = (
  currentFlow: number,
  goodFlow: number,
  fairFlow: number
): ConditionNames => {
  if (currentFlow > goodFlow) {
    return { name: "Good" };
  } else if (currentFlow < goodFlow && currentFlow > fairFlow) {
    return { name: "Fair" };
  } else {
    return { name: "Poor" };
  }
};

export const getSurfStatusStyles = (conditions: SurfConditionStatus) => {
  return (
    (conditions === "Poor" && " bg-chartBadBorder") ||
    (conditions === "Good" && " bg-chartGoodBorder ") ||
    (conditions === "Fair" && " bg-chartFairBorder")
  );
};
