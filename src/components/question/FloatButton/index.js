/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../../actions";
import { AddIcon, CopyIcon, ImageIcon } from "../../../assets";
import "./style.css";

const FloatButton = ({ itemID }) => {
  const dispatch = useDispatch();

  const handleAddQuestion = () => {
    dispatch(addQuestion(itemID));
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
