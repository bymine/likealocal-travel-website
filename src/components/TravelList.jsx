import React from 'react';
import TravelCard from './TravelCard';
import { Grid } from '@chakra-ui/react';

const TravelList = ({ travels }) => {
  return (
    <Grid templateColumns='repeat(3,1fr)'>
      {travels.map((element) => (
        <TravelCard key={element.idx} travel={element} />
      ))}
    </Grid>
  );
};

export default TravelList;
