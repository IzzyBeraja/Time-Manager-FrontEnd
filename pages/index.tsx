import React from "react";
import { GetStaticProps } from "next";
import { getMarkdownByName, Markdown } from "../lib/markdown";

type Props = {
  markdown: Markdown[];
};

export const getStaticProps: GetStaticProps = async ctx => {
  const markdown = getMarkdownByName("");
  return { props: { markdown } };
};

const Main = ({ markdown }: Props) => {
  console.log(markdown);
  return <div></div>;
};

export default Main;
