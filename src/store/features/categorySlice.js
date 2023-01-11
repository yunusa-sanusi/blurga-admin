import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories } from '../../utils/firebase/post';

const initialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (name, thunkAPI) => {
    try {
      const categories = await getAllCategories();
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const { getCategories } = categorySlice.actions;
export const categorySelector = (store) => store.category;
export default categorySlice.reducer;
