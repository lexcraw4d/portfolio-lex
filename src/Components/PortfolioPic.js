
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";

import me from "../Assets/lex32.png";

import React from "react";


function PortfolioPic() {
  return (
    <Flex alignItems="center"  direction={["column", "row", "row", "row"]}
    w={["100%", "85%", "50%", "30%"]}>
      <Circle margin="50px">
        <Image
          borderRadius="full"
          backgroundColor="#FBF2DD"
          
          boxShadow="lg"
          boxSize="200px"
          src={me}
          zIndex="1"
         
        />
      </Circle>
      
    </Flex>
  );
}

export default PortfolioPic;
