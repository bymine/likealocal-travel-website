import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoryReset,
  spaceUpdate,
  priceUpdate,
  selectDefaultSpace,
  selectSpaceCategories,
  selectDefaultPrice,
  selectPriceCategories,
} from '../redux/slices/categoriesSlice';
import {
  Stack,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
  Checkbox,
  Divider,
  Box,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const TravelFilterBox = () => {
  const dispatch = useDispatch();

  const defaultSpace = useSelector(selectDefaultSpace);
  const defaultPrice = useSelector(selectDefaultPrice);

  const spaceCategories = useSelector(selectSpaceCategories);
  const priceCategories = useSelector(selectPriceCategories);

  return (
    <Box h='auto' minW={'300px'} direction='column' m={8} borderWidth='1px'>
      <Stack px={8} py={4} direction='row' spacing={0}>
        <Button
          w='100%'
          colorScheme={'teal'}
          onClick={() => {
            dispatch(categoryReset());
          }}
        >
          초기화
        </Button>
      </Stack>
      <Divider />
      <Stack px={8} py={4}>
        <Text>지역 설정</Text>
        {defaultSpace.map((category) => (
          <Checkbox
            pl={4}
            key={category}
            name={category}
            isChecked={spaceCategories.includes(category)}
            onChange={() => {
              dispatch(spaceUpdate({ category }));
            }}
          >
            {category}
          </Checkbox>
        ))}
      </Stack>
      <Divider />
      <Stack px={8} py={4}>
        <Text>가격 설정</Text>
        <RangeSlider
          min={defaultPrice[0]}
          max={defaultPrice[1]}
          step={1000}
          value={priceCategories}
          onChange={(range) => {
            dispatch(priceUpdate({ range }));
          }}
        >
          <RangeSliderTrack bg='teal.100'>
            <RangeSliderFilledTrack bg='teal' />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={3} index={0} bg='teal' />
          <RangeSliderThumb boxSize={3} index={1} bg='teal' />
        </RangeSlider>
        <Flex>
          <Text>{priceCategories[0]}원</Text>
          <Spacer />
          <Text>{priceCategories[1]}원</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default TravelFilterBox;
