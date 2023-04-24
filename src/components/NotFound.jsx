import React from 'react';

import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Heading fontSize="6xl">404</Heading>
        <Text mt="4" fontSize="xl" fontWeight="bold">
          페이지를 찾을 수 없습니다.
        </Text>
        <Text mt="4" fontSize="lg">
          존재하지 않는 페이지에 접근하셨습니다. 다른 페이지로 이동해 주세요.
        </Text>
      </Box>
    </Flex>
  );
};

export default NotFound;
