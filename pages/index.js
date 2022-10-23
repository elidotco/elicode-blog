import Head from "next/head";

import { PostWidget, Card, Category } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container px-4  lg:px-10 mb-8">
      {/* <FeaturedPosts /> */}
      <Head>
        <title>EliCode</title>
        <meta name="description" content="Made by elicode" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
        <html lang={"en"} />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <Card post={post.node} key={post.node.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />

            <Category />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
