import { RiverAPIReturn } from '@/helpers/API_Calls/riverData';
import Image from 'next/image';
import Link from 'next/link';
import Chart from '../chart/Chart';
import { getConditions } from '@/helpers/functions';
import { RiverData } from 'report.types';
import { PropsWithChildren } from 'react';
import WeatherDetails from './WeatherDetails';

export interface DetailedWeatherCardProps {
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
      chartData: RiverAPIReturn;
    };
  };
}

export const CardWrapper = ({ children }: PropsWithChildren) => (
  <div className='flex-1 rounded border-2 border-[#e5e7eb] bg-white  p-2 px-4 font-semibold text-[#1481BA] md:px-6 lg:py-3'>
    {children}
  </div>
);

const DetailedWeatherCard = (props: DetailedWeatherCardProps) => {
  const { locationData, riverData } = props;

  const conditionInfo = getConditions(
    riverData.flow.current,
    riverData.flow.threshold.good,
    riverData.flow.threshold.fair
  );

  return (
    <div className='rounded-lg border-2 border-[#e5e7eb] bg-white p-3 font-semibold text-[#1481BA] '>
      <div className='flex flex-wrap gap-6 '>
        <div className='flex-1'>
          <div className='border-b-2 border-b-[#e5e7eb] pb-2'>
            <Link
              className=' whitespace-nowrap text-lg '
              href={locationData.wave.url}
            >
              {locationData.wave.name}
            </Link>
            <div className='flex gap-1 whitespace-nowrap text-sm text-black '>
              <div>{locationData.state} </div>
              <span className=' text-gray-600 '>• </span>
              <div>{locationData.country}</div>
            </div>
          </div>
          <WeatherDetails
            weather={{
              temp: riverData.weather.temp,
              wind: riverData.weather.wind,
              weatherStatus: 'sunny',
            }}
            riverData={riverData}
          />
        </div>
        {riverData.flow.chartData && (
          <div className='flex aspect-[1.9/1] min-w-[300px] flex-1 items-center justify-center self-center '>
            <Chart
              chartData={riverData.flow.chartData}
              smallScreen={true}
              flowRatings={{
                goodConditions: {
                  min: 400,
                  caption: 'Good',
                  color: {
                    background: 'chartGood',
                    border: 'chartGoodBorder',
                  },
                },
                fairConditions: {
                  min: 200,
                  caption: 'Fair',
                  color: {
                    background: 'chartFair',
                    border: 'chartFairBorder',
                  },
                },
                badConditions: {
                  min: 100,
                  caption: 'Poor',
                  color: {
                    background: 'chartBad',
                    border: 'chartBadBorder',
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedWeatherCard;
