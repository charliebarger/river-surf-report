import React from 'react';
import { useForm } from 'react-hook-form';
import { Accordion } from '@szhsin/react-accordion';
import { AccordionItem } from '@/components/utility/AccordianItem';

interface ContactForm {
  waveName: string;
  parkingAddress: string;
  state: string;
  country: string;
  goodCondition: number;
  fairCondition: number;
  flowSite: string;
  other: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactForm>();
  const wave = watch('waveName');
  return (
    <main className='m-auto my-8 max-w-screen-md px-5'>
      <Accordion transition transitionTimeout={200}>
        <AccordionItem header='Select your goals'>
          <form
            className='grid grid-cols-3 gap-4 p-4'
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <div className='col-span-3 mb-6'>
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
            <div className='col-span-1 mb-6'>
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
            <div className='col-span-1 mb-6'>
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
            <div className='col-span-1 mb-6'>
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
                required
              />
            </div>
            <div className='col-span-1 mb-6'>
              <label
                htmlFor='goodCondition'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Good Conditions
              </label>
              <input
                {...register('goodCondition', {
                  required: '*This field is required',
                })}
                type='number'
                id='goodCondition'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                required
              />
            </div>
            <div className='col-span-1 mb-6'>
              <label
                htmlFor='fairCondition'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Fair Conditions
              </label>
              <input
                {...register('fairCondition', {
                  required: '*This field is required',
                })}
                type='text'
                id='fairCondition'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                required
              />
            </div>
            <div className='col-span-2 mb-6'>
              <label
                htmlFor='flowSite'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Site You Check Your Flows At
              </label>
              <input
                {...register('flowSite')}
                type='number'
                id='flowSite'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                required
              />
            </div>
            <div className='col-span-3'>
              <button
                type='submit'
                className=' w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
              >
                Submit
              </button>
            </div>
          </form>
        </AccordionItem>
        <AccordionItem header='Select your goals' style={{ margin: '1rem 0' }}>
          <form
            className='grid grid-cols-3 gap-2 p-4'
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <label className='flex '>
              <span className='flex-1'>Wave Name</span>
              <input
                className='flex-1 py-1 px-2'
                {...register('waveName', { required: 'This is requires' })}
              />
            </label>
            <input
              className='py-1 px-2'
              {...register('parkingAddress', { required: 'This is requires' })}
              placeholder='Parking Address'
            />
            <input
              className='py-1 px-2'
              {...register('state', { required: 'This is requires' })}
              placeholder='Province/State'
            />
            <input
              className='py-1 px-2'
              {...register('country', { required: 'This is requires' })}
              placeholder='Country'
            />
            <input
              className='py-1 px-2'
              {...register('goodCondition')}
              placeholder='Good'
              type='number'
            />
            <input
              className='py-1 px-2'
              {...register('fairCondition')}
              placeholder='Fair'
              type='number'
            />
            <input
              className='py-1 px-2'
              {...register('flowSite')}
              placeholder='Site you Check your Flows at'
            />
            <textarea
              className='py-1 px-2'
              {...register('other')}
              placeholder='Other'
            />
            <input className='py-1 px-2' type='submit' value='Submit' />
          </form>
        </AccordionItem>
        <AccordionItem header='Select your goals'>
          <form
            className='grid grid-cols-3 gap-2 p-4'
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <label className='flex '>
              <span className='flex-1'>Wave Name</span>
              <input
                className='flex-1 py-1 px-2'
                {...register('waveName', { required: 'This is requires' })}
              />
            </label>
            <input
              className='py-1 px-2'
              {...register('parkingAddress', { required: 'This is requires' })}
              placeholder='Parking Address'
            />
            <input
              className='py-1 px-2'
              {...register('state', { required: 'This is requires' })}
              placeholder='Province/State'
            />
            <input
              className='py-1 px-2'
              {...register('country', { required: 'This is requires' })}
              placeholder='Country'
            />
            <input
              className='py-1 px-2'
              {...register('goodCondition')}
              placeholder='Good'
              type='number'
            />
            <input
              className='py-1 px-2'
              {...register('fairCondition')}
              placeholder='Fair'
              type='number'
            />
            <input
              className='py-1 px-2'
              {...register('flowSite')}
              placeholder='Site you Check your Flows at'
            />
            <textarea
              className='py-1 px-2'
              {...register('other')}
              placeholder='Other'
            />
            <input className='py-1 px-2' type='submit' value='Submit' />
          </form>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Contact;
