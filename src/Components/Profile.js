import { Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Stack, Circle, Flex, Box, Text, Link } from "@chakra-ui/layout";
import { ImAirplane } from "react-icons/im";
import { GiShakingHands } from "react-icons/gi";
import Icon from '@chakra-ui/icon'
function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width : 600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      width="100%"
     
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="10" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl" >
          3+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          {" "}
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="space-around"  py="100">
        {/* <Text fontWeight="bold" fontSize="2xl">
          Full Stack Web Developer, <br />
          specialized 
          in MERN &
          <br />
          Educator, M.A.T.
        </Text> */}
       
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} flexWrap="wrap">
      <br />
       
        <Box mr="2" >
          <Flex rounded='xl' direction="row" mt={4} bg="cyan.400" opacity="" h="30vh" w="30vh" justify="flex-end"
          _hover={{ bg: "teal.400"}}>
            <Icon as={ImAirplane} color="white" p="4" w="20" h="24" ></Icon>
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold"
            > Local Heroes</Text>
          </Flex>
          </Box>
          <Link href= "https://helping-hands-deux.herokuapp.com/" isExternal>
          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-start" _hover={{ bg: "teal.400", }}>
                        <Icon color="purple" p="4" as={GiShakingHands} w="24" h="24" />
                        <Text color="purple" p="4" fontSize="xl" fontWeight="semibold">
                            Helping Hands
                        </Text>
            </Flex>
            </Link>
   
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
