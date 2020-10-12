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
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormInput from "./FormInput";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});

const LoginSchema = Yup.object().shape({
  usernameEmail: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().required("Required"),
});

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

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
                setTimeout(resolve, 2000);
              });
              isLoginForm
                ? console.log({
                    usernameEmail: values.usernameEmail,
                    password: values.password,
                  })
                : console.log({
                    username: values.username,
                    email: values.email,
                    password: values.password,
                  });
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
