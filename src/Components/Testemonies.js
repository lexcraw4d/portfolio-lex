import { Flex, VStack } from '@chakra-ui/react'
import Icon from '@chakra-ui/icon'
import {Text, Box} from '@chakra-ui/layout'
import React from 'react'
import {FaGoogle, FaTwitter, FaLinkedin, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
function Social() {
    return (
        <VStack direction="row">
            
            <Box>
           
            <Text w="300px" ml="200px" >  <Icon as={FaQuoteLeft}></Icon> I was a TA for the full stack development bootcamp that Alexia attended. Alexia is very well driven and has a lot of to offer any team that she is a part of. Being a very hands on and creative individual, Alexia strives to always learn more in every role that I saw her take on in the bootcamp. I fully endorse this candidate and believe that she would be an amazing asset to your company and help build your team up!  <Icon as={FaQuoteRight}></Icon>
            <Text fontWeight="bold" fontSize="1.4rem"> - Brennan P.</Text> </Text>
            
           </Box>
          <br />
            <Box>
           
            <Text w="600px"><Icon as={FaQuoteLeft}></Icon> Lexie is a brilliant and gifted web developer who really brings out the best in everyone around her.  I had the pleasure of collaborating with her on two projects and her knowledge of both front end and backend development resulted in extraordinary project outcomes.   Lexie’s biggest strengths are her unbridled perseverance through adversity and her willingness to go above and beyond.  I highly recommend Lexie as a Full Stack web developer and she will be an asset to any company!  <Icon as={FaQuoteRight}></Icon><Text fontWeight="bold" fontSize="1.4rem"> - Rachel S.</Text> 
           
            </Text>
            
           </Box>
          <br />
            <Box>
           
            <Text w="350px" ml="100px"><Icon as={FaQuoteLeft}></Icon> Our son was in Lexie's class, and it was such a great experience! She is passionate about her students, and goes above and beyond to help them succeed. She kept us informed on our son's progress throughout the year, and offered suggestions for working with him at home. She even adapted her teaching style to best fit the learning styles represented in her classroom. We're so grateful for the opportunity we had to partner with her in our son's education. <Icon as={FaQuoteRight}></Icon><Text fontWeight="bold" fontSize="1.4rem"> - Kaylee W.</Text> 
           
            </Text>
            
           </Box>
         
           

        </VStack>
    )
}

export default Social
