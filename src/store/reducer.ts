import { createReducer } from '@reduxjs/toolkit';
import { cityChange } from './action';
import { listFilling } from './action';
import { colorSelectPoint } from './action';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';

type StateType = {
  city: string;
  offers: Offers;
  sortOption: string;
  selectPoint: string | null;
}

const initialState: StateType = {
  city: 'Paris',
  offers: offers,
  sortOption: 'Popular',
  selectPoint: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(listFilling, (state) =>{
      state.offers = offers;
      
    })
    .addCase(colorSelectPoint, (state, action) => {
        state.selectPoint = action.payload;
    
});
});