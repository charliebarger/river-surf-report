import { WeatherStatus } from "report.types";
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
