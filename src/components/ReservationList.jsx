import { Grid } from '@chakra-ui/react';
import React from 'react';
import ReservationCard from './ReservationCard';

const ReservationList = ({ travels }) => {
  return (
    <Grid templateColumns='repeat(1, 1fr)'>
      {travels.map((element) => (
        <ReservationCard key={element.idx} travel={element} />
      ))}
    </Grid>
  );
};

export default ReservationList;
