import fs from "fs";
import path from "path";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    console.log(markdownWithMeta);
    return {
      slug,
    };
  });

  console.log(posts);

  return {
    props: {},
  };
}
