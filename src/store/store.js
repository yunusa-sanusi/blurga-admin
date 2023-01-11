import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/userSlice';
import postReducer from './features/postSlice';
import categoryReducer from './features/categorySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['category/fetchCategories/fulfilled'],
        ignoredPaths: ['category.categories'],
      },
    }),
});

export default store;
