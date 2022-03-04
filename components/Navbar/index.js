import React from "react";
import {
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import {
  DownloadIcon,
  ExternalLinkIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <nav>
      <Container maxW={["sm", "container.lg"]}>
        <Flex py={2} justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Image boxSize={8} src="/blog.svg" alt="" />
          </Link>
          <Show breakpoint="(min-width: 641px)">
            <HStack spacing={5}>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/dakdakj" isExternal>
                <Flex align="center">
                  <DownloadIcon mr={2} />
                  Resume
                </Flex>
              </Link>
            </HStack>
          </Show>
          <Show breakpoint="(max-width: 640px)">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                border="0"
              />
              <MenuList>
                <Link href="/about">
                  <MenuItem>About</MenuItem>
                </Link>
                <Link href="/projects">
                  <MenuItem>Projects</MenuItem>
                </Link>
                <Link href="/contact">
                  <MenuItem>Contact</MenuItem>
                </Link>
                <Link href="/daaada">
                  <MenuItem icon={<DownloadIcon />}>Resume</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Show>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
