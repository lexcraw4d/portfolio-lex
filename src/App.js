import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout'
import { IconButton, useColorMode } from '@chakra-ui/react'
import {FaMoon, FaSun, FaTwitter, FaGithub, FaLinkedin  } from 'react-icons/fa'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Social from './Components/Social'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <VStack padding={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          LC
        </Heading>
      <Spacer></Spacer>
      <IconButton icon={<FaLinkedin/>} isRound ="true"></IconButton>
      <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
      <IconButton ml={2} icon={<FaTwitter />} isRound="true"></IconButton>
      <IconButton ml= {8}icon={isDark? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
