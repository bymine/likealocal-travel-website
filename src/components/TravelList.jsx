import React from 'react';

import { Grid } from '@chakra-ui/react';

import TravelCard from './TravelCard';
import useProducts from '../hooks/useProducts';

const TravelList = () => {
  const { product } = useProducts();

  return (
    <Grid w="100%" templateColumns="repeat(3,1fr)">
      {product.map((element) => (
        <TravelCard key={element.idx} travel={element} />
      ))}
    </Grid>
  );
};

export default TravelList;
