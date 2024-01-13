/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Dropdown, Line, Switch, OptionInput, FloatButton, Text } from "../../components";
import { useDispatch } from "react-redux";
import {
  changeTypeQuestion,
  removeQuestion,
  changeTitle,
  changeDescription,
  duplicateQuestion,
} from "../../actions";
import { BinIcon, ImageIcon, CopyIcon } from "../../assets";
import "./style.css";

const Question = ({ formContent }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState("0000");

  const handleItemClick = (itemID) => {
    setIsActive(itemID);
  };

  const handleTypeChange = (itemID, selectedOption) => {
    dispatch(changeTypeQuestion(itemID, selectedOption));
  };

  const handleRemoveQuestion = (itemID) => {
    dispatch(removeQuestion(itemID));
  };

  const handleTitleChange = (event, itemID) => {
    dispatch(changeTitle(itemID, event.target.value));
  };

  const handleDescriptionChange = (event, itemID) => {
    dispatch(changeDescription(itemID, event.target.value));
  };

  const handleDuplicate = (field) => {
    dispatch(
      duplicateQuestion(field.itemID, field.title, field.type, field.listOption, field.required)
    );
  };

  return (
    <div className="Form-container">
      {formContent.map((field) => {
        return (
          <div key={field.itemID} className="Item-container">
            {field.type === "form-title" ? (
              <div
                className={`Title-container ${isActive === field.itemID ? "active" : ""}`}
                onClick={() => handleItemClick(field.itemID)}
              >
                <input
                  value={field.title}
                  placeholder="Form title"
                  className={
                    isActive === field.itemID
                      ? "Active-title-container Title-container-title"
                      : "Title-container-title"
                  }
                  onChange={(event) => handleTitleChange(event, field.itemID)}
                />
                <input
                  value={field.description}
                  placeholder="Form description"
                  className={
                    isActive === field.itemID
                      ? "Active-title-container Title-container-description"
                      : "Title-container-description"
                  }
                  onChange={(event) => handleDescriptionChange(event, field.itemID)}
                />
              </div>
            ) : (
              <div
                className={`Question ${isActive === field.itemID ? "active" : ""}`}
                onClick={() => handleItemClick(field.itemID)}
              >
                {isActive !== field.itemID ? (
                  <Text size={18} color="#202124" fontWeight={400}>
                    {field.title}
                  </Text>
                ) : (
                  <div className="Question-header">
                    <input
                      placeholder="Question"
                      value={field.title}
                      className="Question-title"
                      onChange={(event) => handleTitleChange(event, field.itemID)}
                      onFocus={(event) => event.target.select()}
                    />
                    <div className="Add-image-icon">
                      <ImageIcon />
                    </div>
                    <Dropdown
                      onChange={(selectedOption) => handleTypeChange(field.itemID, selectedOption)}
                    />
                  </div>
                )}
                <div
                  className={isActive === field.itemID ? "Question-main" : "Inactive-question-main"}
                >
                  <OptionInput field={field} isActive={isActive} />
                </div>
                {isActive === field.itemID && (
                  <>
                    <Line />
                    <div className="Question-footer">
                      <div className="Duplicate-icon" onClick={() => handleDuplicate(field)}>
                        <CopyIcon />
                      </div>
                      <div
                        className="Delete-icon"
                        onClick={() => handleRemoveQuestion(field.itemID)}
                      >
                        <BinIcon />
                      </div>
                      <Line height={32} width={1} />
                      <Switch label="Required" itemID={field.itemID} />
                    </div>
                  </>
                )}
              </div>
            )}
            {isActive === field.itemID ? (
              <FloatButton field={field} />
            ) : (
              <div className="Placeholder-button"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Question;