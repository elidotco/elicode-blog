import Head from "next/head";

import { PostWidget, Card, Category } from "../../components";
import FeaturedPosts from "../../sections/FeaturedPosts";
import { getPosts } from "../../services";

export default function Home({ posts }) {
  return (
    <div className="container px-4   mx-auto  w-full items-center mb-8">
      {/* <FeaturedPosts /> */}
      <Head>
        <title>EliCode learn Code Front-end and stay upto date</title>
        <meta name="theme-color" content="black" />
        <meta
          name="description"
          content="Want to learn how to code but don't know where to start, or  you want to keep up with the current tips and tricks of front-end development then you have arrived"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
