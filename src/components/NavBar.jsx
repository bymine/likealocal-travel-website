import React from 'react';
import { Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Flex>
      <Text fontSize='3xl'>Travel</Text>
      <Spacer />
      <Button onClick={() => navigate('/reservation')}>장바구니</Button>
    </Flex>
  );
};

export default NavBar;
