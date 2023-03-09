import React from 'react';
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleNavigate() {
    navigate(pathname === '/main' ? '/reservation' : '/main');
  }

  return (
    <Flex px={8} py={4}>
      <Link to='/main'>
        <Text fontSize='3xl'>Travel</Text>
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
