import React from "react";
import { GetStaticProps } from "next";
import { getSortedPostsData, Post } from "../lib/posts";
import Practice from "./Practice";

type Props = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps = async ctx => {
  const posts = getSortedPostsData();
  return { props: { posts } };
};

const Main = ({ posts }: Props) => {
  return <Practice markdown={posts[1]} />;
};

export default Main;
