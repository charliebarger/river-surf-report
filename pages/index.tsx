import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuickInfoCard from '@/components/utility/QuickInfoCard';
import Head from 'next/head';
import { TopFlows } from 'report.types';

//favorites still needs to be implemented

const Index = ({ topFlows }: { topFlows: TopFlows[] }) => {
  return (
    <main className='mb-8  px-4  md:px-6 lg:mb-10 '>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta
          name='description'
          content='Discover the latest river surf reports and explore exciting new waves with Surf Otter. Get detailed information on wave conditions, weather, and more for the best river surf spots. Plan your next river surf session with our comprehensive app. Catch the perfect wave now!'
        />
      </Head>
      <div className='smax-w-screen-xl relative m-auto my-6 text-center font-semibold md:my-10 '>
        <h1 className='text-5xl text-primaryColor'>Surf Otter</h1>
        <h2 className='text-xl text-primaryColor'>River Surf Reports</h2>
      </div>
      <section className='m-auto my-6  mx-auto  flex max-w-screen-xl flex-col gap-4 md:my-10 lg:flex-row lg:gap-6 '>
        <div className=' flex-1 '>
          <div className=' relative aspect-video'>
            <Image
              src={'/river-surf-welcome.png'}
              alt={'An Otter, the river surf site mascot, riding a wave'}
              fill
              style={{ objectFit: 'contain' }}
              sizes='(max-width: 976px) 100vw,
              50vw'
            />
          </div>
        </div>
        <div className=' flex-1'>
          <div>
            <h3 className='mb-2 pb-1 text-xl font-bold '>Favorites</h3>
            <Link
              href={'/sign-up'}
              className='  mb-2  flex items-center rounded border-2 border-[#0CAADC] bg-white px-4 py-2 text-base font-medium text-[#0CAADC] hover:border-white hover:bg-[#0CAADC] hover:text-white'
            >
              <span className=' ml-2 font-bold '>Log In To Add Favorites</span>
              <span className='ml-auto text-xl font-extrabold'>+</span>
            </Link>
          </div>
          <h3 className=' mt-4 mb-2 pb-1 text-xl font-bold '>Top Flows</h3>
          {topFlows.map(({ waveName, flows, countryFlag, urlParam }) => (
            <QuickInfoCard
              key={urlParam}
              waveName={waveName}
              flows={flows}
              countryFlag={countryFlag}
              urlParam={urlParam}
            />
          ))}
        </div>
      </section>
      <section className='m-auto my-6 mx-auto flex max-w-screen-xl flex-col gap-4 md:my-10 lg:flex-row lg:gap-6'>
        <div className='flex-1'>
          <h3 className='mb-4 text-3xl font-semibold text-primaryColor '>
            Discover New Waves and Surf Reports
          </h3>
          <div className=' text-lg '>
            <p className='mb-2'>
              Check out our{' '}
              <Link className='text-[#0CAADC] underline' href='/explore'>
                Explore
              </Link>{' '}
              and{' '}
              <Link className='text-[#0CAADC] underline' href='/map'>
                Map
              </Link>{' '}
              pages to find exciting new river waves and stay updated with the
              latest surf reports. Explore the best river surf spots and get
              detailed information about wave conditions, weather, and more.
              Whether you&#x27;re a beginner or an experienced surfer, our app
              has you covered with the latest information to help you plan your
              next river surf session. Get started now and catch the perfect
              wave!
            </p>
          </div>
        </div>
        <div className='flex-[2]'>
          <div className='aspect-video  w-full overflow-hidden lg:aspect-auto lg:h-[384px]  '>
            <Image
              src={'/river-run-map.png'}
              alt='Map of River Run Park'
              width={917}
              height={384}
              className=' h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </section>
      <section className='m-auto mx-auto  mt-6  flex max-w-screen-xl flex-col-reverse gap-4 md:mt-10 lg:flex-row lg:gap-6'>
        <figure className='flex flex-[2] flex-col '>
          <div className='aspect-video  w-full overflow-hidden lg:aspect-auto lg:h-[384px]  '>
            <Image
              src={'/jake_voss.jpg'}
              alt='Map of River Run Park'
              width={917}
              height={384}
              className=' h-full w-full object-cover object-center'
            />
          </div>
          <figcaption className='mt-2 font-medium'>
            Photo by Jake Voss
          </figcaption>
        </figure>
        <div className='flex-1'>
          <h3 className='mb-4 text-3xl font-semibold text-primaryColor'>
            Can&#x27;t Find the Wave You&#x27;re Looking For?
          </h3>
          <div className=' text-lg'>
            <p className='mb-2'>
              If you&#x27;re having trouble finding the wave you are looking
              for, or if you encounter any issues while using our site, we want
              to hear from you! We&#x27;re constantly working to improve our
              site and add new waves to our database.
            </p>
            <p>
              Please don&#x27;t hesitate to{' '}
              <Link className='text-[#0CAADC] underline' href='/contact'>
                contact us
              </Link>{' '}
              and let us know about any problems or suggestions you may have.
              Your feedback is invaluable in helping us provide the best
              possible experience for our users.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

export async function getServerSideProps() {
  const topFlows: TopFlows[] = [
    {
      waveName: 'Munich City Wave',
      countryFlag: '🇩🇪',
      urlParam: 'munich-city-wave',
      flows: {
        current: 300,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'Bend Whitewater Park',
      countryFlag: '🇺🇸',
      urlParam: 'bend-whitewater-park',
      flows: {
        current: 100,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'Habitat 67 Wave',
      countryFlag: '🇨🇦',
      urlParam: 'habitat-67-wave',
      flows: {
        current: 100,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'River Arno Wave',
      countryFlag: '🇮🇹',
      urlParam: 'river-arno-wave',
      flows: {
        current: 150,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'Sevilla Wave',
      countryFlag: '🇪🇸',
      urlParam: 'sevilla-wave',
      flows: {
        current: 100,
        good: 200,
        fair: 100,
      },
    },
  ];

  return {
    props: {
      topFlows,
    },
  };
}
