import React from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleNavigate() {
    navigate(pathname === '/main' ? '/reservation' : '/main');
  }

  return (
    <Flex px={8} py={4}>
      <Link to="/main">
        <Heading>Travel</Heading>
      </Link>
      <Spacer />
      <Box>
        <Button mx={4} onClick={handleNavigate}>
          {pathname === '/main' ? '장바구니' : '상품보기'}
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
