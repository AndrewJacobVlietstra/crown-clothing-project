import React, { useContext } from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import PathNameContext from "../../context/PathNameContext";
import { authentication } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  const pathContext = useContext(PathNameContext);

  return (
    <div className="header">
      <Link to="/" className="logo-container" title="Home">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link
          to="/"
          className={`${
            pathContext.currentPath === "/" ? "selected" : ""
          } option`}
          onClick={pathContext.handlePathChange()}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className={`${
            pathContext.currentPath === "/shop" ? "selected" : ""
          } option`}
          onClick={pathContext.handlePathChange()}
        >
          SHOP
        </Link>
        <Link
          to="/contact"
          className={`${
            pathContext.currentPath === "/contact" ? "selected" : ""
          } option`}
          onClick={pathContext.handlePathChange()}
        >
          CONTACT
        </Link>
        {currentUser ? (
          <a className="option" onClick={() => authentication.signOut()}>
            SIGN OUT
          </a>
        ) : (
          <Link
            to="/signIn"
            className={`${
              pathContext.currentPath === "/signIn" ? "selected" : ""
            } option`}
            onClick={pathContext.handlePathChange()}
          >
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
