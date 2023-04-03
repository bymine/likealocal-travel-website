import React from 'react';

import { Grid } from '@chakra-ui/react';

import TravelCard from './TravelCard';

const TravelList = ({ travels }) => {
  return (
    <Grid w="100%" templateColumns="repeat(3,1fr)">
      {travels.map((element) => (
        <TravelCard key={element.idx} travel={element} />
      ))}
    </Grid>
  );
};

export default TravelList;
