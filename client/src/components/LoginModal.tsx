import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Icon,
} from "@chakra-ui/core";
import { RiEyeCloseLine, RiEye2Line } from "react-icons/ri";
import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmHidden, setIsConfirmHidden] = useState(true);

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent
            borderRadius={12}
            overflow="hidden"
            maxWidth={["calc(100vw - 24px)", 560, 560]}
          >
            <ModalHeader
              py={0}
              height={50}
              display="flex"
              alignItems="center"
              bg="_green"
              color="white"
              fontWeight="medium"
            >
              {isLoginForm ? "Login" : "Sign Up"}
              <ModalCloseButton display="flex" _focus={{ outline: "none" }} />
            </ModalHeader>

            <ModalBody py={10}>
              <Input
                display={isLoginForm ? "none" : "block"}
                mb={4}
                placeholder="Username"
              />
              <Input
                display={isLoginForm ? "none" : "block"}
                mb={4}
                placeholder="Email"
              />
              <Input
                display={isLoginForm ? "block" : "none"}
                mb={4}
                placeholder="Username or Email"
              />
              <InputGroup>
                <Input
                  type={isPasswordHidden ? "password" : "text"}
                  mb={4}
                  placeholder="password"
                />
                <InputRightElement
                  children={
                    <Icon
                      as={isPasswordHidden ? RiEyeCloseLine : RiEye2Line}
                      color={isPasswordHidden ? "gray.300" : "_green"}
                      onClick={() => {
                        setIsPasswordHidden(!isPasswordHidden);
                      }}
                    />
                  }
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type={isConfirmHidden ? "password" : "text"}
                  display={isLoginForm ? "none" : "block"}
                  mb={4}
                  placeholder="Confirm Password"
                />
                <InputRightElement
                  children={
                    <Icon
                      as={isConfirmHidden ? RiEyeCloseLine : RiEye2Line}
                      color={isConfirmHidden ? "gray.300" : "_green"}
                      onClick={() => {
                        setIsConfirmHidden(!isConfirmHidden);
                      }}
                    />
                  }
                />
              </InputGroup>

              {isLoginForm ? (
                <Text width="100%">
                  Don't have an account?{" "}
                  <Link
                    color="_green"
                    onClick={() => {
                      setIsLoginForm(false);
                    }}
                  >
                    Sign Up
                  </Link>
                </Text>
              ) : (
                <Text>
                  Already have an account?{" "}
                  <Link
                    color="_green"
                    onClick={() => {
                      setIsLoginForm(true);
                    }}
                  >
                    Log in
                  </Link>
                </Text>
              )}
            </ModalBody>

            <ModalFooter>
              <Button
                mr={3}
                fontWeight="medium"
                color="gray.500"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button bg="_green" color="white">
                {isLoginForm ? "Login" : "Sign Up"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default LoginModal;
