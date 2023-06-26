import React from 'react';
import { SectionWrapper } from '../../utility/SectionWrapper';
import PageSubHeader from '../../utility/PageSubHeader';

interface locationInfoProps {
  locationData: {
    parkingSpotName: string;
    address: string;
    googleMapsID: string;
  };
}

const LocationInfo = ({ locationData }: locationInfoProps) => {
  const { parkingSpotName, address, googleMapsID } = locationData;
  return (
    <SectionWrapper>
      <div className='m-auto max-w-screen-md lg:max-w-none xl:max-w-7xl'>
        <PageSubHeader>Location</PageSubHeader>
        <div className=' gap-3 lg:container lg:m-auto lg:grid lg:max-w-screen-lg lg:grid-cols-2'>
          <div className=' pb-3 text-left'>
            <h3 className=' text-md font-bold'>{parkingSpotName}</h3>
            <address>{address}</address>
          </div>
          <div className=' m-auto aspect-video w-full lg:aspect-square '>
            <iframe
              title={`Google Map pointing to the location of ${address}`}
              className=' h-full w-full'
              src={`https://www.google.com/maps/embed?${googleMapsID}`}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LocationInfo;
