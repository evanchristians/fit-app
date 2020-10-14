import { Text } from "@chakra-ui/core";
import React from "react";

interface IHeadings {
  text: string;
  isCentered?: boolean;
  style?: Object;
}

export const Hero: React.FC<IHeadings> = ({
  children,
  text,
  style,
  isCentered = true,
}) => {
  return (
    <Text
      {...style}
      display="flex"
      color="_green"
      width="100%"
      justifyContent="center"
      alignItems="center"
      textAlign={isCentered ? "center" : "left"}
      fontSize={[72, 124, "8.5vw"]}
      fontWeight="bold"
    >
      {children}
      {text}
    </Text>
  );
};

export const SubHeading: React.FC<IHeadings> = ({
  children,
  text,
  style,
  isCentered = true,
}) => {
  return (
    <Text
      {...style}
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      color="_green"
      textAlign={isCentered ? "center" : "left"}
      fontSize={[26, 32, "2.2vw"]}
      fontWeight="medium"
    >
      {children}
      {text}
    </Text>
  );
};
