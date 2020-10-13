import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import md from "content/help.md";

const Help = () => {
  const [markdown, setMarkdown] = useState("");

  fetch(md)
    .then(r => r.text())
    .then(text => setMarkdown(text));

  return (
    <div className="container markdown">
      <ReactMarkdown source={markdown} />
    </div>
  );
};

export default Help;
