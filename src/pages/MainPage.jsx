import React, { Suspense } from 'react';

import { Box, Stack } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';

import { TravelFilterBox, TravelList } from '../components';

const MainPage = () => {
  return (
    <Stack direction="row">
      <ErrorBoundary fallback={<div>failed...</div>}>
        <Suspense fallback={<>loading...</>}>
          <TravelList />
        </Suspense>
      </ErrorBoundary>
      <Box h="auto">
        <TravelFilterBox />
      </Box>
    </Stack>
  );
};

export default MainPage;
