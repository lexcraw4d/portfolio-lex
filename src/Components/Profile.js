import React from "react";

import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";
import Skills from "./Skills";
import LocalHeroes from "./Projects/LocalHeroes/LocalHeroes";
import ProjectMain from "./Projects/LocalHeroes/ProjectMain";

function Profile() {
  // const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={["column", "column"]}
      w={["100%", "75%"]}
      alignItems="flex-end"
    >
      <Box
        direction={["column", "column"]}
        w={["100%", "75%"]}
        alignSelf="center"
        mb={6}
      >
        <Heading fontWeight="extrabold" color="#F6E3B6" mt={2} size="4xl">
          3+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box direction={["column", "column"]} w={["100%", "85%"]}>
        <Text fontWeight="bold" fontSize="2xl">
          Full Stack Web Developer, specialized in MERN
        </Text>
        <Flex direction={["column", "column"]} w={["100%", "85%"]} mt={8}>
          <Flex bg="blue.400" justify="space-around">
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
          <Flex
            bg="gray.100"
            justify="space-around"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Flutter Apps
            </Text>
          </Flex>
          <Flex
            bg="gray.100"
            justify="space-around"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>
          <Skills />
          <ProjectMain />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
