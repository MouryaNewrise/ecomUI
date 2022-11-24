import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const getAPIData = createAsyncThunk('thunkAPI/getAPIData', async () => {
  await axios.get('https://jsonplaceholder.typicode.com/posts');
});

const ThunkSlice = createSlice({
  name: 'thunkAPI',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    add: state => {
      state.list.push(payload);
    },
    del: state => {
      state.list.filter(id => {
        id !== payload;
      });
    },
  },
  extraReducer: {
    [getAPIData.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getAPIData.fulfilled]: (state, action) => {
      state.list = action;
      state.status = 'pending';
    },
    [getAPIData.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {add, del} = ThunkSlice.actions;

export default ThunkSlice.reducer;
