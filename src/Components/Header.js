import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import resume from '../Assets/resume.pdf'
import picture from '../Assets/lexblue.png'
function Header() {
    const {colorMode} = useColorMode()
    const isDark = colorMode === 'dark'; 
    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)")
    return (
        <Stack>
           
        <Image ml="400"position="fixed" bg="blue.200" opacity="0.8" w="300px" h="300px" rounded="full" src={picture} z-index= "-1"alignSelf="flex-end" ></Image>
 
            <Box mt={isNotSmallerScreen ? "0" : 16 } align='flex-start'>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="300px" p={isNotSmallerScreen ? "32" : "0"} alignSelf = "flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">
                        Hi, I am
                    </Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" >
                        Lexie Crawford
                    </Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}  >
                    Full Stack Web Developer & M.A.T. 
                    </Text>
                    <a href={resume} download="LexieCrawfordResume" rel="noreferrer" target='_blank'><Button mt={8} colorScheme="blue" type="submit" download='resume'>Hire Me</Button> </a>
            </Flex>
                </Box>

        </Stack>
    )
}

export default Header
