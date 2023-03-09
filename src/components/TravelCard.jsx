import React from 'react';
import { GridItem, Box, Image, Text, Button, Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { reservationAdd } from '../redux/reservations/reservationSlice';
import TravelModal from './TravelModal';
const TravelCard = ({ travel }) => {
  const dispatch = useDispatch();
  const { idx, name, mainImage, price, maximumPurchases, spaceCategory } = travel;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem maxW='300px' m='6' borderWidth='1px' borderRadius='lg'>
      <Image src={mainImage} alt='' />
      <Box p='6'>
        <Text>고유번호: {idx}</Text>
        <Text>상품 제목: {name}</Text>
        <Text>상품 금액: {price}</Text>
        <Text>최대 구매 수량: {maximumPurchases}</Text>
        <Text>사용 가능 지역: {spaceCategory}</Text>
        <Flex paddingTop='6'>
          <Button colorScheme='teal' onClick={onOpen}>
            자세히 보기
          </Button>
          <TravelModal travel={travel} isOpen={isOpen} onClose={onClose} />
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
