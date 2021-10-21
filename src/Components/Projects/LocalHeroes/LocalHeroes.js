import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Text,
} from "@chakra-ui/react";
import "./projectCard.css";
import localHeroes from "../../../Assets/city.jpg";
const LocalHeroes = () => {
  return (
    <Flex className="cols" flexDirection="column">
      <Box className="col" ontouchstart="this.classList.toggle('hover');">
        <Box className="container">
          <Flex
            className="front"
            style={{
              background: `url(${localHeroes})`,
              WebkitBackgroundSize: "20rem",
              backgroundPositionY: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#FBF2DD",
              color: "#FBF2DD",
              fontSize: "3rem",
            }}
          >
            <Box className="inner">
              <p className="para">Local Heroes</p>
            </Box>
          </Flex>
          <Box className="back" style={{ backgroundColor: "pink" }}>
            <div className="inner">
              <p style={{ fontSize: "13px" }}>
                Enhancing your travel experience by connecting travelers to
                locals.
              </p>
              <br />
              <Text>

              
                <Link
                  color="#FBF2DD"
                  href="https://localheroes21.herokuapp.com/"
                >
                  Local Heroes Deployed Site
                </Link>
              </Text>
            </div>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default LocalHeroes;
