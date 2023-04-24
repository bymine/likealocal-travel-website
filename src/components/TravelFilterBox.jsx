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
  Box,
  Flex,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';

import {
  DEFAULT_SPACE,
  MAX_PRICE,
  MIN_PRICE,
  QUERY_STRING,
} from '../constants';

const TravelFilterBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const spaceCategory = (searchParams.get(QUERY_STRING.SPACE) ?? '').split(',');
  const priceCategory = (searchParams.get(QUERY_STRING.PRICE) ?? '')
    .split(',')
    .map((element) => parseInt(element));

  function spaceUpdate(category) {
    let updatedSpace = [...spaceCategory];

    if (spaceCategory.includes(category)) {
      updatedSpace = updatedSpace.filter((space) => space !== category);
    } else {
      updatedSpace.push(category);
    }

    searchParams.set(QUERY_STRING.SPACE, updatedSpace.join(','));
    setSearchParams(searchParams);
  }

  function priceUpdate(range) {
    searchParams.set(QUERY_STRING.PRICE, `${range[0]},${range[1]}`);
    setSearchParams(searchParams);
  }

  function resetCategory() {
    searchParams.delete(QUERY_STRING.SPACE);
    searchParams.delete(QUERY_STRING.PRICE);
    setSearchParams(searchParams);
  }

  const filterDirections = useBreakpointValue({ base: 'column', md: 'row' });
  const checkboxDirection = useBreakpointValue({ base: 'column', md: 'row' });
  return (
    <Box direction="column" mx={8} borderWidth="1px" py={2}>
      <Stack direction={filterDirections}>
        <Box px={8}>
          <Text fontWeight="bold" paddingBottom={2}>
            지역 설정
          </Text>
          <Stack direction={checkboxDirection}>
            {DEFAULT_SPACE.map((category) => (
              <Checkbox
                colorScheme="teal"
                pl={4}
                key={category}
                name={category}
                isChecked={spaceCategory.includes(category)}
                onChange={() => spaceUpdate(category)}>
                {category}
              </Checkbox>
            ))}
          </Stack>
        </Box>
        <Box px={8} flex={1}>
          <Text fontWeight="bold" paddingBottom={2}>
            가격 설정
          </Text>
          <RangeSlider
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={1000}
            value={priceCategory}
            onChange={(range) => {
              priceUpdate(range);
            }}>
            <RangeSliderTrack bg="teal.100">
              <RangeSliderFilledTrack bg="teal" />
            </RangeSliderTrack>
            {priceCategory.map((_, index) => (
              <RangeSliderThumb
                key={index}
                boxSize={3}
                index={index}
                bg="teal"
              />
            ))}
          </RangeSlider>
          <Flex>
            <Text>{priceCategory[0]}원</Text>
            <Spacer />
            <Text>{priceCategory[1]}원</Text>
          </Flex>
        </Box>
      </Stack>
      <Button
        mx={8}
        colorScheme="teal"
        onClick={() => {
          resetCategory();
        }}>
        초기화
      </Button>
    </Box>
  );
};

export default TravelFilterBox;
