import React, { useRef, useState } from "react";
import { Map } from "react-map-gl";
import { Marker, Popup } from "react-map-gl";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";
import { WeatherStatus } from "report.types";

import PageHeader from "@/components/utility/PageHeader";

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

const MyMap = () => {
  const [popUpInfo, setPopUpInfo] = useState<MapSpots | null>(null);
  return (
    <div className=" my-8">
      <div className="relative  m-auto h-[70vh] w-full max-w-screen-lg ">
        <div className=" absolute top-0 right-0 z-10 m-4 rounded bg-white p-2  ">
          <h3>St. Louis Whitewater Park</h3>
        </div>
        <Map
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
              <Image width={20} height={20} alt="yes" src="/icons/pin.png" />
            </Marker>
          ))}
          {popUpInfo && (
            <Popup
              anchor="top"
              latitude={popUpInfo.location.latitude}
              longitude={popUpInfo.location.longitude}
              onClose={() => setPopUpInfo(null)}
            >
              <div className="bg-red">{popUpInfo.name}</div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
};

export default MyMap;