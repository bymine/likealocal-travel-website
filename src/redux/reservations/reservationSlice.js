import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    reservationAdd: {
      reducer(state, action) {
        const { idx } = action.payload;
        const existingReservation = state.reservations.find(
          (reservation) => reservation.idx === idx,
        );

        if (!!existingReservation === false) {
          state.reservations.push(action.payload);
        }
      },
      prepare(idx, name, mainImage, price, maximumPurchases) {
        return {
          payload: {
            idx,
            name,
            mainImage,
            price,
            maximumPurchases,
            quantity: 1,
            purchasePrice: price * 1,
          },
        };
      },
    },
    reservationQuantity(state, action) {
      const { idx, quantity } = action.payload;
      const existingReservation = state.reservations.find((reservation) => reservation.idx === idx);

      if (existingReservation) {
        existingReservation.quantity = quantity;
        existingReservation.purchasePrice = existingReservation.price * quantity;
      }
    },
    reservationRemove(state, action) {
      const { idx } = action.payload;
      state.reservations = state.reservations.filter((reservation) => reservation.idx !== idx);
    },
  },
});

export const { reservationAdd, reservationQuantity, reservationRemove } = reservationsSlice.actions;

export default reservationsSlice.reducer;

export const selectAllReservations = (state) => state.reservations.reservations;
