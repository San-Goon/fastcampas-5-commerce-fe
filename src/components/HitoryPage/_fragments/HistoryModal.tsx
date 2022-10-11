import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Text,
} from '@chakra-ui/react';

const HistoryModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Text textStyle="md" fontWeight="700">
            주문취소 하시겠습니까?
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="primary" variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="primary" onClick={onClose}>
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HistoryModal;