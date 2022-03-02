import "./HomePage.styles.scss";
import React from "react";
import Directory from "../../components/Directory/Directory";
import { connect } from "react-redux";

const HomePage = ({ currentUser }) => {
  return (
    <div className="homepage">
      { currentUser ? <h2 className="greet-user-title">Welcome, <strong>{currentUser.displayName}</strong> </h2> : null }
      <Directory />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HomePage);
