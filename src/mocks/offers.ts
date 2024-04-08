import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    'id': '0',
    'previewImage': 'img/apartment-01.jpg',
    'title': 'Beautiful & luxurious studio at great location',
    'isPremium': true,
    'isFavorite': true,
    'type': 'Apartment',
    'rating': 4.8,
    'city': {
      'name': 'Amsterdam'
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 120,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },

  {
    'id': '1',
    'previewImage': 'img/room.jpg',
    'title': 'Wood and stone place',
    'isPremium': false,
    'isFavorite': false,
    'type': 'Room',
    'rating': 3,
    'city': {
      'name': 'Amsterdam'
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 80,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },


  {
    'id': '2',
    'previewImage': 'img/apartment-02.jpg',
    'title': 'Canal View Prinsengracht',
    'isPremium': true,
    'isFavorite': true,
    'type': 'Apartment',
    'rating': 4.8,
    'city': {
      'name': 'Amsterdam'
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 132,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },


  {
    'id': '3',
    'previewImage': 'img/apartment-03.jpg',
    'title': 'Nice, cozy, warm big bed apartment',
    'isPremium': true,
    'isFavorite': true,
    'type': 'Apartment',
    'rating': 4.8,
    'city': {
      'name': 'Amsterdam'
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 180,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },
];