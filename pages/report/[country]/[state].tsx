import React from 'react';
import Head from 'next/head';
import Header from '@/components/utility/Header';
import Image from 'next/image';
import Chart from '@/components/report/chart/Chart';
import PageHeader from '@/components/utility/PageHeader';
import { SectionWrapper } from '@/components/utility/SectionWrapper';
import Link from 'next/link';

const CountryPage = () => {
  return (
    <>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta name='description' content='The heart of River Surfing!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='m-auto max-w-5xl'>
        <section className=' my-8  px-5'>
          <div>
            <h1 className=' my-8 relative font-semibold text-3xl mb-0'>
              Colorado
            </h1>
            <h2 className=' text-lg font-semibold text-[#1481BA]'>
              United States
            </h2>
          </div>
        </section>
        <section className=' my-8  px-5 m-auto'>
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className=' bg-white py-3 px-5 font-semibold text-[#1481BA] border-2 border-[#e5e7eb] rounded  max-w-[980px] m-auto mb-6 '
              >
                <div className='flex flex-wrap gap-6 '>
                  <div className='flex-1'>
                    <div className='pb-2 border-b-2 border-b-[#e5e7eb]'>
                      <Link href={'/'}>River Run Park</Link>
                      <div className='text-xs'>
                        <Link href={''}>Colorado </Link>
                        <span className=' text-gray-600 '>• </span>
                        <Link href={''}>United States</Link>
                      </div>
                    </div>
                    <div className='flex  gap-3 mt-4 text-black '>
                      <div className=' flex relative'>
                        <div className='flex flex-col gap-1 '>
                          <span className=' font-bold text-base  md:text-l whitespace-nowrap '>
                            <span className=' text-2xl  md:text-4xl'>321</span>{' '}
                            cfs
                          </span>
                          <span
                            className={`font-bold text-sm md:text-lg  text-white text-center self-start py-1 px-3 rounded bg-chartGoodBorder`}
                          >
                            Good
                          </span>
                        </div>
                      </div>
                      <div className=' flex flex-col align-top font-bold pl-4'>
                        <div className='flex items-center'>
                          <span className=' text-lg md:text-xl '>Weather</span>
                          <Image
                            src={'/weather-icons/clear-day.svg'}
                            alt={'weather icon'}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className='flex flex-col '>
                          <div className='flex items-center text-slate-600 whitespace-nowrap '>
                            <span className=' text-sm md:text-md'>Temp : </span>{' '}
                            <span className='text-sm md:text-md text-black ml-1'>
                              96
                            </span>{' '}
                            <span className='text-xm md:text-sm ml-1 text-black'>
                              °F
                            </span>
                          </div>
                          <div className='flex items-center text-slate-600 whitespace-nowrap '>
                            <span className=' text-sm md:text-md'>Wind : </span>{' '}
                            <span className=' text-sm md:text-md text-black ml-1'>
                              {100}{' '}
                            </span>{' '}
                            <span className='text-xs md:text-sm ml-1 text-black'>
                              mph
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 min-w-[50%] aspect-[1.9/1] flex justify-center items-center '>
                    <Chart
                      usgsID='06710247'
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
                          caption: 'Not Surfable',
                          color: {
                            background: 'chartBad',
                            border: 'chartBadBorder',
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default CountryPage;
