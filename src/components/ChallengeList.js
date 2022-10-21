import { CheckIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChallengeState } from "../context/ChallengeProvider";

const ChallengeList = () => {
  const { challengeArray, appliedFilter, searchQuery } = ChallengeState();
  const history = useHistory();

  const [filteredResults, setFilteredResults] = useState([]);
  const [timeChange, setTimeChange] = useState(true);

  const STATUS = (startDate, endDate) => {
    if (Date.now() > new Date(startDate) && Date.now() < new Date(endDate)) {
      return `ACTIVE`;
    } else if (Date.now() < new Date(startDate)) {
      return `UPCOMING`;
    } else {
      return `PAST`;
    }
  };

  const SUBSTATUS = (startDate, endDate) => {
    if (Date.now() > new Date(startDate) && Date.now() < new Date(endDate)) {
      return `Ends in`;
    } else if (Date.now() < new Date(startDate)) {
      return `Starts in`;
    } else {
      return `Ended on`;
    }
  };

  const TIME = (startDate, endDate) => {
    if (Date.now() > new Date(startDate) && Date.now() < new Date(endDate)) {
      var milliSecondDiff = new Date(endDate) - Date.now();
    } else if (Date.now() < new Date(startDate)) {
      milliSecondDiff = new Date(startDate) - Date.now();
    } else {
      return `${new Date(endDate).toDateString()}`;
    }

    var days = Math.floor(milliSecondDiff / 86400000);
    milliSecondDiff -= days * 86400000;
    var hrs = Math.floor(milliSecondDiff / 3600000);
    milliSecondDiff -= hrs * 3600000;
    var mins = Math.floor(milliSecondDiff / 60000);
    milliSecondDiff -= mins * 60000;

    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text as="b" fontSize="md">
            {Math.floor(days / 10) ? `${days}` : `0${days}`}
          </Text>
          <Text fontSize="xs">Days</Text>
        </Box>{" "}
        <Text> : </Text>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text as="b" fontSize="md">
            {Math.floor(hrs / 10) ? `${hrs}` : `0${hrs}`}
          </Text>
          <Text fontSize="xs">Hours</Text>
        </Box>
        <Text> : </Text>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text as="b" fontSize="md">
            {Math.floor(mins / 10) ? `${mins}` : `0${mins}`}
          </Text>
          <Text fontSize="xs">Mins</Text>
        </Box>
      </Box>
    );
  };

  const timeChangeHandler = () => {
    setTimeChange(!timeChange);
  };

  useEffect(() => {
    setInterval(timeChangeHandler, 60000);
  }, [timeChange, searchQuery]);

  useEffect(() => {
    let results = [...challengeArray];
    let prevResults = [];
    let mergedResults = [...challengeArray];

    for (let i = 0; i < appliedFilter.length; i++) {
      if (appliedFilter[i] === "Upcoming") {
        results = challengeArray.filter((challenge) => {
          return STATUS(challenge.startDate, challenge.endDate) === "UPCOMING";
        });
      } else if (appliedFilter[i] === "Active") {
        results = challengeArray.filter((challenge) => {
          return STATUS(challenge.startDate, challenge.endDate) === "ACTIVE";
        });
      } else if (appliedFilter[i] === "Past") {
        results = challengeArray.filter((challenge) => {
          return STATUS(challenge.startDate, challenge.endDate) === "PAST";
        });
      } else if (appliedFilter[i] === "Easy") {
        results = challengeArray.filter((challenge) => {
          return challenge.level === "Easy";
        });
      } else if (appliedFilter[i] === "Medium") {
        results = challengeArray.filter((challenge) => {
          return challenge.level === "Medium";
        });
      } else if (appliedFilter[i] === "Hard") {
        results = challengeArray.filter((challenge) => {
          return challenge.level === "Hard";
        });
      } else {
        results = [...challengeArray];
      }
      mergedResults = [...results, ...prevResults];
      prevResults = [...mergedResults];
    }

    let finalResults = [
      ...mergedResults
        .reduce((map, obj) => map.set(obj._id, obj), new Map())
        .values(),
    ];

    setFilteredResults([...finalResults]);
  }, [appliedFilter]);

  return (
    <Box
      display="flex"
      width="100vw"
      flexWrap="wrap"
      background="#09111e"
      flexDir="row"
      justifyContent="center"
    >
      <Box
        width="80vw"
        display="flex"
        flexDir="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {filteredResults
          .filter((item) => {
            return item.name
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
          .map((challenge) => (
            <Box
              display="flex"
              height={{ base: "75vh", md: "50vh" }}
              width={{ base: "90vw", md: "30vw", lg: "18vw" }}
              margin={{ base: 10, md: 5, lg: 10 }}
              borderRadius="lg"
              background="white"
              justifyContent="space-between"
              flexDir="column"
              alignItems="center"
              key={challenge._id}
            >
              <Image
                src={challenge.pic}
                height="35%"
                width="100%"
                borderRadius="lg"
              />
              <Box>
                <Badge
                  textAlign="center"
                  width={{ base: "20vw", md: "10vw", lg: "7vw" }}
                  padding={1}
                  colorScheme="purple"
                >
                  {STATUS(challenge.startDate, challenge.endDate)}
                </Badge>
              </Box>
              <Text as="b" fontSize="lg" textAlign="center">
                {challenge.name}
              </Text>
              <Text>{SUBSTATUS(challenge.startDate, challenge.endDate)}</Text>
              <Text>{TIME(challenge.startDate, challenge.endDate)}</Text>

              <Button
                marginBottom={5}
                leftIcon={<CheckIcon />}
                colorScheme="green"
                onClick={() => history.push(`/viewchallenge/${challenge._id}`)}
              >
                Participate Now
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ChallengeList;
