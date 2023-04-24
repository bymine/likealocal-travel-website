import React, { Suspense } from 'react';

import { Stack } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';

import { Error, Loading, TravelFilterBox, TravelList } from '../components';

const MainPage = () => {
  return (
    <Stack>
      <TravelFilterBox />
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <TravelList />
        </Suspense>
      </ErrorBoundary>
    </Stack>
  );
};

export default MainPage;
