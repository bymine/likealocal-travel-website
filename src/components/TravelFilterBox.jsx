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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
      if (updatedSpace.length === 1) {
        alert('하나 이상의 지역을 설정해야 합니다');
      } else {
        updatedSpace = updatedSpace.filter((space) => space !== category);
      }
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

  return (
    <Box
      position={'relative'}
      bgImage={'/background.jpg'}
      bgSize={'cover'}
      bgPosition={'center'}
      bgRepeat={'no-repeat'}
      w={'100%'}
      h={'350'}
      mb={40}>
      <Stack
        direction={'column'}
        position={'absolute'}
        left="50%"
        top="50%"
        transform="translate(-50%,0%)"
        background={'#ffffff'}
        boxShadow={'2xl'}
        rounded={'2xl'}
        w={'40%'}
        height={'70%'}
        p={8}
        gap={8}>
        <Stack direction={'row'} gap={16}>
          <Stack>
            <Text fontWeight="bold">국가 설정</Text>
            <Menu>
              <MenuButton as={Button} rightIcon={<ArrowDropDownIcon />}>
                대한민국
              </MenuButton>
              <MenuList>
                <MenuItem>대한민국</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Stack>
            <Text fontWeight="bold">지역 설정</Text>
            <Menu>
              <MenuButton as={Button} p="2" rightIcon={<ArrowDropDownIcon />}>
                {searchParams.get(QUERY_STRING.SPACE)}
              </MenuButton>
              <MenuList>
                <Flex direction="column" p="2">
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
                </Flex>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} gap={16}>
          <Box flex={1}>
            <Text fontWeight="bold" pb={2}>
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
                <RangeSliderThumb key={index} boxSize={4} index={index} />
              ))}
            </RangeSlider>
            <Flex>
              <Text fontWeight="bold">{priceCategory[0]}원</Text>
              <Spacer />
              <Text fontWeight="bold">{priceCategory[1]}원</Text>
            </Flex>
          </Box>
          <Button
            mx={8}
            colorScheme="teal"
            onClick={() => {
              resetCategory();
            }}>
            초기화
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TravelFilterBox;
