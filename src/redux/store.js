import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationSlice';
export default configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});
