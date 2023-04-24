import React from 'react';

import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const Error = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Heading fontSize="6xl">Error</Heading>
        <Text mt="4" fontSize="xl" fontWeight="bold">
          죄송합니다. 앱이 작동하지 않습니다.
        </Text>
      </Box>
    </Flex>
  );
};

export default Error;
