import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/core";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const UserModal = ({ isOpen, onClose }) => {
  const [form, toggleForm] = useState("signup");

  return (
    <Modal
      closeOnOverlayClick={false}
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={() => {
        toggleForm("signup");
        onClose();
      }}
    >
      <ModalOverlay>
        <ModalContent
          borderRadius="12px 12px 8px 8px"
          maxWidth={["calc(100vw - 24px)", 560, 560]}
          mt={[20, 24, 32]}
        >
          <SignUpForm form={form} toggleForm={toggleForm} onClose={onClose} />
          <LoginForm form={form} toggleForm={toggleForm} onClose={onClose} />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default UserModal;
