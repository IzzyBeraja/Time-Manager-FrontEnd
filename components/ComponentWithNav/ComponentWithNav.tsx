import React from "react";
import Navbar from "components/Navbar";

type Props = {
  Component: React.ElementType;
};

const ComponentWithNav = (Component: React.ElementType) => {
  return () => {
    return (
      <div className="app-container tight">
        <div className="row tight">
          <div className="col tight">
            <Component />
          </div>
          <div className="col-2 nav-col tight">
            <Navbar />
          </div>
        </div>
      </div>
    );
  };
};

export default ComponentWithNav;
