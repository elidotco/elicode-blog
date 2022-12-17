/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import Head from "next/head";
const Templates = () => {
  return (
    <div
      className="text-center font-semibold text-5xl container mx-auto flex justify-center flex-col
    items-center flex-1 py-10"
    >
      {/* <Head>
        <title>
          EliCode learn Code Front-end and stay upto date // get templates for
          your future projects
        </title>
      </Head> */}
      Hello there , We are working on Bringing you the best of design and
      simplicity
      <span className="text-lg italic my-10 text-white">
        wanna contribute,{" "}
        <span
          className="decoration-dashed px-4 py-2 bg-pink-500 cursor-pointer rounded-md transition 
      duration-700 hover:bg-blue-700 mx-5"
        >
          <Link href="/contact">contact me</Link>
        </span>
      </span>
    </div>
  );
};

export default Templates;
