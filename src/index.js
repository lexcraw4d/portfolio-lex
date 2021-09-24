import { ChakraProvider, ColorModeScript, Flex } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Flex>
      <App />
      </Flex>
     
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
