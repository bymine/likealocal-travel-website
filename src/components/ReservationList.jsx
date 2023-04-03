import React from 'react';

import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';

import ReservationCard from './ReservationCard';

const ReservationList = ({ reservations }) => {
  return (
    <TableContainer w={'100%'} flex={1}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>제품</Th>
            <Th>가격</Th>
            <Th>수량</Th>
            <Th>총액</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {reservations.map((reservation) => (
            <ReservationCard key={reservation.idx} reservation={reservation} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ReservationList;
