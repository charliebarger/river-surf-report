import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import SubmitButton from '@/components/utility/form/SubmitButton';
import Head from 'next/head';
import FormInput from '@/components/utility/form/FormInput';

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

const FreeStickerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FreeStickersForm>();
  return (
    <form
      className=' rounded  bg-white p-6 shadow-md '
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <h2 className='mb-4 text-2xl font-semibold'>Where Do We Send Them?</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2 md:col-span-1 '>
          <FormInput
            label='First Name'
            name='firstName'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 md:col-span-1  '>
          <FormInput
            label='Last Name'
            name='lastName'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 '>
          <FormInput
            label='Email'
            name='email'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 '>
          <FormInput
            label='Address'
            name='address'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 '>
          <FormInput
            label='Apt, Suite, etc. (optional)'
            name='address2'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 md:col-span-1 '>
          <FormInput
            label='City'
            name='city'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 md:col-span-1  '>
          <FormInput
            label='State'
            name='state'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 md:col-span-1 '>
          <FormInput
            label='Zip Code'
            name='zip'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 md:col-span-1  '>
          <FormInput
            label='Country'
            name='country'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-2 mt-2 '>
          <SubmitButton text='Submit' onClick={() => {}} />
        </div>
      </div>
    </form>
  );
};

const FreeStickersPage = () => {
  return (
    <>
      <Head>
        <title>Free Stickers!</title>
        <meta
          name='description'
          content={
            'Waddup Stokers! We are giving away free stickers to anyone who wants them. Just fill out the form below and we will send you some stickers! Keep an eye out for a white envelope in your mailbox, and tag responsibly!'
          }
        />
      </Head>
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
              Waddup Stokers! We are giving away free stickers to anyone who
              wants them. Just fill out the form below and we will send you some
              stickers! Keep an eye out for a white envelope in your mailbox,
              and tag responsibly!
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
        <FreeStickerForm />
      </main>
    </>
  );
};

export default FreeStickersPage;
