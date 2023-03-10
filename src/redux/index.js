import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './slices/reservationSlice';
import categoriesReducer from './slices/categoriesSlice';

export default configureStore({
  reducer: {
    reservations: reservationsReducer,
    categories: categoriesReducer,
  },
});
