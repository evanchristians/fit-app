import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormInput from "./FormInput";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Your username should be at least four(4) characters long")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), undefined],
      "Passwords do not match"
    )
    .required("Required"),
});

const LoginSchema = Yup.object().shape({
  usernameEmail: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const toast = useToast();

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent
          borderRadius="12px 12px 8px 8px"
          maxWidth={["calc(100vw - 24px)", 560, 560]}
          mt={32}
        >
          <Formik
            validationSchema={isLoginForm ? LoginSchema : SignupSchema}
            initialValues={{
              usernameEmail: "",
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => {
                setTimeout(resolve, 500);
              });

              if (isLoginForm) {
                console.error(
                  "Login functionality is not yet fully implemented..."
                ),
                  console.log(
                    {
                      usernameEmail: values.usernameEmail,
                    },
                    { password: values.password }
                  );
                return toast({
                  title: "Sorry!",
                  description: "We could not log you in. {check console}",
                  status: "error",
                  duration: 4000,
                  isClosable: true,
                });
              } else {
                console.error(
                  "Register functionality is not yet fully implemented..."
                ),
                  console.log(
                    { username: values.username },
                    { email: values.email },
                    { password: values.password }
                  );
                return toast({
                  title: "Sorry!",
                  description:
                    "We could not create this account. {check console}",
                  status: "error",
                  duration: 4000,
                  isClosable: true,
                });
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalHeader
                  borderRadius="8px 8px 0 0"
                  py={0}
                  height={50}
                  display="flex"
                  alignItems="center"
                  bg="_green"
                  color="white"
                  fontWeight="medium"
                >
                  {isLoginForm ? "Login" : "Sign Up"}
                  <ModalCloseButton
                    display="flex"
                    _focus={{ outline: "none" }}
                  />
                </ModalHeader>

                <ModalBody py={4}>
                  <FormInput
                    show={isLoginForm ? false : true}
                    name="username"
                    label="Username"
                  />
                  <FormInput
                    show={isLoginForm ? false : true}
                    name="email"
                    label="Email"
                  />
                  <FormInput
                    show={isLoginForm ? true : false}
                    name="usernameEmail"
                    label="Username or Email"
                  />
                  <FormInput isPassword show name="password" label="Password" />
                  <FormInput
                    isPassword
                    show={isLoginForm ? false : true}
                    name="confirmPassword"
                    label="Confirm Password"
                  />
                  {isLoginForm ? (
                    <Text mt={6}>
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
                    <Text mt={6}>
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
                  <Button
                    bg="_green"
                    color="white"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    {isLoginForm ? "Login" : "Sign Up"}
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default LoginModal;
