import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Splash from "../components/Splash";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";

export default function Home({ projects }) {
  return (
    <div>
      <Splash />
      <Container maxW={["sm", "container.lg"]} py={[8, 12]}>
        <Heading as="h3" size="lg">
          Projects
        </Heading>
        <VStack align="stretch" mt={4}>
          {projects.map((item, key) => (
            <Box background="gray.800" key={key}>
              {item.frontMatter.title}
            </Box>
          ))}
        </VStack>
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("projects"));

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      projects,
    },
  };
};
