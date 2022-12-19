import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/userSlice';
import postReducer from './features/postSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['post/getCategories'],
        ignoredPaths: ['post.categories'],
      },
    }),
});

export default store;
