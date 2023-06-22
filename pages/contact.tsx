import React from 'react';
import { useForm } from 'react-hook-form';
import { Accordion } from '@szhsin/react-accordion';
import { AccordionItem } from '@/components/utility/AccordianItem';
import PageHeader from '@/components/utility/PageHeader';
import PageSubHeader from '@/components/utility/PageSubHeader';
import GitHubSVG from '@/assets/images/github-mark.svg';
import Image from 'next/image';
import Link from 'next/link';
import FreeStickerBanner from '@/components/utility/FreeStickerBanner';

interface WaveIsNotHereForm {
  waveName: string;
  parkingAddress: string;
  state: string;
  country: string;
  goodCondition: number;
  fairCondition: number;
  flowSite: string;
  email: string;
}

interface GeneralFeedback {
  userText: string;
  email: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WaveIsNotHereForm>();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    formState: { errors: errors2 },
  } = useForm<GeneralFeedback>();

  const {
    register: register3,
    handleSubmit: handleSubmit3,
    watch: watch3,
    formState: { errors: errors3 },
  } = useForm<GeneralFeedback>();

  const wave = watch('waveName');
  return (
    <main>
      <div className='m-auto  max-w-screen-md px-5 '>
        <PageHeader>Contact</PageHeader>
        <div className='my-4 flex '>
          <div>
            <p className='mb-4'>
              We are always working to make the site better, and your feedback
              is essential to us. Click the dropdowns below if they match your
              reason for contact to fill out a custom form. If not you are also
              welcome to reach out to us directly at [email protected]. Thank
              you for your feedback!
            </p>
            <Link className='flex items-center gap-2 text-[#0CAADC] ' href='/'>
              <span>Developer? Make a pull request to add your wave!</span>
              <div className='h-5 w-5'>
                <GitHubSVG className='fill-[#0CAADC]' />
              </div>
            </Link>
          </div>
          <Image
            alt='rever otter taking notes'
            height={200}
            width={200}
            src='/construction-otter.png'
          />
        </div>

        <Accordion className='my-8 mx-auto' transition transitionTimeout={200}>
          <AccordionItem header='My Wave is Not Here'>
            <form
              className='grid grid-cols-3 gap-4 p-6'
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className='col-span-2 '>
                <label
                  htmlFor='waveName'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Wave Name
                </label>
                <input
                  {...register('waveName', {
                    required: '*This field is required',
                  })}
                  type='text'
                  id='waveName'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                />
              </div>
              <div className='col-span-3 grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                  <label
                    htmlFor='parkingAddress'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Parking Address
                  </label>
                  <input
                    {...register('parkingAddress', {
                      required: '*This field is required',
                    })}
                    type='text'
                    id='parkingAddress'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  />
                </div>
                <div className='col-span-1 '>
                  <label
                    htmlFor='state'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    State/Provinde
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
                <div className='col-span-1 '>
                  <label
                    htmlFor='country'
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
              </div>
              <div className='col-span-1 '>
                <label
                  htmlFor='goodCondition'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Good Conditions (Minumum CFS)
                </label>
                <input
                  {...register('goodCondition', {
                    required: '*This field is required',
                  })}
                  type='number'
                  id='goodCondition'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                />
              </div>
              <div className='col-span-1 '>
                <label
                  htmlFor='fairCondition'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Fair Conditions (Minumum CFS)
                </label>
                <input
                  {...register('fairCondition', {
                    required: '*This field is required',
                  })}
                  type='text'
                  id='fairCondition'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                />
              </div>
              <div className='col-span-2 '>
                <label
                  htmlFor='flowSite'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Site You Check Your Flows At
                </label>
                <input
                  {...register('flowSite')}
                  type='text'
                  id='flowSite'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                />
              </div>
              <div className='col-span-2 '>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your Email
                </label>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                />
              </div>
              <div className='col-span-3 mt-2 '>
                <button
                  type='submit'
                  className=' dark:hover:bg-[#0daadc]dark:focus:ring-blue-800 w-full rounded-lg bg-[#0daadc] px-4 py-2.5   text-center text-sm font-medium text-white hover:bg-[#0daadc] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#0daadc] sm:w-auto md:px-6'
                >
                  Submit
                </button>
              </div>
            </form>
          </AccordionItem>
          <AccordionItem
            header='Problem With The Site'
            style={{ margin: '1rem 0' }}
          >
            <form
              className='grid grid-cols-3 gap-2 p-4'
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className='col-span-full '>
                <label
                  htmlFor='flowSite'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Tell Us About The Problem
                </label>
                <textarea
                  {...register('flowSite')}
                  id=''
                  className='block h-32 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 '
                />
              </div>
              <div className='col-span-2 '>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your Email
                </label>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                />
              </div>
              <div className='col-span-3 mt-2 '>
                <button
                  type='submit'
                  className=' dark:hover:bg-[#0daadc]dark:focus:ring-blue-800 w-full rounded-lg bg-[#0daadc] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0daadc] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#0daadc] sm:w-auto'
                >
                  Submit
                </button>
              </div>
            </form>
          </AccordionItem>
          <AccordionItem header='Other' style={{ margin: '1rem 0' }}>
            <form
              className='grid grid-cols-3 gap-2 p-4'
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className='col-span-full '>
                <label
                  htmlFor='flowSite'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Message
                </label>
                <textarea
                  {...register('flowSite')}
                  id=''
                  className='block h-32 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 '
                />
              </div>
              <div className='col-span-2 '>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your Email
                </label>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                />
              </div>
              <div className='col-span-3 mt-2 '>
                <button
                  type='submit'
                  className=' dark:hover:bg-[#0daadc]dark:focus:ring-blue-800 w-full rounded-lg bg-[#0daadc] px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0daadc] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#0daadc] sm:w-auto md:px-6'
                >
                  Submit
                </button>
              </div>
            </form>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='my-10'>
        <FreeStickerBanner />
      </div>
    </main>
  );
};

export default Contact;
