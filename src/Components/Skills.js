import React from "react";
import { Flex, Box, Heading, Icon } from "@chakra-ui/react";
import "./skills.css";
import { isJsxClosingElement } from "typescript";
function Skills() {
  const iconEl = [];
  const iconSkill = [
    <i class="devicon-bash-plain"></i>,
    <i class="devicon-bootstrap-plain-wordmark"></i>,
    <i class="devicon-css3-plain-wordmark"></i>,
    <i class="devicon-express-original-wordmark"></i>,
    <i class="devicon-git-plain-wordmark"></i>,
    <i class="devicon-github-original-wordmark"></i>,
    <i class="devicon-google-plain-wordmark"></i>,
    <i class="devicon-graphql-plain-wordmark"></i>,
    <i class="devicon-handlebars-plain-wordmark"></i>,
    <i class="devicon-heroku-line-wordmark"></i>,
    <i class="devicon-html5-plain-wordmark"></i>,
    <i class="devicon-javascript-plain"></i>,
    <i class="devicon-jest-plain"></i>,
    <i class="devicon-jquery-plain-wordmark"></i>,
    <i class="devicon-markdown-original"></i>,
    <i class="devicon-mysql-plain-wordmark"></i>,
    <i class="devicon-mongodb-plain-wordmark"></i>,
    <i class="devicon-nodejs-plain-wordmark"></i>,
    <i class="devicon-npm-original-wordmark"></i>,
    <i class="devicon-react-original-wordmark"></i>,
    <i class="devicon-sass-original"></i>,
    <i class="devicon-webpack-plain-wordmark"></i>,
    <i class="devicon-vscode-plain-wordmark"></i>,
  ];
  iconSkill.forEach((item, index) => {
    iconEl.push(
      <Box display="flex" flexShrink="1" flexWrap="wrap"  justifyContent = "center"m={1} key={index}>
        {item}
      </Box>
    );
  });
  return (
    <Box display="flex" mt={8}>
      <Flex>
        <Box display="flex"  mr={5}direction="row"  alignItems="space-between" >
          <Heading textAlign="center" id="heading" color="whiteAlpha.300">
            Skills
          </Heading>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        {iconEl}
      </Flex>
    </Box>
  );
}

export default Skills;
