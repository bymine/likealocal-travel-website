import React from 'react';
import {
  Box,
  Stack,
  Select,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Spacer,
  RangeSliderMark,
} from '@chakra-ui/react';

const TravelFilterBox = ({
  categories,
  category,
  handleCategoryChange,
  range,
  handleRangeChange,
}) => {
  return (
    <Box p={4}>
      <Stack direction='row' mb={4}>
        <Select width='25%' value={category} onChange={handleCategoryChange}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>
        <Spacer />
        <Box width='50%'>
          <Text mb='2' fontWeight='bold'>
            가격 범위 선택 {range[0]} ~ {range[1]}
          </Text>
          <RangeSlider min={0} max={50000} step={1000} value={range} onChange={handleRangeChange}>
            <RangeSliderMark value={25000} mt='1' ml='-2.5' fontSize='sm'>
              25000
            </RangeSliderMark>
            <RangeSliderTrack bg='red.100'>
              <RangeSliderFilledTrack bg='tomato' />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} bg='teal' />
            <RangeSliderThumb boxSize={6} index={1} bg='teal' />
          </RangeSlider>
        </Box>
      </Stack>
    </Box>
  );
};

export default TravelFilterBox;
