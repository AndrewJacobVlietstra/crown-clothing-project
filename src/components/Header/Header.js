import "./Header.styles.scss";

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { cartDropdownHiddenSelector } from "../../redux/cart/cart.selectors";
import { currentUserSelector } from "../../redux/user/User.selectors";
import { currentPathSelector } from "../../redux/path/path.selectors";

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
            window.location.pathname.charAt(currentPath.length - 1) === "/" ? "selected" : ""
          } option`}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className={`${
            window.location.pathname.includes("shop") ? "selected" : ""
          } option`}
        >
          SHOP
        </Link>
        <Link
          to="/contact"
          className={`${
            window.location.pathname.includes("contact") ? "selected" : ""
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
              window.location.pathname.includes("signIn") ? "selected" : ""
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
const mapStateToProps = (state) => ({
  currentUser: currentUserSelector(state),
  cartDropdownHidden: cartDropdownHiddenSelector(state),
  currentPath: currentPathSelector(state)
});

export default connect(mapStateToProps)(Header);
