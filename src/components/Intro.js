import { Box, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Link as ReachLink } from "react-router-dom";
import Rocket from "../assets/icons/PicsArt_04-14-04.42 1.svg";

const Intro = () => {
  return (
    <Box background="#09111e" height="70vh" width="100vw" display='flex' justifyContent='center' alignItems='center'>
      <Box
        width={{base: '90vw', md: '80vw', lg: '80vw'}}
        display="flex"
        flexDir="row"
        justifyContent="space-between"
      >
        <Box width={{base: '100%', md: '100%', lg: '50%'}}>
          <Text fontSize={{base: '4xl', md: "5xl"}} as="b" color="white">
            Accelerate Innovation with Global AI Challenges
          </Text>
          <Text color="white" marginTop={10} marginBottom={10} fontSize={{base: 'md', md: 'xl'}}>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </Text>
          <Link background='white' textDecoration='none' style={{textDecoration: 'none'}} _hover={{background: '#F5F5F5'}} padding={2} as={ReachLink} to='/createchallenge' borderRadius="xl">
            <Text as="b"> Create Challenge</Text>
          </Link>
        </Box>
        <Box display={{base: 'none', md: 'none', lg: 'block'}}>
          <Image src={Rocket}></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;