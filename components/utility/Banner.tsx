import React from 'react';

const Banner = ({ title, body }: { title: string; body: string }) => {
  return (
    <section className=' flex-1 border-y-2 border-primaryColor  bg-slate-200 p-4  py-6 text-left md:p-6'>
      <div className='m-auto max-w-screen-md'>
        <h3 className='mb-4 text-xl font-semibold lg:mt-0'>{title}</h3>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Banner;
