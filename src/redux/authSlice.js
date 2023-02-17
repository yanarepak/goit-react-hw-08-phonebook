import { createSlice } from '@reduxjs/toolkit';
import { register, getUser, login, logout } from './operation/userOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {

    [register.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },

    [login.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },

    [logout.fulfilled](state, { payload }) {
      state.isLoggedIn = false;
      state.user = {name:'', email: '', };
      state.token = null;
    },

    [getUser.pending](state){
    state.isRefreshing = true;
    },
    [getUser.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.user = {...payload};
      state.isRefreshing = false;
    },
    [getUser.rejected](state){
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
