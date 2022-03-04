import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function ProjectCard({ src, title, desc, time }) {
  return (
    <Stack direction={["column", "row"]}>
      <div>
        <Heading>{title}</Heading>
        <Text mb={2}>{desc}</Text>
      </div>
      <Image
        maxH={[320, "auto"]}
        maxW={["auto", "45%"]}
        w="100%"
        objectFit="cover"
        objectPosition="top"
        src={src}
        alt={title}
      />
    </Stack>
  );
}

export default ProjectCard;
