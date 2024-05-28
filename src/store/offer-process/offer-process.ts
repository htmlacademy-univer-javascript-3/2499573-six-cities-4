import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offer} from '../../types/offer';
import {OffersState} from '../../types/state';
import { NameSpace } from '../../const/const';
import {OfferData} from '../../types/offer-data';
import { Review } from '../../types/review';
import { updateOffer } from '../../util';

const initialState: OffersState = {
  currentOffer: {
    offerInfo: null,
    nearestOffers: [],
    reviews: [],
  },
  favorites: [],
  offers: [],
  selectPoint: null,
  isOffersDataLoading: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
    },
    setOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isOffersDataLoading = action.payload;
    },
    loadOfferData(state, action: PayloadAction<OfferData>) {
      state.selectPoint = {id: action.payload.offerInfo.id};
      state.currentOffer = action.payload;
    },
    sendReview(state, action: PayloadAction<Review>) {
      state.currentOffer.reviews = [...state.currentOffer.reviews, action.payload];
    },
    highlightMarker(state, action: PayloadAction<{ id: string } | null>) {
      state.selectPoint = action.payload;
    },
    updateOffers: (state, action: PayloadAction<Offer>) => {
      updateOffer(state.offers, action.payload);
    },
    loadFavorites(state, action: PayloadAction<Offer[]>){
      state.favorites = action.payload;
    },
  },
});
export const {loadOffers, setOffersDataLoadingStatus, loadOfferData, sendReview, highlightMarker,updateOffers, loadFavorites} = offersProcess.actions;