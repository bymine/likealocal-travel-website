import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
} from '@chakra-ui/react';
const TravelModal = ({ travel, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{travel.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={travel.mainImage} alt="" />
            <Text>고유번호: {travel.idx}</Text>
            <Text>상품 제목: {travel.name}</Text>
            <Text>상품 설명: {travel.description}</Text>
            <Text>상품 등록 시간: {travel.registrationDate}</Text>
            <Text>상품 금액: {travel.price}</Text>
            <Text>최대 구매 수량: {travel.maximumPurchases}</Text>
            <Text>사용 가능 지역: {travel.spaceCategory}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TravelModal;
