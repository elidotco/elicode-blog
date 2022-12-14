import React, { useState, useEffect } from "react";
import moment from "moment";
import { getrecentPosts, getSimilarPosts } from "../services";
import Image from "next/image";
import Link from "next/link";

const PostWidget = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getrecentPosts().then((result) => {
        setRelatedPost(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12 ">
      <h2 className="text-xl mb-8 font-semibold pb-4 border-b">
        {slug ? "Related Post" : "Recent posts"}
      </h2>
      {relatedPosts.map((post) => {
        return (
          <div key={post.title} className="flex items-center mb-4 w-full ">
            <div className="w-16 flex-none">
              <Image
                alt={post.title}
                src={post.featuredImage.url}
                className="align-middle object-cover rounded-full"
                height="60px"
                width="60px"
                unoptimized
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="font-xs text-gray-500">
                {moment(post.createdAt).format("MMM, DD ,YY")}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-md"
                key={post.title}
              >
                {post.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
