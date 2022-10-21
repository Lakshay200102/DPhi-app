import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Participate = ({ PC }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="column"
      width="100vw"
      height="fitContent"
      background="whitesmoke"
      padding={10}
    >
      <Text as="b" fontSize={{ base: "2xl", md: "4xl" }}>
        Why Participate in{" "}
        <span style={{ color: "darkgreen" }}>AI Challenges?</span>
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} padding={10}>
        {PC.map((content) => (
          <Box
            background="#dcedc9"
            width={{base: '100%', md: '38vw'}}
            height="fit-content"
            maxHeight="fit-content"
            display="flex"
            flexDir="column"
            margin={2}
            key={content.id}
            paddingTop={10}
            paddingBottom={10}
            paddingLeft={5}
            paddingRight={5}
            borderRadius="lg"
          >
            <Image src={content.img} width={37} height={37} />
            <Text as="b" fontSize="2xl" marginTop={2} marginBottom={2}>
              {content.title}
            </Text>
            <Text color="gray" fontSize="xl">
              {content.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Participate;