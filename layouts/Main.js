import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <>{children}</>
      </Container>
    </>
  );
};

export default MainLayout;
