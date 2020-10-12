import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/core";
import { Fade, SlideFade } from "@chakra-ui/transition";
import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const UserModal = ({ isOpen, onClose }) => {
  const [form, toggleForm] = useState("signup");
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    setIsIn(isOpen);
  }, [isOpen]);

  const close = async () => {
    toggleForm("signup");
    setIsIn(false);
    await new Promise((res) => {
      setTimeout(res, 700);
    });
    onClose();
  };

  return (
    <Fade timeout={200} in={isIn}>
      {(styles) => (
        <Modal
          closeOnOverlayClick={false}
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={close}
        >
          <ModalOverlay style={styles}>
            <SlideFade initialOffset="4px" timeout={200} in={isIn}>
              {(styles) => (
                <ModalContent
                  style={styles}
                  borderRadius="12px 12px 8px 8px"
                  maxWidth={["calc(100vw - 24px)", 560, 560]}
                  mt={[20, 24, 32]}
                >
                  <SignUpForm
                    form={form}
                    toggleForm={toggleForm}
                    onClose={close}
                  />
                  <LoginForm
                    form={form}
                    toggleForm={toggleForm}
                    onClose={close}
                  />
                </ModalContent>
              )}
            </SlideFade>
          </ModalOverlay>
        </Modal>
      )}
    </Fade>
  );
};

export default UserModal;
