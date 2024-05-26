export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  };
  
  export type City = {
    name: string;
    location: Location;
  }
  
  export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  
  export type Offers = Offer[];