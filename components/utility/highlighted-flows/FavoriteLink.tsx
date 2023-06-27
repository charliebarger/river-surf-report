import React from 'react';
import Link from 'next/link';

const FavoriteLink = () => {
  return (
    <Link
      href={'/sign-up'}
      className='  mb-2  flex items-center rounded border-2 border-sky-500 bg-white px-4 py-2 text-base font-medium text-sky-500  hover:border-white hover:bg-sky-500 hover:text-white'
    >
      <span className=' ml-2 font-bold '>Log In To Add Favorites</span>
      <span className='ml-auto text-xl font-extrabold'>+</span>
    </Link>
  );
};

export default FavoriteLink;
