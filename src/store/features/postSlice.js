import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: {},
  postImage: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostImage: (state, action) => {
      state.postImage = action.payload;
    },
  },
});

export const { getPostImage } = postSlice.actions;

export const postSelector = (store) => store.post;

export default postSlice.reducer;
