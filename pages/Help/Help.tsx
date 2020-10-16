import React from "react";
import ReactMarkdown from "react-markdown";
import ComponentWithNav from "components/Home";

const Help = () => {
  return (
    <div className="container markdown">
      <ReactMarkdown source={""} />
    </div>
  );
};

export default ComponentWithNav(Help);
