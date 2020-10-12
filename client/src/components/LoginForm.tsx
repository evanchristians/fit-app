import {
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Link,
  ModalFooter,
  Button,
  Text,
  useToast,
} from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import FormInput from "./FormInput";
import * as Yup from "yup";

interface ILoginForm {
  form: string;
  toggleForm: any;
  onClose: any;
}

const LoginSchema = Yup.object().shape({
  usernameEmail: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm: React.FC<ILoginForm> = ({ form, toggleForm, onClose }) => {
  const toast = useToast();

  if (form !== "login") return null;

  return (
    <Formik
      validateOnChange={true}
      validationSchema={LoginSchema}
      initialValues={{
        usernameEmail: "",
        password: "",
      }}
      onSubmit={async (values) => {
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });

        console.error("Register functionality is not yet fully implemented...");
        console.log(
          { usernameEmail: values.usernameEmail },
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
            Login
            <ModalCloseButton display="flex" _focus={{ outline: "none" }} />
          </ModalHeader>

          <ModalBody py={4}>
            <FormInput name="usernameEmail" label="Username or Email" />
            <FormInput isPassword name="password" label="Password" />
            <Text mt={6}>
              Don't have an account?{" "}
              <Link
                color="_green"
                onClick={() => {
                  toggleForm("signup");
                }}
              >
                Sign up
              </Link>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={4} color="gray.600" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              bg="_green"
              color="white"
              type="submit"
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
