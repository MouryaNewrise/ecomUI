import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  axios
    .get('https://fakestoreapi.com/products')
    .then(res => res.data)
    .then(data => {
      return data;
    }),
);
const initialState = {
  productItems: [],
  value: 1,
};

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
