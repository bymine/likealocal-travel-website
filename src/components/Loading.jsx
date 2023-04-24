import React from 'react';

import { Spinner, Stack } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Stack justify={'center'} alignItems={'center'} h={'100vh'}>
      <Spinner color="teal" />
    </Stack>
  );
};

export default Loading;
