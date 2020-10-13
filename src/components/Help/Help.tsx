import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import md from "content/help.md";
import readMarkdown from "scripts/readMarkdown";

const Help = () => {
  const [markdown, setMarkdown] = useState("");
  readMarkdown(md, setMarkdown);

  return (
    <div className="container markdown">
      <ReactMarkdown source={markdown} />
    </div>
  );
};

export default Help;
