import React from "react";
import "./MenuItem.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();

  return (
    <div className={size ? `${size} menu-item` : 'menu-item'} onClick={() => navigate(`${linkUrl}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
