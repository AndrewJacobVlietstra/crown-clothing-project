import React from "react";
import "./MenuItem.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import PathNameContext from "../../context/PathNameContext";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  const pathContext = useContext(PathNameContext);

  return (
    <Link to={linkUrl} className={size ? `${size} menu-item` : 'menu-item'} onClick={pathContext.handlePathChange()}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
};

export default MenuItem;
