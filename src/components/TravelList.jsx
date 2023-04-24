import React from 'react';

import { Grid, useBreakpointValue } from '@chakra-ui/react';

import TravelCard from './TravelCard';
import useProducts from '../hooks/useProducts';

const TravelList = () => {
  const { product } = useProducts();

  const columns = useBreakpointValue({
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)',
  });

  return (
    <Grid w="100%" templateColumns={columns}>
      {product.map((element) => (
        <TravelCard key={element.idx} travel={element} />
      ))}
    </Grid>
  );
};

export default TravelList;
