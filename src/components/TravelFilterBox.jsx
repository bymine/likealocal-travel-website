import React from 'react';

import { useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultSpace = ['서울', '강원', '부산', '대구', '제주'];
  const defaultPrice = [0, 30000];
  const spaceCategory = searchParams.getAll('space');
  const priceCategory = searchParams
    .getAll('price')
    .map((element) => parseInt(element));

  function spaceUpdate(category) {
    const updatedSpace = [...spaceCategory];
    if (spaceCategory.includes(category)) {
      updatedSpace.filter((space) => space !== category);
    } else {
      updatedSpace.push(category);
    }

    searchParams.delete('space');

    updatedSpace.forEach((space, index) =>
      index === 0
        ? searchParams.set('space', space)
        : searchParams.append('space', space),
    );

    setSearchParams(searchParams);
  }

  function priceUpdate(range) {
    searchParams.set('price', range[0]);
    searchParams.append('price', range[1]);

    setSearchParams(searchParams);
  }

  function resetCategory() {
    searchParams.delete('space');
    searchParams.delete('price');
    setSearchParams(searchParams);
  }

  return (
    <Box h="auto" minW={'300px'} direction="column" m={8} borderWidth="1px">
      <Stack px={8} py={4} direction="row" spacing={0}>
        <Button
          w="100%"
          colorScheme={'teal'}
          onClick={() => {
            resetCategory();
          }}>
          초기화
        </Button>
      </Stack>
      <Divider />
      <>{}</>
      <Stack px={8} py={4}>
        <Text>지역 설정</Text>
        {defaultSpace.map((category) => (
          <Checkbox
            pl={4}
            key={category}
            name={category}
            isChecked={spaceCategory.includes(category)}
            onChange={() => spaceUpdate(category)}>
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
          value={priceCategory}
          onChange={(range) => {
            priceUpdate(range);
          }}>
          <RangeSliderTrack bg="teal.100">
            <RangeSliderFilledTrack bg="teal" />
          </RangeSliderTrack>
          {priceCategory.map((_, index) => (
            <RangeSliderThumb key={index} boxSize={3} index={index} bg="teal" />
          ))}
        </RangeSlider>
        <Flex>
          <Text>{priceCategory[0]}원</Text>
          <Spacer />
          <Text>{priceCategory[1]}원</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default TravelFilterBox;
