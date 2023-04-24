import React from 'react';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { ReceiptBox, ReservationList } from '../components';
import { selectAllReservations } from '../redux/slices/reservationSlice';

const ReservationPage = () => {
  const reservations = useSelector(selectAllReservations);
  const total = reservations.reduce((acc, item) => acc + item.purchasePrice, 0);

  return (
    <Box px={8} py={4}>
      <Heading my={8} textAlign={'center'}>
        장바구니
      </Heading>
      <Flex
        gap="8"
        flexDirection={'column'}
        alignItems="center"
        position={'relative'}>
        <ReservationList reservations={reservations} />
        <ReceiptBox total={total} />
      </Flex>
    </Box>
  );
};

export default ReservationPage;
