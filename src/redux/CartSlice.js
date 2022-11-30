import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: []};

const CartSlice = createSlice({
  name: 'toCart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;