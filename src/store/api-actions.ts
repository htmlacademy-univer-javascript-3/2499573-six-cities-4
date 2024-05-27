import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FullOffer, Offer, Offers} from '../types/offer';
import {loadOffers, requireAuthorization, setOffersDataLoadingStatus, setError, setLogin, redirectToRoute, loadOfferData, sendReview} from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute} from '../const/const';

import {dropToken, saveToken } from '../service/token';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { store } from './index';
import { Review, Reviews } from '../types/review';
import { CommentData } from '../types/comment-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferss',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setLogin(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'six-cities/login',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferDataAction = createAsyncThunk<
  void,
  {
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOfferData', async ({ id }, { dispatch, extra: api }) => {
  const { data: offerInfo } = await api.get<FullOffer>(
    `${APIRoute.Offers}/${id}`
  );
  const { data: nearestOffers } = await api.get<Offers>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  const { data: reviews } = await api.get<Reviews>(
    `${APIRoute.Comments}/${id}`
  );
  dispatch(loadOfferData({ offerInfo, nearestOffers, reviews }));
});


export const sendCommentAction = createAsyncThunk<
  void,
  {
    comment: CommentData;
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('sendComment', async ({ comment, id }, { dispatch, extra: api }) => {
  const { data: review } = await api.post<Review>(
    `${APIRoute.Comments}/${id}`,
    {
      comment: comment.comment,
      rating: comment.rating,
    }
  );
  dispatch(sendReview(review));
});