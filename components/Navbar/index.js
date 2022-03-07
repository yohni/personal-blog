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
          <Link role="group" href="/">
            <Image
              _groupHover={{
                boxShadow: "0px 2px 20.9392px rgba(186, 19, 88, 0.42)",
                transition: "all 0.2s ease-in-out",
              }}
              borderRadius={5}
              boxSize={8}
              src="/blog.svg"
              alt=""
            />
          </Link>
          <Show breakpoint="(min-width: 641px)">
            <HStack spacing={5}>
              <Link
                _hover={{
                  color: "transparent",
                  bgGradient: "linear(to-r, brand.main, brand.dark)",
                  bgClip: "text",
                }}
                href="/about"
              >
                About
              </Link>
              <Link
                _hover={{
                  color: "transparent",
                  bgGradient: "linear(to-r, brand.main, brand.dark)",
                  bgClip: "text",
                }}
                href="/projects"
              >
                Projects
              </Link>
              {/* <Link
                _hover={{
                  color: "transparent",
                  bgGradient: "linear(to-r, brand.main, brand.dark)",
                  bgClip: "text",
                }}
                href="/contact"
              >
                Contact
              </Link> */}
              <Link
                role="group"
                _hover={{
                  color: "transparent",
                  bgGradient: "linear(to-r, brand.main, brand.dark)",
                  bgClip: "text",
                }}
                href="/yohni_resume.pdf"
                isExternal
              >
                <Flex align="center">
                  <DownloadIcon _groupHover={{ color: "brand.main" }} mr={2} />
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
                {/* <Link href="/contact">
                  <MenuItem>Contact</MenuItem>
                </Link> */}
                <Link href="/yohni_resume.pdf" isExternal>
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
