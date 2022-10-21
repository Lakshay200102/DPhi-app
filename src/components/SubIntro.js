import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import AIIcon from "../assets/icons/Group 1000002515.svg";
import BinaryIcon from "../assets/icons/Group 1000002516.svg";
import RobotIcon from "../assets/icons/Group 1000002518.svg";

const SubIntro = () => {
  return (
    <Box
      display={{base: 'none', md: 'flex'}}
      width="100vw"
      height="30vh"
      background="#04090f"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        width="80vw"
        height="10vh"
        justifyContent="space-between"
      >
        <Box display='flex' flexDir='row' alignItems='center'>
          <Image src={AIIcon} />
          <Box display='flex' flexDir='column' color='white' paddingLeft={5}>
            <Text as='b' fontSize={{md: 'xl', lg: '2xl' }}>100K+</Text>
            <Text>AI model submissions</Text>
          </Box>
        </Box>

        <Divider orientation="vertical" />
        <Box display='flex' flexDir='row' alignItems='center'>
          <Image src={BinaryIcon} />
          <Box display='flex' flexDir='column' color='white' paddingLeft={5}>
            <Text as='b' fontSize={{md: 'xl', lg: '2xl' }}>50K+</Text>
            <Text>Data Scientists</Text>
          </Box>
        </Box>
        <Divider orientation="vertical" />
        <Box display='flex' flexDir='row' alignItems='center'>
          <Image src={RobotIcon} />
          <Box display='flex' flexDir='column' color='white' paddingLeft={5}>
            <Text as='b' fontSize={{md: 'xl', lg: '2xl' }}>100+</Text>
            <Text fontSize={{md: 'sm', lg: 'md' }}>AI Challenges hosted</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubIntro;