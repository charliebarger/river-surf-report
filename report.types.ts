import { RiverAPIReturn } from "./helpers/API_Calls/riverData";
export type WeatherStatus = "windy" | "rain" | "sunny" | "snow" | "hail";

export interface TopFlows {
  waveName: string;
  countryFlag: string;
  urlParam: string;
  flows: {
    current: number;
    good: number;
    fair: number;
  };
}

export interface RiverData {
  riverName: string;
  surfSpot: string;
  riverDescription: string;
  imgUrl: string;
  environmentInfo: {
    chartData: RiverAPIReturn;
    flowRatings: FlowRatings;
    weatherValues: {
      instantFlow: number;
      wind: number;
      temperature: number;
      lowTemp: number;
      highTemp: number;
      weatherStatus: WeatherStatus;
    };
  };
  locationInfo: {
    googleMapsID: string;
    parkingSpotName: string;
    address: string;
  };
  surfReport: {
    reporter: Reporter;
    reportInfo: Report;
  };
}

interface Reporter {
  img: string;
  name: string;
  description: string;
}

interface Report {
  report: string;
  date: string;
}

export interface ConditionNames {
  name: SurfConditionStatus;
}

export interface ReportWithConditions extends Report {
  surfConditions: ConditionNames;
}

export interface SurfReport {
  reporter: Reporter;
  report: Report;
}

export interface FlowRatings {
  fairConditions: number;
  goodConditions: number;
  badConditions: number;
}

export interface SurfConditions<T, K> {
  min: number;
  caption: SurfConditionStatus;
  color: {
    background: T;
    border: K;
  };
}

export interface SurfConditionInfo {
  fairConditions: SurfConditions<BackgroundFair, BorderFair>;
  goodConditions: SurfConditions<BackgroundGood, BorderGood>;
  badConditions: SurfConditions<BackgroundBad, BorderBad>;
}

type BorderBad = "chartBadBorder";
type BackgroundBad = "chartBad";

type BorderGood = "chartGoodBorder";
type BackgroundGood = "chartGood";

type BorderFair = "chartFairBorder";
type BackgroundFair = "chartFair";

export type Backgrounds = BackgroundBad | BackgroundGood | BackgroundFair;
export type Borders = BorderBad | BorderFair | BorderGood;

export type conditionBackgroundColors =
  | "bg-chartBad"
  | "bg-chartGood"
  | "bg-chartFair";
export type conditionBorderColors =
  | "bg-chartBadBorder"
  | "bg-chartGoodBorder"
  | "bg-chartFairBorder";

export type SurfConditionStatus = "Good" | "Fair" | "Poor";
