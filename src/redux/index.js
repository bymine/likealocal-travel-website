import { configureStore } from '@reduxjs/toolkit';

import reservationsReducer from './slices/reservationSlice';

export default configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});
