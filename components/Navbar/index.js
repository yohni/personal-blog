import React from "react";
import {
  Container,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
          <Image boxSize={8} src="/blog.svg" alt="" />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              border="0"
            />
            <MenuList>
              <MenuItem>
                About
              </MenuItem>
              <MenuItem>
                Projects
              </MenuItem>
              <MenuItem>
                Contact
              </MenuItem>
              <MenuItem icon={<DownloadIcon />}>
                Resume
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
