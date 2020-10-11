import React from "react";
import { Text } from "@chakra-ui/core";

interface IHeadings {
  text: string;
  style?: Object;
}

export const Hero: React.FC<IHeadings> = ({ text, style }) => {
  return (
    <Text
      {...style}
      color="_green"
      textAlign="center"
      fontSize={[72, 124, "8.5vw"]}
      fontWeight="bold"
    >
      {text}
    </Text>
  );
};

export const SubHeading: React.FC<IHeadings> = ({ text, style }) => {
  return (
    <Text
      {...style}
      color="_green"
      textAlign="center"
      fontSize={[26, 32, "2.2vw"]}
      fontWeight="bold"
    >
      {text}
    </Text>
  );
};
