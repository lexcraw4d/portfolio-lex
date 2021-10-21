import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  top,
  Link,
  Text,
  bgSize
} from "@chakra-ui/react";
import "./projectCard.css";
import helpinghands from "../../../Assets/hhproject.png";
import helpinghandsbg from "../../../Assets/hhbg.png";
const HelpingHands = () => {
  return (
    <Flex className="cols" flexDirection="column">
      <Box className="col" ontouchstart="this.classList.toggle('hover');">
        <Box className="container">
          <Flex
            className="front" 
            style={{
              background: `url(${helpinghandsbg})`,
              WebkitBackgroundSize: "20rem",
              backgroundPositionY: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#FBF2DD",
              marginRight:'4px',
              color: "#FBF2DD",
              fontSize: "3rem",
            }}
          >
            <Box className="inner"
            
            >
              <p className="para"
             >Helping Hands</p>
            </Box>
          </Flex>
          <Box className="back" style={{ background: `url(${helpinghands})` ,WebkitBackgroundSize:'20rem',  backgroundPositionX: "center",
          }}>
            <div className="inner">
              <p style={{ fontSize: "10px"  }}>
                {/* Connecting communities through grassroot efforts <br />
                to assist those experiencing homelessness. */}
              </p>
              <Text style={{marginTop:"12rem", alignSelf:"center"}}>
                <Link
                  color="#FBF2DD"
              
                  href="https://helping-hands-deux.herokuapp.com/"
                >
                  Helping Hands
                </Link>
              </Text>
            </div>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default HelpingHands;
