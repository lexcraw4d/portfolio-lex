import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link, Heading } from "@chakra-ui/react";
import "./Projects.css"
import localHeroes from "../Assets/localheroes.jpeg"
const Projects = () => {
  return (
    <div className="cols">
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{background: `url(${localHeroes})`, WebkitBackgroundSize: '14rem'}}>
          <div className="inner">
            <p className="para">Autumn</p>
          </div>
        </div>
        <div className="back" style={{backgroundColor: "pink"}}>
          <div className="inner">
            <p>Celebrate the Beautiful shades of Fall. Features multiple Brown tones layered beneath splashed of saturated Yellow and Orange color</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;