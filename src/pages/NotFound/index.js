import React from "react";
import "./style.css";
import { NotFoundImage } from "../../assets";

const NotFound = () => {
  return (
    <div className="Not-found">
      <h1 style={{ marginBottom: "20px" }}>Oops! We ran into some problems</h1>
      <img src={NotFoundImage} className="Image-not-found" alt="Not found 404" />
    </div>
  );
};

export default NotFound;
