import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ projects }) {
  return (
    <div>
      {projects.map((item, key) => (
        <div key={key}>{item.frontMatter.title}</div>
      ))}
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
