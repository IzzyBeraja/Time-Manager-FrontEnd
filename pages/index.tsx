import React from "react";
import { GetStaticProps } from "next";
import { getMarkdown, Markdown } from "../lib/markdown";
import Practice from "./Practice";

type Props = {
  markdown: Markdown[];
};

export const getStaticProps: GetStaticProps = async ctx => {
  const markdown = getMarkdown();
  return { props: { markdown } };
};

const Main = ({ markdown }: Props) => {
  return <div></div>;
};

export default Main;
