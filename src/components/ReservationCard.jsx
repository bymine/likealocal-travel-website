import React from 'react';
import { useDispatch } from 'react-redux';
import { reservationQuantity, reservationRemove } from '../redux/slices/reservationSlice';
import {
  Flex,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Tr,
  Td,
  Box,
} from '@chakra-ui/react';

const ReservationCard = ({ reservation }) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (value) => {
    dispatch(reservationQuantity({ idx: reservation.idx, quantity: value }));
  };
  const handleRemoveResrvation = () => {
    dispatch(reservationRemove({ idx: reservation.idx }));
  };
  return (
    <Tr key={reservation.idx}>
      <Td>
        <Flex alignItems={'center'}>
          <Image src={reservation.mainImage} alt='' w='100px' />
          <Box w='8' />
          <Text textAlign={'left'}>{reservation.name}</Text>
        </Flex>
      </Td>

      <Td>
        <Text>{reservation.price}</Text>
      </Td>
      <Td>
        <NumberInput
          w='100px'
          size='sm'
          defaultValue={reservation.quantity}
          min={1}
          max={reservation.maximumPurchases}
          onChange={handleQuantityChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td>
        <Text>{reservation.purchasePrice}</Text>
      </Td>
      <Td>
        <Button onClick={handleRemoveResrvation}>삭제</Button>
      </Td>
    </Tr>
  );
};

export default ReservationCard;
