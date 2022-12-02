import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'toCart',
  initialState,
  reducers: {
    addToFav(state, action) {
      let index = state.items.findIndex((e, i) => {
        e.id === action.payload.id;
      });

      if (index >= 0) {
        alert('item available in cart');
        // state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const {addToFav} = CartSlice.actions;
export default CartSlice.reducer;
