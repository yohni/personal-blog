import {
  Box,
  Button,
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

function ImagePreview({ src, alt, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
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
          <ModalHeader>Image Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody position="relative" overflowY="scroll" maxH="lg">
            <Box>
              <Image src={src} alt={alt} />
            </Box>
          </ModalBody>
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
