import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great sslocation',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
  {
    id: '2',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
  {
    id: '3',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 1200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
  {
    id: '4',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
];