import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  defaultSpace: ['서울', '강원', '부산', '대구', '제주'],
  defaultPrice: [0, 30000],

  spaceCategories: ['서울', '강원', '부산', '대구', '제주'],
  priceCategories: [0, 30000],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    spaceUpdate(state, action) {
      const { category } = action.payload;
      let updatedCategories = [];
      if (state.spaceCategories.includes(category)) {
        updatedCategories = state.spaceCategories.filter(
          (checkedCategory) => checkedCategory !== category,
        );
      } else {
        updatedCategories = [...state.spaceCategories, category];
      }

      state.spaceCategories = updatedCategories;
    },
    priceUpdate(state, action) {
      const { range } = action.payload;
      state.priceCategories = range;
    },
    categoryReset(state) {
      state.spaceCategories = state.defaultSpace;
      state.priceCategories = state.defaultPrice;
    },
  },
});

export const { spaceUpdate, priceUpdate, categoryReset } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectDefaultSpace = (state) => state.categories.defaultSpace;

export const selectSpaceCategories = (state) =>
  state.categories.spaceCategories;

export const selectDefaultPrice = (state) => state.categories.defaultPrice;

export const selectPriceCategories = (state) =>
  state.categories.priceCategories;
