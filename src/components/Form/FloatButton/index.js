/* eslint-disable react/prop-types */
import React from "react";
import { AddIcon, ImageIcon } from "../../../assets";
import "./style.css";

const FloatButton = ({ itemID, addQuestion, style, floatRef }) => {
  const handleAddQuestion = () => {
    addQuestion(itemID);
  };

  const handleAddImage = () => {
    console.log("Add image");
  };

  return (
    <div className="Float-button-container" style={style} ref={floatRef}>
      <div className="Icon-add" title="Add question" onClick={handleAddQuestion}>
        <AddIcon />
      </div>
      <div className="Icon-image" title="Add image" onClick={handleAddImage}>
        <ImageIcon />
      </div>
    </div>
  );
};

export default FloatButton;
