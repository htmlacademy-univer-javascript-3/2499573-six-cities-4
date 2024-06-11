import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const/const';
import {UserState} from '../../types/state';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLogin: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    saveUserEmail(state, action: PayloadAction<string>) {
      state.userLogin = action.payload;
    },
  },
});

export const { requireAuthorization} = userProcess.actions;
