import {
  Button,
  Link,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  useToast,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import * as Yup from "yup";
import FormInput from "./FormInput";

interface ISignUpForm {
  form: string;
  toggleForm: any;
  onClose: any;
}

const SignUpForm: React.FC<ISignUpForm> = ({ form, toggleForm, onClose }) => {
  const toast = useToast();
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Your username should be at least four(4) characters long")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords do not match")
      .required("Required"),
  });

  if (form !== "signup") return null;

  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        email: "",
        username: "",
        password: "",
      }}
      onSubmit={async (values) => {
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });

        console.error("Register functionality is not yet fully implemented...");
        console.log(
          { username: values.username },
          { email: values.email },
          { password: values.password }
        );
        return toast({
          title: "Sorry!",
          description: "We could not create this account. {check console}",
          status: "error",
          duration: 4000,
          isClosable: true,
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
            Sign up
            <Button
              p={0}
              variant="ghost"
              ml="auto"
              onClick={onClose}
              display="flex"
              _focus={{ outline: "none" }}
              _hover={{
                bg: "_green200",
              }}
              _active={{
                bg: "_green200",
              }}
            >
              <RiCloseLine size={24}/>
            </Button>
          </ModalHeader>

          <ModalBody py={4}>
            <FormInput name="username" label="Username" />
            <FormInput name="email" label="Email" />
            <FormInput isPassword name="password" label="Password" />
            <FormInput
              isPassword
              name="confirmPassword"
              label="Confirm Password"
            />
            <Text mt={6}>
              Already have an account?{" "}
              <Link
                color="_green"
                onClick={() => {
                  toggleForm("login");
                }}
              >
                Log in
              </Link>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              fontWeight="medium"
              mr={4}
              color="gray.600"
              variant="ghost"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              bg="_green"
              color="white"
              fontWeight="medium"
              _hover={{
                bg: "_green200",
              }}
              type="submit"
              isLoading={isSubmitting}
            >
              Sign up
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
