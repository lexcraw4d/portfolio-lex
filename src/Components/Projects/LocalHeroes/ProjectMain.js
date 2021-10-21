import React from 'react'
import { chakra, Box, Flex, useColorModeValue, Link, Heading } from "@chakra-ui/react";
import LocalHeroes from './LocalHeroes'
import HelpingHands from './HelpingHands';
function ProjectMain() {
    return (
        <Flex flexDir="column" mt={8}>
        <Box display="flex" flexWrap="wrap"  mr={5}direction="column"  alignItems="space-between" >
          <Heading textAlign="center" id="heading" color="whiteAlpha.300">
            Projects
          </Heading>
          <LocalHeroes />
          <HelpingHands />
          </Box>
          </Flex>
    )
}

export default ProjectMain
