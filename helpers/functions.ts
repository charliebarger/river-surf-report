import { WeatherStatus, ConditionNames } from "report.types";
import { SurfConditionStatus } from "report.types";
import { conditionBackgroundColors, conditionBorderColors } from "report.types";

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

interface ConditionRenderInfo {
  condition: SurfConditionStatus;
  colors: {
    light: conditionBackgroundColors;
    dark: conditionBorderColors;
  };
}

export const getConditions = (
  currentFlow: number,
  goodFlow: number,
  fairFlow: number
): ConditionRenderInfo => {
  if (currentFlow > goodFlow) {
    return {
      condition: "Good",
      colors: {
        light: "bg-chartGood",
        dark: "bg-chartGoodBorder",
      },
    };
  } else if (currentFlow < goodFlow && currentFlow > fairFlow) {
    return {
      condition: "Fair",
      colors: {
        light: "bg-chartFair",
        dark: "bg-chartFairBorder",
      },
    };
  } else {
    return {
      condition: "Poor",
      colors: {
        light: "bg-chartBad",
        dark: "bg-chartBadBorder",
      },
    };
  }
};

export const getSurfStatusStyles = (conditions: SurfConditionStatus) => {
  return (
    (conditions === "Poor" && "bg-chartBadBorder") ||
    (conditions === "Good" && " bg-chartGoodBorder ") ||
    (conditions === "Fair" && " bg-chartFairBorder")
  );
};
