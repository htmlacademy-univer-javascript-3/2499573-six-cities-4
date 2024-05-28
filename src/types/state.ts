import { store } from '../store/index';
import { AuthorizationStatus } from '../const/const';
import { FullOffer, Offers } from './offer';
import { Reviews } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type UserState = {
    authorizationStatus: AuthorizationStatus;
    userLogin: string | null;
};
  
export type OffersState = {
    currentOffer: {
    offerInfo: FullOffer | null;
    nearestOffers: Offers;
    reviews: Reviews;
    };
    offers: Offers;
    selectPoint: {
      id: string;
    } | null;
    isOffersDataLoading: boolean;
};
  
export type OtherState = {
    city: string;
    sortingOption: string;
    error: string | null;
    favorites: Offers;
};