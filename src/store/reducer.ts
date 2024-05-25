import { createReducer } from '@reduxjs/toolkit';
import { cityChange } from './action';
import { listFilling } from './action';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';
type StateType = {
  city: string;
  offers: Offers;
}

const initialState: StateType = {
  city: 'Paris',
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(listFilling, (state) =>{
      state.offers = offers;
    });
});