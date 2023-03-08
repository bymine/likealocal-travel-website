import {
  Container,
  Flex,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reservationQuantity, reservationRemove } from '../redux/reservations/reservationSlice';

const ReservationCard = ({ travel }) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (value) => {
    dispatch(reservationQuantity({ idx: travel.idx, quantity: value }));
  };
  const handleRemoveResrvation = () => {
    dispatch(reservationRemove({ idx: travel.idx }));
  };
  return (
    <Flex p='6px' m='20px' h={'200px'}>
      <Image src={travel.mainImage} alt='' />
      <Container>
        <Text>{travel.name}</Text>
        <Text>{travel.idx}</Text>
      </Container>
      <Box>
        <NumberInput
          size='sm'
          defaultValue={travel.quantity}
          min={1}
          max={travel.maximumPurchases}
          onChange={handleQuantityChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text>{travel.price * travel.quantity}</Text>
      </Box>
      <Button onClick={handleRemoveResrvation}>삭제</Button>
    </Flex>
  );
};

export default ReservationCard;
