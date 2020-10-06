import React from "react";
import Card from "./common/Card";

const Profile = () => {
  return (
    <div className="container">
      <div>
        <h1>My Profile</h1>
        <p>
          View detailed statistics about the progress you have made! Keep
          checking back as you keep taking tests to see how you are doing.
        </p>
        <br />
      </div>
      <div>
        <h2>All Time Stats:</h2>
        <div className="row">
          <div className="col">
            <Card title="Total Time:" details="00:00:00" />
          </div>
          <div className="col">
            <Card title="Total Samples:" details="0" />
          </div>
          <div className="col">
            <Card title="Top Speed:" details="0.0" />
          </div>
          <div className="col">
            <Card title="Average Speed:" details="0.0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
