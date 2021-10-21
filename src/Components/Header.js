import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import Textloop from "./Textloop";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import PortfolioPic from "./PortfolioPic";
import resume from "../Assets/resume.pdf";
import React from "react";
import { Spacer } from "@chakra-ui/react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "light";

  return (
    <Stack>
      <Flex
        direction={["column", "row", "row", "row"]}
        w={["100%", "85%", "50%", "100%"]}
        justifyContent="center"
   
     
      >
        <Box>
          <Text fontSize="3xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r,  #F6E3B6, #75aeac,  )"
            bgClip="text"
          >
            Lexie Crawford
          </Text>
          <br />
          <br />
          <Textloop></Textloop>
          <br />
          <a
            href={resume}
            download="LexieCrawfordResume"
            rel="noreferrer"
            target="_blank"
          >
            <Button mt={8} bg="#8F545A" type="submit" download="resume">
              Hire Me
            </Button>{" "}
          </a>
        </Box>
        <Box>
        <PortfolioPic></PortfolioPic>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
