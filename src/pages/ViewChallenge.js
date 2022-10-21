import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { ChallengeState } from "../context/ChallengeProvider";
import LvlImg from "../assets/icons/carbon_skill-level-basic.svg";

const ViewChallenge = () => {
  const { challengeid } = useParams();
  const { challengeArray, setChallengeArray } = ChallengeState();
  const history = useHistory();

  const challengeDetails = challengeArray.find((challenge) => {
    return challenge._id === challengeid;
  });

  const SUBSTATUS = (startDate, endDate) => {
    if (Date.now() > new Date(startDate) && Date.now() < new Date(endDate)) {
      return `Ends on ${new Date(endDate).toString()}`;
    } else if (Date.now() < new Date(startDate)) {
      return `Starts on ${new Date(startDate).toString()}`;
    } else {
      return `Ended on ${new Date(endDate).toString()}`;
    }
  };

  return (
    <>
      <Box
        background="#09111e"
        height="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems={{base: 'center', md:"flex-start"}}
          width={{base:'90vw', md:"80vw"}}
          height="40vh"
          justifyContent="space-around"
        >
          <Text
            as="b"
            background="#FEE227"
            width="fit-content"
            fontSize={{base: 'xs',md: 'sm', lg: 'md' }}
            paddingTop={2}
            paddingBottom={2}
            paddingRight={{base:'2', md: '10'}}
            borderRadius="lg"
            paddingLeft={{base:'2', md: '10'}}
          >
            {SUBSTATUS(challengeDetails.startDate, challengeDetails.endDate)}
          </Text>
          <Text color="white" as="b" fontSize={{base: '3xl', md:"5xl"}} textAlign={{base: 'center', md: 'left'}}>
            {challengeDetails.name}
          </Text>
          <Text
            display="flex"
            color="#09111e"
            background="white"
            width="fit-content"
            borderRadius="lg"
            paddingRight={7}
            paddingLeft={7}
            paddingTop={1}
            paddingBottom={1}
          >
            <Image src={LvlImg} paddingRight={1} /> {challengeDetails.level}
          </Text>
        </Box>
      </Box>
      <Box
        background="white"
        boxShadow="md"
        height="10vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box
          width="80vw"
          height="10vh"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            borderBottom="4px"
            display="flex"
            alignItems="flex-end"
            width="fit-content"
            height="10vh"
            paddingLeft={5}
            paddingRight={5}
            paddingBottom={3}
            borderColor="whatsapp.600"
          >
            <Text as="b" fontSize={{base: 'md', md:"lg"}}>
              Overview
            </Text>
          </Box>
          <Box>
            <Button
              variant="solid"
              background="whatsapp.400"
              color="white"
              paddingRight={{base: 5, md: 10}}
              paddingLeft={{base: 5, md: 10}}
              marginRight={{base: 2, md: 5}}
              onClick={() =>
                history.push(`/editchallenge/${challengeDetails._id}`)
              }
            >
              Edit
            </Button>
            <Button
              variant="outline"
              color="red"
              border="2px"
              borderColor="red"
              paddingRight={{base: 4, md: 8}}
              paddingLeft={{base: 4, md: 8}}
              onClick={() => {
                const challengeArrayPostDeletion = challengeArray.filter(
                  (challenge) => {
                    return challenge._id !== challengeid;
                  }
                );
                setChallengeArray([...challengeArrayPostDeletion]);
                history.push("/");
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        width="100vw"
        height="fit-content"
        justifyContent="center"
      >
        <Box width="80vw" marginTop={10}>
          <Text fontSize="md" color="darkgray">
            {challengeDetails.description}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ViewChallenge;