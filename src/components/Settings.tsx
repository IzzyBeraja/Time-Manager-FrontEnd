import React from "react";

interface Props {}

const Settings = () => {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-sm">
          <button type="button" className="btn btn-primary">
            FS
          </button>
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-secondary mx-2">
            Dark
          </button>
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-dark">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
