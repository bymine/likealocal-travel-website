import React from 'react';

import { Flex, Box, Text } from '@chakra-ui/react';

const Coming = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Text mt="4" fontSize="xl" fontWeight="bold">
          페이지를 준비중입니다.
        </Text>
        <Text mt="4" fontSize="lg">
          현재 페이지를 준비하고 있으니 조금만 기다려주세요.
        </Text>
      </Box>
    </Flex>
  );
};

export default Coming;
