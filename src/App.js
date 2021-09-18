import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout'
import { IconButton, useColorMode } from '@chakra-ui/react'
import {FaMoon, FaSun, FaTwitter, FaGithub, FaLinkedin  } from 'react-icons/fa'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Testemonies from './Components/Testemonies'
import { StickyContainer, Sticky } from 'react-sticky'
function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
      <StickyContainer>
    <VStack padding={5}>
       
      <Flex  w="100%" justifyContent=
    "space-between">
        <Heading mr="16rem" size="md" fontWeight="semibold" color="cyan.400">
         
      <IconButton mr={2}icon={<FaLinkedin/>} isRound ="true"></IconButton>
      <IconButton mr={2} icon={<FaGithub />} isRound="true"></IconButton>
      <IconButton mr={2} icon={<FaTwitter />} isRound="true"></IconButton>
      
        </Heading>
      <IconButton icon={isDark? <FaSun /> : <FaMoon />} justifyContent="center" isRound="true" onClick={toggleColorMode}></IconButton>

      </Flex>
    
      <Header></Header>
      <Profile></Profile>
      <Testemonies></Testemonies>
    </VStack>
     </StickyContainer>
  );
}

export default App;
