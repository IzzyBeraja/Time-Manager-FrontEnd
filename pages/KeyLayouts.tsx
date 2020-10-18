import React from "react";
import ComponentWithNav from "components/Home";
import Link from "next/link";

const KeyLayouts = () => {
  return (
    <div>
      <h1 className="container">KeyLayouts</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
    </div>
  );
};

export default ComponentWithNav(KeyLayouts);
