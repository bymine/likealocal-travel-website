import React from 'react';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const ReceiptBox = ({ total }) => {
  return (
    <Box w={'50%'} borderWidth="1px" borderRadius="lg" px={8} py={4}>
      <Heading size="lg" mb={8}>
        요금 명세서
      </Heading>
      <Flex justifyContent="space-between">
        <Text>결제 금액</Text>
        <Text>{total}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>할인 금액</Text>
        <Text>0</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>총 결제 금액</Text>
        <Text>{total}</Text>
      </Flex>
      <Flex justifyContent="center">
        <Button mt={8} w="50%" colorScheme="teal" alignSelf="center">
          구매하기
        </Button>
      </Flex>
    </Box>
  );
};

export default ReceiptBox;
