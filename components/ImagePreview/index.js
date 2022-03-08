import {
  Box,
  Button,
  Center,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { keyframes } from "@emotion/react";

function ImagePreview({ src, alt, name, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showHint, setShowHint] = React.useState(true);
  const upDown = keyframes`
    from { transform: translateY(0px); }
    to { transform: translateY(-50px); }
  `;

  React.useEffect(() => {
    const hintTimeout = setTimeout(() => {
      setShowHint(false);
    }, 4000);

    return () => clearTimeout(hintTimeout);
  }, []);
  return (
    <>
      <Image
        border="solid"
        borderColor="blackAlpha.200"
        loading="lazy"
        cursor="pointer"
        onClick={() => onOpen()}
        src={src}
        alt={alt}
        {...rest}
      />
      <Modal size="xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>{name || "Preview"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody position="relative" overflowY="scroll" maxH="lg">
            <Box pos="relative">
              <Image src={src} alt={alt} />
            </Box>
          </ModalBody>
          <Box
            opacity={showHint ? 1 : 0}
            zIndex={showHint ? 1 : -1}
            transition="opacity 0.3s"
            bg="blackAlpha.600"
            pos="absolute"
            top={16}
            left={6}
            right={6}
            bottom={16}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Center
              display="flex"
              flexDirection="column"
              animation={`${upDown} 1s ease 2 forwards`}
            >
              <Icon color="white" as={MdOutlineTouchApp} />
              <Text as="b" fontSize="md" color="white">
                Scroll me
              </Text>
            </Center>
          </Box>
          <ModalFooter>
            <Button
              _hover={{
                transform: "translateY(-1px)",
              }}
              color="white"
              bgGradient="linear(to-r, brand.main, brand.dark)"
              onClick={onClose}
            >
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImagePreview;
