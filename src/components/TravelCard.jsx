import React from 'react';
import {
  GridItem,
  Box,
  Image,
  Text,
  Button,
  useDisclosure,
  Badge,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { reservationAdd } from '../redux/reservations/reservationSlice';
import TravelModal from './TravelModal';
const TravelCard = ({ travel }) => {
  const dispatch = useDispatch();
  const { idx, name, mainImage, price, maximumPurchases, spaceCategory } = travel;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem
      maxW='300px'
      m='6'
      borderWidth='1px'
      rounded='lg'
      shadow='lg'
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Image src={mainImage} alt='' onClick={onOpen} roundedTop='lg' />
      <TravelModal travel={travel} isOpen={isOpen} onClose={onClose} />

      <Box p='6'>
        <Box display={'flex'} justifyContent='space-between'>
          <Badge colorScheme='red' rounded='full' px='2' fontSize='0.8em'>{`#${idx}`}</Badge>
          <Badge
            colorScheme={'teal'}
            rounded='full'
            px='2'
            fontSize='0.8em'
          >{`@${spaceCategory}`}</Badge>
        </Box>
        <Flex mt='1' justifyContent='space-between' alignContent='center'>
          <Box fontSize='xl' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {name}
          </Box>
        </Flex>
        <Box my={4}>
          <Text>{name}</Text>
          <Text>{price}원</Text>
        </Box>

        <Button
          w={'100%'}
          variant='outline'
          onClick={() => {
            dispatch(reservationAdd(idx, name, mainImage, price, maximumPurchases));
          }}
        >
          예약하기
        </Button>
      </Box>
    </GridItem>
  );
};

export default TravelCard;
