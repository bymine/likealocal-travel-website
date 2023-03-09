import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    reservations: reservationsReducer,
    categories: categoriesReducer,
  },
});
