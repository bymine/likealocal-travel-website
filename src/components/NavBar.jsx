import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { PAGE, NAVBAR_ITEMS } from '../constants';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Flex px={16} py={8} align={'center'}>
      <Link to={PAGE.MAIN}>
        <Heading fontSize={28}>라이크어로컬</Heading>
      </Link>
      <Flex ml={28} align={'center'} gap={8}>
        {NAVBAR_ITEMS.map((item) => (
          <Link to={PAGE.COMING} key={item}>
            <Text color={'#494949'} fontSize={16} fontWeight={600}>
              {item}
            </Text>
          </Link>
        ))}
      </Flex>
      <Spacer />
      <Flex align={'center'} gap={8}>
        <Link to={PAGE.COMING}>
          <Person2OutlinedIcon />
        </Link>
        <Link to={PAGE.RESERVATION}>
          <ShoppingCartOutlinedIcon
            style={{
              color: pathname === PAGE.RESERVATION ? '#F6C445' : '#000000',
            }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;
