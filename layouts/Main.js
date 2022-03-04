import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Flex direction="column">
      <Navbar />
      <Box mb={20}>
        <>{children}</>
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
