import { Box, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TravelFilterBox, TravelList } from '../components';
import { selectPriceCategories, selectSpaceCategories } from '../redux/slices/categoriesSlice';

const isInRange = (range, targetNumber) => {
  return targetNumber >= range[0] && targetNumber <= range[1];
};

const MainPage = () => {
  const [travels, setTravels] = useState([]);

  const spaceCategories = useSelector(selectSpaceCategories);
  const priceCategories = useSelector(selectPriceCategories);

  const filteredProductList = travels.filter((product) => {
    return (
      spaceCategories.includes(product.spaceCategory) && isInRange(priceCategories, product.price)
    );
  });

  useEffect(() => {
    async function fetchTravels() {
      try {
        const response = await fetch('http://localhost:3500/travels');
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

  let content;

  if (travels) {
    content = (
      <Stack direction='row'>
        <Box h='auto'>
          <TravelFilterBox />
        </Box>
        <TravelList travels={filteredProductList} />
      </Stack>
    );
  }

  return content;
};

export default MainPage;
