import React from "react";
import "./style.css";
import image404 from "../../assets/images/404.jpg";

const NotFound = () => {
  return (
    <div className="Not-found">
      <h1>Oops! We ran into some problems</h1>
      <img src={image404} className="Image-not-found" alt="logo" />
    </div>
  );
};

export default NotFound;
