import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Splash from "../components/Splash";
import { Box, Container, Heading, Image, VStack } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

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
            <ProjectCard
              key={key}
              title={item.frontMatter.title}
              desc={item.frontMatter.description}
              src={item.frontMatter.thumbnailUrl}
              slug={item.slug}
              date={item.frontMatter.date}
              number={key}
            />
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
