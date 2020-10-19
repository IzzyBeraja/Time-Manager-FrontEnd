import React from "react";
import ReactMarkdown from "react-markdown";
import { GetStaticProps } from "next";
import ComponentWithNav from "components/ComponentWithNav";
import { getMarkdownByName } from "../lib/markdown";

type Props = {
  markdown: string;
};

const Help = ({ markdown }: Props) => {
  return (
    <div className="container markdown">
      <ReactMarkdown source={markdown} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const markdown = getMarkdownByName("help.md").fileContents;
  return { props: { markdown } };
};

export default Help;
