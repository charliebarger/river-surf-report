import { SectionWrapper } from '../../utility/SectionWrapper';
import Image from 'next/image';
import { WeatherStatus } from '../../../report.types';
import { getConditions, getImgURL } from '@/helpers/functions';
import WeatherDetails from '@/components/utility/WeatherDetails';
import { useState } from 'react';

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

const ShowMoreText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the "Show More" state
  const toggleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='relative'>
      <div className={`${!expanded && 'line-clamp-3'}`}>{text}</div>
      <button
        onClick={toggleShowMore}
        className=' mt-2  text-sm font-bold text-sky-500 underline  '
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const RiverReport = ({
  spotImgUrl,
  surfSpotName,
  riverName,
  weatherValues,
  conditions,
}: riverReportProps) => {
  const { instantFlow, weatherStatus } = weatherValues;

  const conditionInfo = getConditions(
    instantFlow,
    conditions.goodConditions,
    conditions.fairConditions
  );

  return (
    <>
      <div className='m-auto mb-4 max-w-screen-md pt-6 lg:max-w-none xl:max-w-7xl'>
        <div className=' mb-4 flex gap-2 pl-2 font-semibold'>
          <div className='w-2 rounded-full bg-red-500 ' />
          <div className='flex flex-col'>
            <h1 className=' text-2xl'>{surfSpotName}</h1>
            <h2 className=' text-lg text-gray-600 '>{riverName}</h2>
          </div>
        </div>

        <div className='flex flex-wrap md:grid md:grid-cols-2 md:gap-7'>
          <div className=' m-auto aspect-[16/12] w-full md:m-0 md:ml-auto md:max-w-screen-md '>
            <Image
              src={spotImgUrl}
              alt={`A picture of ${surfSpotName} on the ${riverName}`}
              width={500}
              height={500}
              className=' h-full w-full object-cover object-center '
            />
          </div>
          <div className='p-2'>
            <ShowMoreText
              text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam
            quam accusantium numquam debitis odio in fugit ut ab, quidem quod
            magni est obcaecati sit id blanditiis tempora quisquam, ratione
            voluptatibus consequatur excepturi? Impedit quos explicabo atque
            nulla temporibus nihil vitae eos pariatur amet voluptatibus
            voluptates magnam odio, quasi deserunt?'
            />
          </div>

          {/* <div className='flex-1'>
            <WeatherDetails
              weather={{
                temp: weatherValues.temperature,
                wind: weatherValues.wind,
                weatherStatus: 'hail',
              }}
              riverData={{
                flow: {
                  current: instantFlow,
                  threshold: {
                    fair: conditions.fairConditions,
                    good: conditions.goodConditions,
                  },
                },
              }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RiverReport;
