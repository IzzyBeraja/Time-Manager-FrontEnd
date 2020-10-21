import React from "react";
import ReactMarkdown from "react-markdown";
import { GetStaticProps } from "next";
import { getMarkdownByName } from "lib/markdown";

import styles from "./Help.module.scss";

type Props = {
  markdown: string;
};

const Help = ({ markdown }: Props) => {
  return (
    <div className={`container markdown ${styles.markdown}`}>
      <ReactMarkdown source={markdown} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const markdown = getMarkdownByName("help.md").fileContents;
  return { props: { markdown } };
};

export default Help;
