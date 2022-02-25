import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { authentication } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, cartDropdownHidden, currentPath }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container" title="Home">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link
          to="/"
          className={`${
            currentPath === "/" ? "selected" : ""
          } option`}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className={`${
            currentPath === "/shop" ? "selected" : ""
          } option`}
        >
          SHOP
        </Link>
        <Link
          to="/contact"
          className={`${
            currentPath === "/contact" ? "selected" : ""
          } option`}
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
              currentPath === "/signIn" ? "selected" : ""
            } option`}
          >
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartDropdownHidden ? null : <CartDropdown />}
    </div>
  );
};

// This function grabs the "state" of the redux store and maps whatever properties you want to the props of this component
const mapStateToProps = ({ user, cart, path }) => ({
  currentUser: user.currentUser,
  cartDropdownHidden: cart.hidden,
  currentPath: path.currentPath
});

export default connect(mapStateToProps)(Header);
