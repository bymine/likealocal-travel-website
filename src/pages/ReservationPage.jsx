import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReservationList } from '../components';
import { selectAllReservations } from '../redux/reservations/reservationSlice';

const ReservationPage = () => {
  const reservations = useSelector(selectAllReservations);
  const total = reservations.reduce((acc, item) => acc + item.purchasePrice, 0);

  return (
    <Box px={8} py={4}>
      <Heading my={8} textAlign={'center'}>
        장바구니
      </Heading>
      <Flex gap='8'>
        <ReservationList reservations={reservations} />
        <Box w='30%' borderWidth='1px' borderRadius='lg' px={8} py={4}>
          <Heading size='lg' mb={8}>
            요금 명세서
          </Heading>
          <Flex>
            <Text>결제 금액</Text>
            <Spacer />
            <Text>{total}</Text>
          </Flex>
          <Flex>
            <Text>할인 금액</Text>
            <Spacer />
            <Text>0</Text>
          </Flex>
          <Flex>
            <Text>총 결제 금액</Text>
            <Spacer />
            <Text>{total}</Text>
          </Flex>

          <Button mt={8} w='100%' colorScheme='teal'>
            구매하기
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReservationPage;
