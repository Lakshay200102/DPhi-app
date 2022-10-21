import {
  Box,
  Button,
  Icon,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ChallengeState } from "../context/ChallengeProvider";
import cloudUpload from "../assets/icons/bxs_cloud-upload.svg";
import imageFilled from '../assets/icons/bi_image-fill.svg'
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ChallengeDetails = () => {
  const { challengeid } = useParams();
  const { challengeArray, setChallengeArray } = ChallengeState();
  const history = useHistory();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [desc, setDesc] = useState("");
  const [pic, setPic] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    if (challengeid) {
      const challengeDetails = challengeArray.find((challenge) => {
        return challenge._id === challengeid;
      });
      setName(challengeDetails.name);
      setStartDate(challengeDetails.startDate);
      setEndDate(challengeDetails.endDate);
      setPic(challengeDetails.pic);
      setDesc(challengeDetails.description);
      setLevel(challengeDetails.level);
    }
  }, [challengeid]);

  const postDetails = (pics) => {
    if (pics) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "dephi-app");
      data.append("cloud_name", "captaincomder");
      fetch("https://api.cloudinary.com/v1_1/captaincomder/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        });
    }
  };

  const editHandler = async (event) => {
    event.preventDefault();

    if (!name || !startDate || !endDate || !desc || !pic || !level) {
      return;
    }

    const challenge = await challengeArray.find(
      (challenge) => challenge._id === challengeid
    );
    challenge._id = challengeid;
    challenge.name = name;
    challenge.startDate = startDate;
    challenge.endDate = endDate;
    challenge.pic = pic ? pic : challenge.pic;
    challenge.description = desc;
    challenge.level = level;

    const newChallengeArray = await challengeArray.filter(
      (challenge) => challenge._id !== challengeid
    );

    setChallengeArray([challenge, ...newChallengeArray]);
    history.push("/");
  };

  const newChallengeHandler = async (event) => {
    event.preventDefault();

    if (!name || !startDate || !endDate || !desc || !pic || !level) {
      return;
    }

    const challenge = {
      _id: Math.floor(1000000 * Math.random()),
      pic: pic,
      name: name,
      startDate: startDate,
      endDate: endDate,
      description: desc,
      level: level,
    };

    await setChallengeArray([challenge, ...challengeArray]);
    history.push("/");
  };

  return (
    <Box padding={16}>
      <Text as="b" fontSize="3xl">
        Challenge Details
      </Text>
      <Text marginTop={10} marginBottom={3}>
        Challenge Name
      </Text>
      <Input
        type="text"
        width={{base: '100%', md: "30vw"}}
        borderColor="black"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Text marginTop={10} marginBottom={3}>
        Start Date
      </Text>
      <Input
        type="datetime-local"
        width={{base: '100%', md: "30vw"}}
        borderColor="black"
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
      />
      <Text marginTop={10} marginBottom={3}>
        End Date
      </Text>
      <Input
        type="datetime-local"
        width={{base: '100%', md: "30vw"}}
        borderColor="black"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
      />
      <Text marginTop={10} marginBottom={3}>
        Description
      </Text>
      <Textarea
        size="sm"
        width={{base: '100%', md: "30vw"}}
        borderColor="black"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <Text marginTop={10} marginBottom={3}>
        Image
      </Text>

      <Image
        src={pic}
        alt="Error"
        width='100'
        height='40'
        display={pic ? "block" : "none"}
        marginTop={5}
        marginBottom={5}
      />
      <Box
        textAlign="center"
        width="fit-content"
        border="2px"
        borderColor="gray"
        background="#FFFDD0"
        _hover={{ background: "lightgray" }}
        borderRadius="lg"
        paddingTop={3}
        paddingBottom={3}
        paddingRight={20}
        paddingLeft={20}
      >
        <label htmlFor="picInp" style={{ cursor: "pointer" }}>
          <Text fontSize={{base: 'md', md: "lg"}} display="flex" alignItems={"center"}>
            <Image src={imageFilled} marginRight={2} display={pic?'block':'none'} />
            {pic?"Change Image" : 'Upload'}
            <Icon as={ArrowForwardIcon} marginLeft={2} display={pic?'block':'none'} />
            <Image src={cloudUpload} display={pic?'none':'block'} marginLeft={2} />
          </Text>
        </label>
      </Box>
      <Input
        opacity={0}
        display="none"
        type="file"
        id="picInp"
        accept="image/*"
        border="none"
        onChange={(e) => postDetails(e.target.files[0])}
      />

      <Text marginTop={10} marginBottom={3}>
        Level
      </Text>
      <Select
        placeholder="Select option"
        width="30vw"
        borderColor="black"
        variant="filled"
        onChange={(e) => setLevel(e.target.value)}
        value={level}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </Select>
      <Button
        background="whatsapp.500"
        color="white"
        _hover={{ background: "whatsapp.600" }}
        marginTop={10}
        marginBottom={3}
        type="submit"
        onClick={challengeid ? editHandler : newChallengeHandler}
      >
        {challengeid ? "Save Changes" : "Create Challenge"}
      </Button>
    </Box>
  );
};

export default ChallengeDetails;
