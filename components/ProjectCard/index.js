import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Dot from "../DotDivider";
import ImagePreview from "../ImagePreview";

function ProjectCard({ src, title, desc, date, slug, number, tags }) {
  return (
    <Stack
      direction={["column", number % 2 == 0 ? "row" : "row-reverse"]}
      py="8"
      spacing={[2, 8]}
      justifyContent={["center", "space-between"]}
    >
      <div>
        <Heading>
          <NextLink href={slug ? `/projects/${slug}` : "/"} passHref>
            <Link
              _hover={{
                color: "transparent",
                bgGradient: "linear(to-r, brand.main, brand.dark)",
                bgClip: "text",
                textShadow: "0px 2px 10px rgba(186, 19, 88, 0.3)",
              }}
            >
              {title}
            </Link>
          </NextLink>
        </Heading>
        <Flex alignItems="baseline">
          <Text color="gray.400" my={2}>
            {date}
          </Text>
          <Dot />
          <Link>
            <Tooltip placement="top-start" label="show in github">
              <Text color="gray.500">
                Github <ExternalLinkIcon mb={1} />
              </Text>
            </Tooltip>
          </Link>
          <Dot />
          <Link>
            <Tooltip placement="top-start" label="show in github">
              <Text color="gray.500">
                Live <ExternalLinkIcon mb={1} />
              </Text>
            </Tooltip>
          </Link>
        </Flex>
        <Text color="gray.600" mb={2}>
          {desc}
        </Text>
        {tags && (
          <HStack>
            {tags.map((tag) => (
              <Tag key={tag} variantColor="red" size="sm">
                {tag}
              </Tag>
            ))}
          </HStack>
        )}
      </div>
      <Box maxW={["auto", "50%"]} w="100%">
        <ImagePreview
          w="100%"
          maxH={[320, "auto"]}
          objectFit="cover"
          objectPosition="top"
          src={src}
          alt={title}
        />
      </Box>
    </Stack>
  );
}

export default ProjectCard;
