import { render, screen } from '@testing-library/react';
import LocationInfo from '@/components/pages/surf-spot/LocationInfo';

describe('Location Info', () => {
  beforeEach(() => {
    render(
      <LocationInfo
        locationData={{
          parkingSpotName: 'Mcdonalds Parking Lot',
          address: '321 satellite beach, FL',
          googleMapsID:
            'pb=!1m18!1m12!1m3!1d98246.44797771022!2d-105.26977194489798!3d39.69017321780344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c80126f0d1b23%3A0xc03c2683cfdf7ba0!2sRiver%20Run%20Park!5e0!3m2!1sen!2sus!4v1667866269435!5m2!1sen!2sus',
        }}
      />
    );
  });

  it('renders the ifame with correct attributes', () => {
    const iframe = screen.getByTitle(
      'Google Map pointing to the location of 321 satellite beach, FL'
    );
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98246.44797771022!2d-105.26977194489798!3d39.69017321780344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c80126f0d1b23%3A0xc03c2683cfdf7ba0!2sRiver%20Run%20Park!5e0!3m2!1sen!2sus!4v1667866269435!5m2!1sen!2sus'
    );
  });

  it('Check that parking spot is rendered', () => {
    const parkingSpot = screen.getByText('Mcdonalds Parking Lot');
    expect(parkingSpot).toBeInTheDocument();
  });

  it('Check that address is rendered', () => {
    const parkingSpot = screen.getByText('321 satellite beach, FL');
    expect(parkingSpot).toBeInTheDocument();
  });
});
