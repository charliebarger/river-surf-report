import { SectionWrapper } from '../../utility/SectionWrapper';
import Image from 'next/image';
import { WeatherStatus } from '../../../report.types';
import { getConditions, getImgURL } from '@/helpers/functions';
import DetailedWeatherCard from '@/components/utility/DetailedWeatherCard';
import WeatherDetails from '@/components/utility/WeatherDetails';

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
  const { instantFlow, weatherStatus } = weatherValues;

  const conditionInfo = getConditions(
    instantFlow,
    conditions.goodConditions,
    conditions.fairConditions
  );

  return (
    <SectionWrapper>
      <div className=' m-auto max-w-screen-md lg:max-w-none xl:max-w-7xl'>
        <div className='flex flex-wrap gap-5  md:grid md:grid-cols-2 md:gap-7'>
          <div className=' m-auto aspect-[16/12] w-full md:m-0 md:ml-auto md:max-w-screen-md '>
            <Image
              src={spotImgUrl}
              alt={`A picture of ${surfSpotName} on the ${riverName}`}
              width={500}
              height={500}
              className=' h-full w-full object-cover object-center '
            />
          </div>
          <div className='flex-1'>
            <div className='flex'>
              <h2 className=' mt-0 mb-4 border-b-2 border-gray-300 pb-1 text-xl font-semibold lg:text-2xl  '>
                {`${surfSpotName} - ${riverName}`}
              </h2>
            </div>
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
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiverReport;
