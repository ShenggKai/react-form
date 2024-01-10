import React from "react";
import { AddIcon, CopyIcon, ImageIcon } from "../../../assets";
import "./style.css";

const FloatButton = () => {
  const handleAddQuestion = () => {
    console.log("Add question");
  };

  const handleAddImage = () => {
    console.log("Add image");
  };

  const handleDuplicate = () => {
    console.log("Duplicate");
  };

  return (
    <div className="Float-button-container">
      <div className="Icon-add" title="Add question" onClick={handleAddQuestion}>
        <AddIcon />
      </div>
      <div className="Icon-image" title="Add image" onClick={handleAddImage}>
        <ImageIcon />
      </div>
      <div className="Icon-copy" title="Duplicate" onClick={handleDuplicate}>
        <CopyIcon />
      </div>
    </div>
  );
};

export default FloatButton;
