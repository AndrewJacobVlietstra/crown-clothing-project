import "./HomePage.styles.scss";
import React from "react";
import Directory from "../../components/Directory/Directory";

const HomePage = ({ user }) => {
  return (
    <div className="homepage">
      { user ? <span className="greet-user-title">Welcome, <strong>{user.displayName}</strong> </span> : null }
      <Directory />
    </div>
  );
};

export default HomePage;
