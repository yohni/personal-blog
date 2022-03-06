import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  Heading,
  Container,
  Text,
  Flex,
  Link,
  Tooltip,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Dot from "../../components/DotDivider";
import ImagePreview from "../../components/ImagePreview";

const ProjectPage = ({
  frontMatter: { title, date, githubUrl, liveUrl, tags },
  mdxSource,
}) => {
  return (
    <Container maxW={["sm", "container.md"]} py={10}>
      <Heading as="h1" mb={5}>
        {title}
      </Heading>
      <Flex>
        <Text color="gray.500" mb={5}>
          {date}
        </Text>
        {githubUrl && (
          <>
            <Dot />
            <Link href={githubUrl} isExternal>
              <Tooltip placement="top-start" label="Show in github.">
                <Text color="gray.500">
                  Github <ExternalLinkIcon mb={1} />
                </Text>
              </Tooltip>
            </Link>
          </>
        )}
        {liveUrl && (
          <>
            <Dot />
            <Link href={liveUrl} isExternal>
              <Tooltip placement="top-start" label="Open live website.">
                <Text color="gray.500">
                  Live <ExternalLinkIcon mb={1} />
                </Text>
              </Tooltip>
            </Link>
          </>
        )}
      </Flex>
      <MDXRemote
        {...mdxSource}
        components={{ SyntaxHighlighter, ImagePreview }}
      />
      {tags && (
        <HStack my={20}>
          {tags.map((tag) => (
            <Tag key={tag} size="sm">
              {tag}
            </Tag>
          ))}
        </HStack>
      )}
    </Container>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default ProjectPage;
