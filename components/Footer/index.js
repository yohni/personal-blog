import { Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import React from "react";
import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

function Footer() {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container maxW={["sm", "container.lg"]} pb={2}>
        <Flex
          direction={["column", "row-reverse"]}
          py={2}
          justifyContent={["center", "space-between"]}
          alignItems="center"
        >
          <HStack justify="center" alignItems="center" spacing={[2, 4]} py={2}>
            <Link
              href="https://www.linkedin.com/in/achmad-yohni-wahyu-f-669107131/"
              isExternal
            >
              <Icon as={RiLinkedinLine} />
            </Link>
            <Link href="https://github.com/yohni" isExternal>
              <Icon as={RiGithubLine} />
            </Link>
            <Link href="mailto:yohni.123@gmail.com" isExternal>
              <Icon as={RiMailLine} />
            </Link>
          </HStack>
          <Text as="small" color="gray.400">
            &copy; 2022 &middot; Built with all{" "}
            <Text as="small" color="red.500">
              &hearts;
            </Text>{" "}
            I have.
          </Text>
        </Flex>
      </Container>
    </footer>
  );
}

export default Footer;
