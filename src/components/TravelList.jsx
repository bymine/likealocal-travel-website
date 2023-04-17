import React, { useEffect, useState } from 'react';

import { Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import TravelCard from './TravelCard';
import {
  selectPriceCategories,
  selectSpaceCategories,
} from '../redux/slices/categoriesSlice';
import { isInRange } from '../utils';

const TravelList = () => {
  const [travels, setTravels] = useState([]);

  const spaceCategories = useSelector(selectSpaceCategories);
  const priceCategories = useSelector(selectPriceCategories);

  const filteredProductList = travels.filter((product) => {
    return (
      spaceCategories.includes(product.spaceCategory) &&
      isInRange(priceCategories, product.price)
    );
  });

  useEffect(() => {
    async function fetchTravels() {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      try {
        await delay(3000);
        const response = await fetch(process.env.REACT_APP_API_URL);
        if (response.ok) {
          const data = await response.json();
          setTravels(data);
        }
      } catch (error) {
        throw new Error('Failed to load json data');
      }
    }

    fetchTravels();
  }, []);

  return (
    <Grid w="100%" templateColumns="repeat(3,1fr)">
      {filteredProductList.map((element) => (
        <TravelCard key={element.idx} travel={element} />
      ))}
    </Grid>
  );
};

export default TravelList;
