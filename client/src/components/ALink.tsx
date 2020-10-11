import { PseudoBox, PseudoBoxProps } from "@chakra-ui/core";
import React from "react";

interface IALink {
  text: string;
}

const Alink: React.FC<IALink & PseudoBoxProps> = React.forwardRef(
  ({ text }, props) => {
    console.log(props);
    return (
      <PseudoBox {...props} _hover={{ boxShadow: "0 2px 0 #000" }}>
        {text}
      </PseudoBox>
    );
  }
);

export default Alink;
