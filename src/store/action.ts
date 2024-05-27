import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthorizationStatus,  AppRoute } from '../const/const';
import { OfferData } from '../types/offer-data';
import { Review } from '../types/review';

export const cityChange = createAction<string>('сityChange');

export const sortingSelection = createAction<string>('sorting/selectOptionSorting');

export const colorSelectPoint = createAction<{ id: string } | null>(
    'points/selectPoint'
  );

export const loadOffers = createAction<Offer[]>('loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('setError');

export const setLogin = createAction<string|null>('authorization/setLogin');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const loadOfferData = createAction<OfferData>('loadOfferData');

export const sendReview = createAction<Review>('sendReview');