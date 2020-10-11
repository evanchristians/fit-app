import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/core";
import React from "react";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent borderRadius={12} overflow="hidden" maxWidth={["calc(100vw - 24px)", 560, 560]}>
            <ModalHeader
              py={0}
              height={50}
              display="flex"
              alignItems="center"
              bg="_green"
              color="white"
              fontWeight="medium"
            >
              Modal Title
              <ModalCloseButton display="flex" _focus={{ outline: "none" }} />
            </ModalHeader>

            <ModalBody py={10}>
              <Text fontSize={18} mb={2}>HelloWorld</Text>
              <Input mb={4} placeholder="Lorem Ipsum" />
              <Text fontSize={18} mb={2}>HelloWorld</Text>
              <Input placeholder="Lorem Ipsum" />
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default LoginModal;
