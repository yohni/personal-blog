import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Splash() {
  return (
    <Container maxW={["sm", "container.lg"]}>
      <VStack align="start" justify="center" minH="xl">
        <Heading as="h1" size="3xl">
          Hello,
          <br /> I&apos;m Yohni Finan
        </Heading>
        <Text fontSize="lg" color="gray.500">
          I&apos;m a frontend engineer at Aha Learn-to-Earn
        </Text>
      </VStack>
    </Container>
  );
}

export default Splash;
