import React from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

import { HEADER_BUTTON, PAGE } from '../constants';

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleNavigate() {
    navigate(pathname === PAGE.MAIN ? PAGE.RESERVATION : PAGE.MAIN);
  }

  return (
    <Flex px={8} py={4}>
      <Link to={PAGE.MAIN}>
        <Heading>Travel</Heading>
      </Link>
      <Spacer />
      <Box>
        <Button mx={4} onClick={handleNavigate}>
          {pathname === PAGE.MAIN ? HEADER_BUTTON.CART : HEADER_BUTTON.PRODUCT}
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
