import React from 'react';
import { getConditions, getImgURL } from '@/helpers/functions';
import Image from 'next/image';
import { WeatherStatus } from 'report.types';

interface WeatherDetailsProps {
  weather: {
    temp: number;
    wind: number;
    weatherStatus: WeatherStatus;
  };
  riverData: {
    flow: {
      current: number;
      threshold: {
        fair: number;
        good: number;
      };
    };
  };
}

const WeatherDetails = ({ riverData, weather }: WeatherDetailsProps) => {
  const conditionInfo = getConditions(
    riverData.flow.current,
    riverData.flow.threshold.good,
    riverData.flow.threshold.fair
  );

  const imgURL = getImgURL(weather.weatherStatus);

  return (
    <div className='mt-4  flex items-baseline gap-3 text-black  '>
      <div className=' relative flex'>
        <div className='flex flex-col gap-1 '>
          <span className=' whitespace-nowrap  text-xl font-bold  md:text-2xl '>
            <span>{riverData.flow.current}</span> cfs
          </span>
          <span
            className={`self-start rounded ${conditionInfo.colors.dark}   py-1 px-3 text-center text-lg font-bold text-white md:text-xl`}
          >
            {conditionInfo.condition}
          </span>
        </div>
      </div>
      <div className=' flex flex-col pl-4 align-top font-bold'>
        <div className='flex items-center  gap-1'>
          <span className='whitespace-nowrap  text-xl font-bold  capitalize md:text-2xl '>
            {weather.weatherStatus}
          </span>
          <Image
            className='relative bottom-2'
            src={imgURL}
            alt={'weather icon'}
            width={30}
            height={30}
          />
        </div>
        <div className='flex flex-col '>
          <div className='flex items-baseline whitespace-nowrap text-slate-600 '>
            <span>Temp : </span>{' '}
            <span className=' ml-1 text-black '>{weather.temp}</span>
            <span className=' self-start text-sm text-black'>°F</span>
          </div>
          <div className='flex items-center whitespace-nowrap text-slate-600 '>
            <span>Wind : </span>{' '}
            <span className='ml-1 text-black '>{weather.wind} </span>{' '}
            <span className='ml-1 text-sm text-black '>mph</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
