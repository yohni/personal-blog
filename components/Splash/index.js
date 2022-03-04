import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Splash() {
  return (
    <Container maxW={["sm", "container.lg"]}>
      <VStack align="start" justify="center" minH="2xl">
        <Heading as="h1" size="3xl">
          Hello,
          <br /> I&apos;m Yohni Finan
        </Heading>
        <Text fontSize="lg" color="gray.500" maxW="lg">
          I&apos;m a frontend engineer at{" "}
          <Link href="http://earnaha.com" isExternal>
            Aha Learn-to-Earn <ExternalLinkIcon mx="2px" />
          </Link>
          . Here is a little place to share everything I&apos;ve learned and I
          wish, it will be helpful for you.
        </Text>
      </VStack>
    </Container>
  );
}

export default Splash;
