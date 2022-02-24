import React, { useContext, useState } from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import PathNameContext from "../../context/PathNameContext";
import { authentication } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, cartDropdownShowing }) => {
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
        <CartIcon />
      </div>
      {cartDropdownShowing ? null : <CartDropdown />}
    </div>
  );
};

// This function grabs the "state" of the redux store and maps whatever properties you want to the props of this component
const mapStateToProps = ({user, cart}) => ({
  currentUser: user.currentUser,
  cartDropdownShowing: cart.hidden
})

export default connect(mapStateToProps)(Header);
