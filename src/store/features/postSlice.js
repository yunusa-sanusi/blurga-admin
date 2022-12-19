import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: {},
  categories: {},
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getCategories } = postSlice.actions;

export const postSelector = (store) => store.post;

export default postSlice.reducer;
