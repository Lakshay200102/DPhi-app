import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ErrorPage from "../assets/bgImage/Error404.jpg";

const PageNotFound = () => {
  return (
    <Box width="100vw" height="100vh">
      <Image src={ErrorPage} width="100vw" height={"100vh"} />
    </Box>
  );
};

export default PageNotFound;
