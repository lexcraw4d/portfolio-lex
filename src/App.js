import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./Components/Header"
import Profile from "./Components/Profile"
import Social from "./Components/Social"


function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark" ? "#483F4A" : "#FBF2DD"
  return (
    <VStack p={5} bg={isDark}>
      <Flex w="80%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color= "cosmic">LC</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> :  <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      {/* <Social></Social> */}
      <Profile></Profile>
    
    </VStack>
  
  );
}

export default App;