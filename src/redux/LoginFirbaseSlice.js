import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {createSlice} from '@reduxjs/toolkit';

const user = firebase.auth().currentUser;
const initialState = {
  loginUser: [],
};

export const LoginFirebaseSlice = createSlice({
  name: 'loginAuth',
  initialState,
  reducers: {
    findUserShowDetail: (state, action) => {
      if (user) {
        console.log('User email: ', user);
        state.loginUser = action.payload;
      }
    },
  },
});
export const {findUserShowDetail} = LoginFirebaseSlice.actions;

export default LoginFirebaseSlice.reducer;
