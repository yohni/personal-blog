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
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <nav>
      <Container maxW={["sm", "container.lg"]}>
        <Flex py={2} justifyContent="space-between" alignItems="center">
          <Image boxSize={8} src="https://via.placeholder.com/100" alt="" />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              border="0"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
