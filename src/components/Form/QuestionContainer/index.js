/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Dropdown, Line, Switch, OptionInput, Text } from "../../../components";
import { BinIcon, ImageIcon, CopyIcon, DragIcon } from "../../../assets";
import "./style.css";

const QuestionContainer = ({
  activeID,
  field,
  questionRef,
  addOption,
  removeOption,
  changeTextOption,
  changeQuestionType,
  changeRequired,
  removeQuestion,
  duplicateQuestion,
  handleItemClick,
  handleTitleChange,
}) => {
  const [selected, setSelected] = useState("paragraph");
  const [hoverID, setHoverID] = useState("0");

  const handleTypeChange = (itemID, selectedOption) => {
    changeQuestionType(itemID, selectedOption);
    setSelected(selectedOption);
  };

  const handleRemoveQuestion = (itemID) => {
    removeQuestion(itemID);
  };

  const handleItemHover = (itemID) => {
    setHoverID(itemID);
  };

  const handleDuplicate = (field) => {
    duplicateQuestion(field.itemID, field.title, field.type, field.options, field.required);
  };

  return (
    <div
      className={`Question ${activeID === field.itemID ? "active" : ""}`}
      onClick={(event) => handleItemClick(field.itemID, event)}
      onMouseEnter={() => handleItemHover(field.itemID)}
      onMouseLeave={() => handleItemHover(null)}
      ref={activeID === field.itemID ? questionRef : null}
    >
      {activeID === field.itemID ? (
        <>
          {hoverID === field.itemID ? (
            <div className="Drag-icon">
              <DragIcon />
            </div>
          ) : (
            <div className="Inactive-drag-icon" />
          )}
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
              selected={selected}
              onChange={(selectedOption) => handleTypeChange(field.itemID, selectedOption)}
            />
          </div>
          <div className="Question-main">
            <OptionInput
              field={field}
              isActive={activeID}
              addOption={addOption}
              removeOption={removeOption}
              changeTextOption={changeTextOption}
            />
          </div>
          <Line />
          <div className="Question-footer">
            <div className="Duplicate-icon" onClick={() => handleDuplicate(field)}>
              <CopyIcon />
            </div>
            <div className="Delete-icon" onClick={() => handleRemoveQuestion(field.itemID)}>
              <BinIcon />
            </div>
            <Line height={32} width={1} />
            <Switch label="Required" itemID={field.itemID} changeRequired={changeRequired} />
          </div>
        </>
      ) : (
        <>
          {hoverID === field.itemID ? (
            <div className="Drag-icon">
              <DragIcon />
            </div>
          ) : (
            <div className="Inactive-drag-icon" />
          )}
          <Text size={18} color="#202124" fontWeight={400}>
            {field.title}
          </Text>
          <div className="Inactive-question-main">
            <OptionInput
              field={field}
              isActive={activeID}
              addOption={addOption}
              removeOption={removeOption}
              changeTextOption={changeTextOption}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionContainer;
