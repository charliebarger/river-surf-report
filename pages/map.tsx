import React, { useRef, useState } from "react";
import {
  Map,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import Image from "next/image";
import { getConditions } from "@/helpers/functions";
import "mapbox-gl/dist/mapbox-gl.css";
import { WeatherStatus } from "report.types";
import Link from "next/link";
import CloseSVG from "@/assets/images/close.svg";
import { CardWrapper } from "@/components/utility/DetailedWeatherCard";

interface MapSpots {
  name: string;
  url: string;
  flows: {
    current: number;
    good: number;
    fair: number;
  };
  location: {
    longitude: number;
    latitude: number;
    address: string;
  };
  weather: {
    status: WeatherStatus;
    temp: number;
    wind: number;
  };
}

const riverSurfSpotsUSA: MapSpots[] = [
  {
    name: "Bend Whitewater Park",
    url: "https://www.example.com/bend-whitewater-park",
    flows: { current: 7, good: 8, fair: 6 },
    location: {
      longitude: -121.32,
      latitude: 44.042,
      address: "166 SW Shevlin Hixon Dr, Bend, OR 97702, USA",
    },
    weather: { status: "hail", temp: 19, wind: 8 },
  },
  {
    name: "Bono",
    url: "https://www.example.com/bono",
    flows: { current: 6, good: 7, fair: 5 },
    location: {
      longitude: -90.721,
      latitude: 35.957,
      address: "Bono, AR 72416, USA",
    },
    weather: { status: "rain", temp: 25, wind: 4 },
  },
  {
    name: "Boise Whitewater Park",
    url: "https://www.example.com/boise-whitewater-park",
    flows: { current: 8, good: 9, fair: 7 },
    location: {
      longitude: -116.209,
      latitude: 43.601,
      address: "355 Julia Davis Dr, Boise, ID 83702, USA",
    },
    weather: { status: "rain", temp: 18, wind: 6 },
  },
  {
    name: "St. Louis Whitewater Park",
    url: "https://www.example.com/st-louis-whitewater-park",
    flows: { current: 7, good: 8, fair: 6 },
    location: {
      longitude: -90.192,
      latitude: 38.612,
      address: "118 Wharf St, St Charles, MO 63301, USA",
    },
    weather: { status: "windy", temp: 22, wind: 10 },
  },
];

interface PopupInfoData {
  locationData: {
    wave: {
      name: string;
      url: string;
    };
    state: string;
    stateUrL: string;
    country: string;
    countryUrl: string;
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
    };
  };
}

const examplePopupInfo: PopupInfoData = {
  locationData: {
    wave: {
      name: "St. Louis Whitewater Park",
      url: "/st-louis-whitewater-park",
    },
    state: "Missouri",
    stateUrL: "/missouri",
    country: "United States",
    countryUrl: "/usa",
  },
  riverData: {
    weather: {
      temp: 69,
      wind: 12,
    },
    flow: {
      current: 100,
      threshold: {
        fair: 80,
        good: 110,
      },
    },
  },
};

interface PopupInfoProps {
  handleClosePopup: () => void;
}

const PopupInfo = ({ handleClosePopup }: PopupInfoProps) => {
  const conditionInfo = getConditions(
    examplePopupInfo.riverData.flow.current,
    examplePopupInfo.riverData.flow.threshold.good,
    examplePopupInfo.riverData.flow.threshold.fair
  );

  return (
    <CardWrapper>
      <div>
        <div className="flex justify-between border-b-2 border-b-[#e5e7eb] pb-2">
          <div>
            <Link
              className=" whitespace-nowrap "
              href={examplePopupInfo.locationData.wave.url}
            >
              {examplePopupInfo.locationData.wave.name}
            </Link>
            <div className="flex gap-1 whitespace-nowrap text-xs text-black  ">
              <Link
                href={examplePopupInfo.locationData.stateUrL}
                className=" hover:underline "
              >
                {examplePopupInfo.locationData.state}{" "}
              </Link>
              <span className=" text-gray-600 ">• </span>
              <Link
                href={examplePopupInfo.locationData.countryUrl}
                className="hover:underline"
              >
                {examplePopupInfo.locationData.country}
              </Link>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close popup"
            className="w-8 fill-gray-400 hover:fill-gray-600 "
            onClick={handleClosePopup}
          >
            <CloseSVG />
          </button>
        </div>
        <div>
          <h2 className="my-2 text-xl text-black ">Current Conditions</h2>
          <div className="  flex justify-around gap-3 text-black">
            <div className=" relative flex">
              <div className="flex flex-col gap-1 ">
                <span className=" whitespace-nowrap text-base  font-medium md:text-lg ">
                  <span className=" text-2xl  md:text-4xl">
                    {examplePopupInfo.riverData.flow.current}
                  </span>{" "}
                  cfs
                </span>
                <span
                  className={`self-start rounded ${conditionInfo.colors.dark}  w-full py-1 px-3 text-center text-sm font-bold text-white md:text-lg`}
                >
                  {conditionInfo.condition}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <Image
                src={"/assets/images/weather-icons/sunny.png"}
                alt={"weather icon"}
                style={{ height: "60px", width: "60px" }}
                width={80}
                height={80}
              />

              <div className=" flex flex-col align-top font-bold ">
                <div className="flex items-center  gap-1">
                  <span className=" text-lg md:text-xl ">Sunny</span>
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center whitespace-nowrap text-slate-600 ">
                    <span className=" md:text-md text-sm">Temp : </span>{" "}
                    <span className="md:text-md ml-1 text-sm text-black">
                      96
                    </span>{" "}
                    <span className="text-xm ml-1 text-black md:text-sm">
                      °F
                    </span>
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
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2 text-base lg:flex-row ">
        <Link
          href="/"
          className=" flex h-full cursor-pointer rounded-md border-2 border-gray-200 bg-gray-100 py-1  px-8 font-medium text-black  hover:bg-gray-200  "
        >
          View Full Report
        </Link>
        <Link
          href="/"
          className=" flex h-full cursor-pointer rounded-md border-2 border-[#089f85] bg-[#069f85]  py-1 px-8 font-medium text-white  hover:bg-white hover:text-[#089f85] "
        >
          Add To Favorites
        </Link>
      </div>
    </CardWrapper>
  );
};

const MyMap = () => {
  const [popUpInfo, setPopUpInfo] = useState<MapSpots | null>(null);
  const [hoverdItem, setHoverdItem] = useState<MapSpots | null>(null);
  return (
    <div className=" m-4 overflow-hidden rounded-lg md:m-8">
      <div className="relative  m-auto h-[70vh] w-full max-w-screen-lg ">
        <Map
          onRender={(event) => event.target.resize()}
          onClick={() => setPopUpInfo(null)}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
          initialViewState={{
            latitude: 40,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          mapStyle="mapbox://styles/mapbox/navigation-day-v1"
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />

          {riverSurfSpotsUSA.map((spot, i) => (
            <Marker
              style={{ cursor: "pointer" }}
              key={spot.location.latitude + spot.location.longitude}
              longitude={spot.location.longitude}
              latitude={spot.location.latitude}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopUpInfo(spot);
                console.log(spot);
              }}
            >
              <Image
                onMouseEnter={() => setHoverdItem(spot)}
                onMouseLeave={() => setHoverdItem(null)}
                width={20}
                height={20}
                alt="yes"
                src={
                  spot === popUpInfo
                    ? "/icons/map/bluePin.png"
                    : "/icons/map/redPin.png"
                }
              />
            </Marker>
          ))}
          {hoverdItem && (
            <Popup
              anchor="bottom"
              offset={15}
              closeButton={false}
              latitude={hoverdItem.location.latitude}
              longitude={hoverdItem.location.longitude}
              onClose={() => setPopUpInfo(null)}
            >
              <div className=" rounded-full bg-slate-800 py-1 px-2 font-medium text-white ">
                {hoverdItem.name}
              </div>
            </Popup>
          )}
          {popUpInfo && (
            <div className=" absolute right-0 top-0 z-10 w-full max-w-md p-2 text-lg ">
              <PopupInfo handleClosePopup={() => setPopUpInfo(null)} />
            </div>
          )}
        </Map>
      </div>
    </div>
  );
};

export default MyMap;
