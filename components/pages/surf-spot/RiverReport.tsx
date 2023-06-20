import { SectionWrapper } from '../../utility/SectionWrapper';
import Image from 'next/image';
import { WeatherStatus } from '../../../report.types';
import { getConditions, getImgURL } from '@/helpers/functions';

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
  const { instantFlow, wind, temperature, weatherStatus } = weatherValues;
  const imgUrl = getImgURL(weatherStatus);

  const conditionInfo = getConditions(
    instantFlow,
    conditions.goodConditions,
    conditions.fairConditions
  );

  return (
    <SectionWrapper>
      <div className=' m-auto max-w-screen-md lg:max-w-none xl:max-w-7xl'>
        <div className='flex flex-wrap  gap-7 md:grid md:grid-cols-2'>
          <div className=' m-auto aspect-[16/12] max-w-screen-sm md:m-0 md:ml-auto '>
            <Image
              src={spotImgUrl}
              alt='surf location'
              width={500}
              height={500}
              className=' h-full w-full object-cover object-center '
            />
          </div>
          <div className='flex-1'>
            <h3 className=' mt-0 mb-6 text-2xl font-semibold  '>
              {`${surfSpotName} - ${riverName}`}
            </h3>
            <div className=' flex  justify-start gap-4'>
              <div className='  flex items-baseline gap-3 text-black '>
                <div className=' relative  flex  '>
                  <div className='flex flex-col gap-1 '>
                    <span className=' whitespace-nowrap  text-xl font-bold  md:text-2xl '>
                      <span>{200}</span> cfs
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
                    <span className='whitespace-nowrap  text-xl font-bold  md:text-2xl '>
                      Sunny
                    </span>
                    <Image
                      className='relative bottom-2'
                      src={'/assets/images/weather-icons/sunny.png'}
                      alt={'weather icon'}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className='flex flex-col '>
                    <div className='flex items-baseline whitespace-nowrap text-slate-600 '>
                      <span>Temp : </span>{' '}
                      <span className=' ml-1 text-black '>96</span>
                      <span className=' self-start text-sm text-black'>°F</span>
                    </div>
                    <div className='flex items-center whitespace-nowrap text-slate-600 '>
                      <span>Wind : </span>{' '}
                      <span className='ml-1 text-black '>{100} </span>{' '}
                      <span className='ml-1 text-sm text-black '>mph</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiverReport;
