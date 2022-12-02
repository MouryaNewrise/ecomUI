import {createSlice} from '@reduxjs/toolkit';
import toast from 'react-native-toast-message';
const initialState = {
  wishlist: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const AddToCartSlice = createSlice({
  name: 'toCart',
  initialState,
  reducers: {
    addToCartMy(state, action) {
      let index = state.wishlist.findIndex((e, i) => {
        e.id === action.payload.id;
      });
      //   console.log('indexCart', index);
      if (index >= 1) {
        state.wishlist[index].cartTotalQuantity += 1;
        // alert('bad request api modify');
        // state.wishlist[index] = {
        //   ...state.wishlist[index],
        //   cartQuantity: state.wishlist[index].cartQuantity + 1,
        // };
        // toast.info('Increased product quantity');
        // state.quantity += 1;
        state.cartTotalAmount += action.payload.price;
      } else {
        // alert('not found cart quantity');
        let temProductItem = {...action.payload, quantity: 1};
        state.wishlist.push(temProductItem);
        // toast.success('product added to cart');

        // state.quantity += 1;
        // state.total += action.payload.price;
      }
      //   localStorage.setItem('cartItems', JSON.stringify(state.wishlist));
    },
    removeItem: (state, action) => {
      const dltIndex = state.wishlist.findIndex(
        item => item.id != action.payload,
      );
      state.wishlist.splice(dltIndex, 1);

      if (state.wishlist[dltIndex].cartTotalQuantity > 1) {
        state.wishlist[dltIndex].cartTotalQuantity -= 1;

        // toast.info('Decreased product quantity');
      } else if (state.wishlist[dltIndex].cartTotalQuantity === 1) {
        const nextCartItems = state.wishlist.filter(
          item => item.id !== action.payload,
        );
        state.wishlist = nextCartItems;

        // toast.error('Product removed from cart');
      }

      //   localStorage.setItem('cartItems', JSON.stringify(state.wishlist));
    },
    removeFromCart(state, action) {
      state.wishlist.map(removeItem => {
        if (removeItem.id === action.payload.id) {
          const nextRemoveCardItem = state.wishlist.filter(
            item => item.id !== removeItem.id,
          );

          state.wishlist = nextRemoveCardItem;

          //   toast.error('Product removed from cart', {
          //     // position: 'bottom',
          //   });
        }
        // localStorage.setItem('cartItems', JSON.stringify(state.wishlist));
        return state;
      });
    },
    getTotals(state, action) {
      let {total, quantity} = state.wishlist.reduce(
        (cartTotal, cartItem) => {
          const {price, quantity} = cartItem;
          const total = price * quantity;

          cartTotal.total += total;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    removeAll(state, action) {
      state.wishlist = [];
      //   localStorage.setItem('cartItems', JSON.stringify(state.wishlist));
      //   toast.error('cart cleared', {
      //     // position: 'bottom',
      //   });
    },
  },
});

export const {
  addToCartMy,
  removeAll,
  removeItem,
  getTotals,
  removeFromCart,
} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
