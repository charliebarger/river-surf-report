import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FreeStickerBanner = () => {
  return (
    <section
      className='flex-1 border-y-2 border-primaryColor bg-slate-200 p-10 py-6 text-left'
      style={{
        backgroundColor: ' #00DBDE',
        backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
      }}
    >
      <Link
        href={'/store/free-stickers'}
        className=' bg- flex flex-col items-center gap-2
          '
      >
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
          Free Stickers!
        </h2>

        <div className=' rounded-full border-8 border-black bg-white p-8 '>
          <Image
            alt='rever otter taking notes'
            height={100}
            width={100}
            src='/construction-otter.png'
          />
        </div>
        <span className='font-semibold'>Click Here To Get Yours</span>
      </Link>
    </section>
  );
};

export default FreeStickerBanner;
