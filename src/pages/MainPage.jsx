import React, { Suspense } from 'react';

import { Stack } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';

import { TravelFilterBox, TravelList } from '../components';

const MainPage = () => {
  return (
    <Stack>
      <TravelFilterBox />
      <ErrorBoundary fallback={<div>failed...</div>}>
        <Suspense fallback={<>loading...</>}>
          <TravelList />
        </Suspense>
      </ErrorBoundary>
    </Stack>
  );
};

export default MainPage;
