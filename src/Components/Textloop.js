import React from 'react'
import TextLoop from "react-text-loop";
import { Text } from '@chakra-ui/layout';
function Textloop() {
    return (
        <h2>
        <TextLoop >
            <Text fontSize="l" fontWeight="bold" color="#F6E3B6">Full Stack Developer 👩‍💻</Text>
            <Text fontSize="l" fontWeight="bold" color="#75AEAC">Educator - M.A.T.  🍎</Text>
            <Text fontSize="l" fontWeight="bold" color="#F6E3B6" >Innovator  💡 </Text>
            <Text fontSize="l" fontWeight="bold" color="#75AEAC">Photographer   📸</Text>
            <Text fontSize="l" fontWeight="bold" color="#F6E3B6">Adventurer  🏕️</Text>
        </TextLoop>{" "}
        {/* and something else. */}
    </h2>
    )
}

export default Textloop
