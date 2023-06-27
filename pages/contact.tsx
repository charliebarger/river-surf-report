import React from 'react';
import { FieldValues, Path, useForm } from 'react-hook-form';
import { Accordion } from '@szhsin/react-accordion';
import { AccordionItem } from '@/components/utility/AccordianItem';
import { UseFormRegister } from 'react-hook-form';
import PageHeader from '@/components/utility/PageHeader';
import PageSubHeader from '@/components/utility/PageSubHeader';
import GitHubSVG from '@/assets/images/github-mark.svg';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FreeStickerBanner from '@/components/utility/FreeStickerBanner';
import FormInput from '@/components/utility/form/FormInput';
import SubmitButton from '@/components/utility/form/SubmitButton';

interface WaveIsNotHereForm {
  waveName: string;
  parkingAddress: string;
  state: string;
  country: string;
  goodCondition: number;
  fairCondition: number;
  flowSite: string;
  name: string;
  email: string;
}

const WaveISNotHereForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WaveIsNotHereForm>();

  return (
    <form
      className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:p-6'
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className='sm:col-span-2 '>
        <FormInput<WaveIsNotHereForm>
          label='Wave Name'
          name='waveName'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div
        className='
              flex
              flex-col gap-4
               sm:col-span-3 sm:grid sm:grid-cols-3'
      >
        <div className='col-span-1'>
          <FormInput<WaveIsNotHereForm>
            label='Parking Address'
            name='parkingAddress'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-1 '>
          <FormInput<WaveIsNotHereForm>
            label='State'
            name='state'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
        <div className='col-span-1 '>
          <FormInput<WaveIsNotHereForm>
            label='Country'
            name='country'
            type='text'
            register={register}
            required='*This field is required'
          />
        </div>
      </div>
      <div className='sm:col-span-2 lg:col-span-1 '>
        <FormInput<WaveIsNotHereForm>
          label='
          Good Conditions (Minumum CFS)
          '
          name='goodCondition'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='sm:col-span-2 lg:col-span-1  '>
        <FormInput<WaveIsNotHereForm>
          label='
          Fair Conditions (Minumum CFS)
          '
          name='fairCondition'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='sm:col-span-2 '>
        <FormInput<WaveIsNotHereForm>
          label='
          Site You Check Your Flows At
          '
          name='flowSite'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='sm:col-span-2'>
        <FormInput<WaveIsNotHereForm>
          label='
         Your Name
          '
          name='name'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='sm:col-span-2 '>
        <FormInput<WaveIsNotHereForm>
          label='
          Your Email
          '
          name='email'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='mt-2 sm:col-span-3 '>
        <SubmitButton text='Submit' onClick={() => {}} />
      </div>
    </form>
  );
};

interface ProblemWithSiteForm {
  problem: string;
  nameForProblem: string;
  emailForProblem: string;
}

const ProblemWithSiteForm = () => {
  const {
    register: register,
    handleSubmit: handleSubmit,
    watch: watch,
    formState: { errors: errors },
  } = useForm<ProblemWithSiteForm>();
  return (
    <form
      className='flex flex-col gap-2 p-4 sm:grid sm:grid-cols-3'
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
          {...register('problem')}
          id=''
          className='block h-32 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 '
        />
      </div>
      <div className='sm:col-span-2'>
        <FormInput
          label='Your Name'
          name='nameForProblem'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='col-span-2 '>
        <FormInput
          label='Your Email'
          name='emailForProblem'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='col-span-3 mt-2 '>
        <SubmitButton text='Submit' onClick={() => {}} />
      </div>
    </form>
  );
};

interface MessageSiteForm {
  message: string;
  nameForMessage: string;
  emailForMessage: string;
}

const OtherMessageForm = () => {
  const {
    register: register,
    handleSubmit: handleSubmit,
    watch: watch,
    formState: { errors: errors },
  } = useForm<MessageSiteForm>();
  return (
    <form
      className='flex flex-col gap-2 p-4 sm:grid sm:grid-cols-3'
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
          {...register('emailForMessage')}
          id=''
          className='block h-32 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 '
        />
      </div>
      <div className='sm:col-span-2'>
        <FormInput
          label='Your Name'
          name='nameForMessage'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='col-span-2 '>
        <FormInput
          label='Your Email'
          name='emailForMessage'
          type='text'
          register={register}
          required='*This field is required'
        />
      </div>
      <div className='col-span-3 mt-2 '>
        <SubmitButton text='Submit' onClick={() => {}} />
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us!</title>
        <meta
          name='description'
          content={
            'We are always working to make the site better, and your feedback is essential to us. Click the dropdowns below if they match your reason for contact to fill out a custom form. If not you are also welcome to reach out to us directly at [email protected]. Thank you for your feedback!'
          }
        />
      </Head>
      <main className='mb-8 lg:mb-10'>
        <div className='m-auto  max-w-screen-md px-5 '>
          <PageHeader>Contact</PageHeader>
          <div className='my-4 flex flex-col gap-4 sm:flex-row '>
            <div>
              <p className='mb-4'>
                We are always working to make the site better, and your feedback
                is essential to us. Click the dropdowns below if they match your
                reason for contact to fill out a custom form. If not you are
                also welcome to reach out to us directly at [email protected].
                Thank you for your feedback!
              </p>
              <Link className='items-center gap-2 text-sky-500 ' href='/'>
                <p>
                  Developer? Make a pull request to add your wave!{' '}
                  <GitHubSVG className='inline-block w-5 fill-sky-500 align-middle ' />
                </p>
              </Link>
            </div>
            <Image
              alt='river otter taking notes'
              height={200}
              width={200}
              src='/construction-otter.png'
              className='flex-0
            self-start
            '
            />
          </div>
          <Accordion
            className='my-8 mx-auto'
            transition
            transitionTimeout={200}
          >
            <AccordionItem header='My Wave is Not Here'>
              <WaveISNotHereForm />
            </AccordionItem>
            <AccordionItem
              header='Problem With The Site'
              style={{ margin: '1rem 0' }}
            >
              <ProblemWithSiteForm />
            </AccordionItem>
            <AccordionItem header='Other' style={{ margin: '1rem 0' }}>
              <OtherMessageForm />
            </AccordionItem>
          </Accordion>
        </div>
        <div className=' mt-8 lg:mt-10'>
          <FreeStickerBanner />
        </div>
      </main>
    </>
  );
};

export default Contact;
