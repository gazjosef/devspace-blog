import Layout from "../../components/Layout";

export default function BlogPage() {
  return (
    <Layout>
      <h1>Blog</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
