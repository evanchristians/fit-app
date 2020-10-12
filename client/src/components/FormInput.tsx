import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/core";
import { useField } from "formik";
import React, { useState } from "react";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";

interface IFormInput {
  label: string;
  name: string;
  isPassword?: boolean;
}

const FormInput: React.FC<IFormInput & InputProps> = ({ ...props }) => {
  const [field, { error, touched }] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl isInvalid={!!(error && touched)}>
      <InputGroup mt={6}>
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={props.label}
          type={
            props.isPassword ? (showPassword ? "text" : "password") : "text"
          }
        />
        {props.isPassword ? (
          <InputRightElement
            children={
              <Icon
                as={showPassword ? RiEye2Line : RiEyeCloseLine}
                color={showPassword ? "_green" : "gray.300"}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            }
          />
        ) : null}
      </InputGroup>
      {error && touched ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default FormInput;
