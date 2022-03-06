import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Splash from "../components/Splash";
import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  textDecoration,
  VStack,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import ButtonGradient from "../components/Buttons/ButtonGradient";

export default function Home({ projects }) {
  return (
    <div>
      <Splash />
      <Container maxW={["sm", "container.lg"]} py={[8, 12]}>
        {/* projects */}
        <Box>
          <Heading
            bgGradient="linear(to-r, brand.main, brand.dark)"
            color="transparent"
            bgClip="text"
            textShadow="0px 2px 30px rgba(186, 19, 88, 0.3)"
            as="h2"
            size="xl"
            mb={8}
          >
            Projects
          </Heading>
          <VStack align="stretch" mt={4}>
            {projects.slice(0, 5).map((item, key) => (
              <ProjectCard
                key={key}
                title={item.frontMatter.title}
                desc={item.frontMatter.description}
                src={item.frontMatter.thumbnailUrl}
                slug={item.slug}
                date={item.frontMatter.date}
                number={key}
                tags={item.frontMatter.tags}
                githubUrl={item.frontMatter.githubUrl}
                liveUrl={item.frontMatter.liveUrl}
              />
            ))}
          </VStack>
          {projects?.length > 5 && (
            <Center mt={[4, 10]}>
              <Link _hover={{ textDecoration: "none" }} href="/projects">
                <ButtonGradient>Show More</ButtonGradient>
              </Link>
            </Center>
          )}
        </Box>
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
