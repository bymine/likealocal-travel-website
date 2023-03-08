import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReservationList } from '../components';
import { selectAllReservations } from '../redux/reservations/reservationSlice';

const ReservationPage = () => {
  const reservations = useSelector(selectAllReservations);
  const total = reservations.reduce((acc, item) => acc + item.purchasePrice, 0);

  return (
    <Box>
      <Text>장바구니</Text>
      <Flex>
        <ReservationList w='50%' travels={reservations} />
        <Spacer />
        <Box w='30%' maxW='sm' borderWidth='1px' borderRadius='lg'>
          <Text>결제 금액</Text>
          <Text>할인 금액</Text>
          <Text>금액 {total}</Text>
          <Button>구매하기</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReservationPage;
