import { HStack } from '@chakra-ui/react'
import Icon from '@chakra-ui/icon'
import React from 'react'
import {FaGoogle, FaTwitter, FaLinkedin, FaQuoteLeft} from 'react-icons/fa'
function Social() {
    return (
        <HStack>
            <Icon as={FaGoogle}></Icon>
            <Icon as={FaTwitter}></Icon>
            <Icon as={FaQuoteLeft}></Icon>
        </HStack>
    )
}

export default Social
