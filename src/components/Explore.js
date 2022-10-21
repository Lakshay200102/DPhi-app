import {
  Box,
  Button,
  Checkbox,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { ChallengeState } from "../context/ChallengeProvider";

const Explore = () => {
  const { appliedFilter, setAppliedFilter, searchQuery, setSearchQuery } =
    ChallengeState();

  const checkBoxHandler = (event) => {
    const newFilter = event.target.value;
    if (appliedFilter.includes(newFilter)) {
      const listOfFilters = appliedFilter.filter(
        (individualFilter) => individualFilter !== newFilter
      );
      setAppliedFilter([...listOfFilters]);
    } else {
      setAppliedFilter([newFilter, ...appliedFilter]);
    }
  };

  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box
      width="100vw"
      height="50vh"
      background="#04090f"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      flexDirection="column"
      padding="5vw"
    >
      <Text as="b" color="white" fontSize="3xl" marginBottom={10}>
        Explore Challenges
      </Text>
      <Box width="70vw" height="fit-content">
        <InputGroup
          display="flex"
          flexDir="center"
          justifyContent="space-between"
        >
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
            paddingLeft={1}
            paddingRight={1}
          />
          <Input
            type="text"
            placeholder="Search"
            width="70%"
            background="white"
            borderRadius="lg"
            value={searchQuery}
            onChange={searchQueryHandler}
          />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              display="flex"
              alignItems="center"
              textAlign="left"
              width="25%"
              borderRadius="lg"
            >
              Filter
            </MenuButton>
            <MenuList width="25%">
              <Text px={2}>Status</Text>
              <MenuItem>
                <Checkbox
                  size={{ base: "sm", md: "md" }}
                  colorScheme="green"
                  checked={appliedFilter.includes("All") ? true : false}
                  value="All"
                  onChange={checkBoxHandler}
                >
                  All
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  size={{ base: "sm", md: "md" }}
                  colorScheme="green"
                  checked={appliedFilter.includes("Active") ? true : false}
                  value="Active"
                  onChange={checkBoxHandler}
                >
                  Active
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  size={{ base: "sm", md: "md" }}
                  colorScheme="green"
                  checked={appliedFilter.includes("Upcoming") ? true : false}
                  value="Upcoming"
                  onChange={checkBoxHandler}
                >
                  Upcoming
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  size={{ base: "sm", md: "md" }}
                  colorScheme="green"
                  checked={appliedFilter.includes("Past") ? true : false}
                  value="Past"
                  onChange={checkBoxHandler}
                >
                  Past
                </Checkbox>
              </MenuItem>
              <Divider orientation="horizontal" />
              <Text px={2}>Level</Text>
              <MenuItem>
                <Checkbox
                  size={{ base: "sm", md: "md" }}
                  colorScheme="green"
                  checked={appliedFilter.includes("Easy") ? true : false}
                  value="Easy"
                  onChange={checkBoxHandler}
                >
                  Easy
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  size={{ base: "sm", md: "md" }}
                  colorScheme="green"
                  checked={appliedFilter.includes("Medium") ? true : false}
                  value="Medium"
                  onChange={checkBoxHandler}
                >
                  Medium
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  size={{ base: "sm", md: "md" }}
                  colorScheme="green"
                  checked={appliedFilter.includes("Hard") ? true : false}
                  value="Hard"
                  onChange={checkBoxHandler}
                >
                  Hard
                </Checkbox>
              </MenuItem>
            </MenuList>
          </Menu>
        </InputGroup>
        <Box
          display="flex"
          flexDirection="row"
          height="fit-content"
          width="inherit"
          flexWrap="wrap"
          justifyContent={{ base: "space-between", md: "flex-start" }}
          marginTop={5}
        >
          {appliedFilter &&
            appliedFilter.map((fil) => {
              return (
                <Box
                  key={Math.floor(100000 * Math.random())}
                  padding={2}
                  borderRadius="3xl"
                  background="#8C92AC"
                  width={{ base: "31%", md: "20%", lg: "14%" }}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  margin={1}
                >
                  <Text fontSize="lg" color="white">
                    {fil}
                  </Text>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;