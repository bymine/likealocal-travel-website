import React from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import NavBar from './NavBar';

const Layout = () => {
  return (
    <Box bg={'#EEEEEE'}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
