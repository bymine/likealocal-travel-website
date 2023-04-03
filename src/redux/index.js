import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './slices/categoriesSlice';
import reservationsReducer from './slices/reservationSlice';

export default configureStore({
  reducer: {
    reservations: reservationsReducer,
    categories: categoriesReducer,
  },
});
