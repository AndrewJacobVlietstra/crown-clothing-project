import "./HomePage.styles.scss";
import React from "react";
import Directory from "../../components/Directory/Directory";
import { connect } from "react-redux";

const HomePage = ({ currentUser }) => {
  return (
    <div className="homepage">
      { currentUser ? <span className="greet-user-title">Welcome, <strong>{currentUser.displayName}</strong> </span> : null }
      <Directory />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HomePage);
