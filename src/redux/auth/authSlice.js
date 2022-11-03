import { register, login, logout, fetchCurrentUser } from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogedIn: false,
  isLoading: false,
  error: null,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLogedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //
    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLogedIn = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //
    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.isLoading = false;
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLogedIn = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetchingUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isFetchingUser = false;
      state.user = payload;
      state.isLogedIn = true;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isFetchingUser = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
