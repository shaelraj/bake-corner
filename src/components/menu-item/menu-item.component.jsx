import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "../../util/app.utils";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  let navigate = useNavigate();
  return (
  <div
    className={`${size} menu-item`}
    onClick={() => navigate(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
)};

export default withRouter(MenuItem);
