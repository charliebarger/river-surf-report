import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import SubmitButton from '@/components/utility/SubmitButton';

interface FreeStickersForm {
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email: string;
}

const FreeStickersPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FreeStickersForm>();
  return (
    <main className='m-auto mb-8  max-w-screen-md px-4 md:px-6 lg:mb-10'>
      <div className='my-10 flex flex-col items-center justify-center gap-4'>
        <div>
          <h1
            className=' mb-2 text-4xl font-semibold '
            style={{
              backgroundImage:
                'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {' '}
            Claim Your Free Stickers!
          </h1>
          <p>
            Waddup Stokers! We are giving away free stickers to anyone who wants
            them. Just fill out the form below and we will send you some
            stickers! Keep an eye out for a white envelope in your mailbox, and
            tag responsibly!
          </p>
        </div>
        <div className=' w-48 flex-shrink-0 rounded-full border-8 border-black bg-white p-8 '>
          <Image
            alt='river otter taking notes'
            height={150}
            width={150}
            src='/construction-otter.png'
          />
        </div>
      </div>
      <div>
        <form
          className=' rounded  bg-white p-6 shadow-md '
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <h3 className='mb-4 text-2xl font-semibold'>Where Do We Send It?</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 md:col-span-1 '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                First Name
              </label>
              <input
                {...register('firstName', {
                  required: '*This field is required',
                })}
                type='text'
                id='firstName'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 md:col-span-1  '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Last Name
              </label>
              <input
                {...register('lastName', {
                  required: '*This field is required',
                })}
                type='text'
                id='lastName'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Email
              </label>
              <input
                {...register('email', {
                  required: '*This field is required',
                })}
                type='text'
                id='email'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Street Address
              </label>
              <input
                {...register('address', {
                  required: '*This field is required',
                })}
                type='text'
                id='address'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Apt, Suite, etc. (optional)
              </label>
              <input
                {...register('address2', {
                  required: '*This field is required',
                })}
                type='text'
                id='address2'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 md:col-span-1 '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                City
              </label>
              <input
                {...register('city', {
                  required: '*This field is required',
                })}
                type=''
                id='city'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 md:col-span-1  '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                State
              </label>
              <input
                {...register('state', {
                  required: '*This field is required',
                })}
                type='text'
                id='state'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 md:col-span-1 '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Zip
              </label>
              <input
                {...register('zip', {
                  required: '*This field is required',
                })}
                type='text'
                id='zip'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>
            <div className='col-span-2 md:col-span-1  '>
              <label
                htmlFor='waveName'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Country
              </label>
              <input
                {...register('country', {
                  required: '*This field is required',
                })}
                type='text'
                id='country'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              />
            </div>

            <div className='col-span-2 mt-2 '>
              <SubmitButton text='Submit' onClick={() => {}} />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FreeStickersPage;
