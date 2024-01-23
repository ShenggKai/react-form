/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Line, Switch, OptionInput, Text, DropMenu } from "../../../components";
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
  addImage,
  handleItemClick,
  handleTitleChange,
}) => {
  const [indexSelected, setIndexSelected] = useState(0);
  const [hoverID, setHoverID] = useState("0");

  const handleRemoveQuestion = (itemID) => {
    removeQuestion(itemID);
  };

  const handleItemHover = (itemID) => {
    setHoverID(itemID);
  };

  const handleDuplicate = (field) => {
    duplicateQuestion(field.itemID, field.title, field.type, field.options, field.required);
  };

  const handleAddImage = (event, itemID) => {
    addImage(event, itemID);
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
            <label className="Add-image-icon" htmlFor="imageUpload">
              <ImageIcon />
              <input
                id="imageUpload"
                type="file"
                onChange={(event) => handleAddImage(event, field.itemID)}
                style={{ display: "none" }}
              />
            </label>
            <DropMenu
              indexSelected={indexSelected}
              setIndexSelected={setIndexSelected}
              changeQuestionType={changeQuestionType}
              ItemID={field.itemID}
            />
          </div>
          <div className="Question-main">
            {field.image && (
              <img src={field.image} alt="Uploaded content" className="Image-uploaded" />
            )}
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
            {field.image && (
              <img src={field.image} alt="Uploaded content" className="Image-uploaded" />
            )}
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
