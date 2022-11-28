import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PRODUCTS} from '../services/ProductServices';

export const fetchUserById = createAsyncThunk(
  'products/fetchUserById',
  async () => {
    const res = await axios.get('https://fakestoreapi.com/products', {
      withCredentials: true,
    });
    return res;
  },
);
const initialState = {
  items: [PRODUCTS],
  loading: 'idle',
};

export const counterSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
  //   extraReducers:{
  //   [fetchUserById.pending]: state => {
  //     state.status = 'loading';
  //   },
  //   [fetchUserById.fulfilled]: (state, {payload}) => {
  //     console.log('produtcts payload: ', payload);
  //     state.items = payload;
  //     state.status = 'success';
  //   },
  //   [fetchUserById.rejected]: state => {
  //     state.status = 'failed';
  //   },
  // }
});

export const {addCase} = counterSlice.actions;

export default counterSlice.reducer;
