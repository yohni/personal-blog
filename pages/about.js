import { Container, Heading, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const About = () => {
  React.useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        pagePath: `/about`,
        pageTitle: "About",
      },
    });
  }, []);
  return (
    <>
      <Head>
        <title>About Me | Yohni Finan | Frontend Developer</title>
        <meta
          property="og:title"
          content="About Me | Yohni Finan | Frontend Developer"
        />
        <meta property="og:url" content="https://yohnifinan.com/about" />
        <meta property="og:image" content="/assets/Yohni.png" />
        <meta
          property="og:description"
          content="Hello, I'm Yohni Finan, a Frontend Developer from Indonesia. I'm passionate about programming and love to learn new things."
        />
      </Head>
      <Container
        display="flex"
        flexDir="column"
        justifyContent="center"
        minH={["2xl", "xl"]}
        maxW={["sm", "container.md"]}
        py={10}
      >
        <Heading as="h1" mb={10}>
          Hello, I am Yohni
        </Heading>
        <Image
          borderRadius={10}
          boxSize={32}
          mb={10}
          src="/assets/Yohni.png"
          alt="yohni"
        />
        <Text mb={4} color="gray.600">
          Hi Friends! My name Yohni Finan. I came from my beloved country
          Indonesia. I finished my study at 2020 and got a bachelor degree of
          computer science in{" "}
          <Link href="https://www.ugm.ac.id/en" isExternal>
            Universitas Gadjah Mada
          </Link>
          . And now, I&apos;m working as Frontend on{" "}
          <Link href="https://earnaha.com">Aha Learn-to-Earn</Link>.
        </Text>
        <Text>
          Is there any question?{" "}
          <Link
            _hover={{ color: "brand.main" }}
            href="mailto:yohni.123@gmail.com"
            isExternal
          >
            Lets talk
          </Link>
        </Text>
      </Container>
    </>
  );
};

export default About;
