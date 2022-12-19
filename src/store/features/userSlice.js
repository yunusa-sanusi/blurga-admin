import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  userAuthId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    getUserAuthId: (state, action) => {
      state.userAuthId = action.payload;
    },
  },
});

export const { getUser, getUserAuthId } = userSlice.actions;
export const getLoggedInUser = (store) => store.user;

export default userSlice.reducer;
