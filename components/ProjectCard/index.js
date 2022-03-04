import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

function ProjectCard({ src, title, desc, date, slug, number }) {
  return (
    <NextLink href={slug ? `/projects/${slug}` : "/"} passHref>
      <Stack
        direction={["column", number % 2 == 0 ? "row" : "row-reverse"]}
        py="8"
        spacing={[2, 8]}
        justifyContent={["center", "space-between"]}
      >
        <div>
          <Heading>
            <Link>{title}</Link>
          </Heading>
          <Text color="gray.400" my={2}>
            {date}
          </Text>
          <Text color="gray.600" mb={2}>
            {desc}
          </Text>
        </div>
        <Image
          maxH={[320, "auto"]}
          maxW={["auto", "50%"]}
          w="100%"
          objectFit="cover"
          objectPosition="top"
          src={src}
          alt={title}
        />
      </Stack>
    </NextLink>
  );
}

export default ProjectCard;
