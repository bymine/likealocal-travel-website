import React, { Suspense } from 'react';

import { Box, Stack } from '@chakra-ui/react';

import { TravelFilterBox, TravelList } from '../components';

const MainPage = () => {
  return (
    <Stack direction="row">
      <Box h="auto">
        <TravelFilterBox />
      </Box>
      <Suspense fallback={<>loading...</>}>
        <TravelList />
      </Suspense>
    </Stack>
  );
};

export default MainPage;
