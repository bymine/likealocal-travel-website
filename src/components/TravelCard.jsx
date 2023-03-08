import React from 'react';
import { GridItem, Box, Image, Text, Button, Flex, Spacer } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { reservationAdd } from '../redux/reservations/reservationSlice';
const TravelCard = ({ travel }) => {
  const dispatch = useDispatch();
  const { idx, name, mainImage, price, maximumPurchases } = travel;

  return (
    <GridItem maxW='300px' m='6' borderWidth='1px' borderRadius='lg'>
      <Image src={travel.mainImage} alt='' />
      <Box p='6'>
        <Text>고유번호: {travel.idx}</Text>
        <Text>상품 제목: {travel.name}</Text>
        <Text>상품 금액: {travel.price}</Text>
        <Text>최대 구매 수량: {maximumPurchases}</Text>
        <Text>사용 가능 지역: {travel.spaceCategory}</Text>
        <Flex paddingTop='6'>
          <Button colorScheme='teal'>자세히 보기</Button>
          <Spacer />
          <Button
            variant='outline'
            onClick={() => {
              dispatch(reservationAdd(idx, name, mainImage, price, maximumPurchases));
            }}
          >
            예약하기
          </Button>
        </Flex>
      </Box>
    </GridItem>
  );
};

export default TravelCard;
