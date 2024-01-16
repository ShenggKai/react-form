/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import {
  Dropdown,
  Line,
  Switch,
  OptionInput,
  FloatButton,
  Text,
  TitleContainer,
} from "../../components";
import { BinIcon, ImageIcon, CopyIcon, DragIcon } from "../../assets";
import "./style.css";

const Question = ({
  formContent,
  changeQuestionType,
  changeRequired,
  addQuestion,
  removeQuestion,
  changeTitle,
  changeDescription,
  duplicateQuestion,
  addOption,
  removeOption,
  changeTextOption,
}) => {
  const [activeID, setActiveID] = useState("0000");
  const [hoverID, setHoverID] = useState("0000");
  const [buttonTop, setButtonTop] = useState(null); // initial value
  const questionRef = useRef(null);

  const handleItemClick = (itemID, event) => {
    setActiveID(itemID);

    const questionElement = event.currentTarget;
    let absoluteTop = questionElement ? questionElement.getBoundingClientRect().top : 656;

    if (absoluteTop > 656) absoluteTop = 656;
    if (absoluteTop < 178) absoluteTop = 178;

    setButtonTop(absoluteTop);
  };

  const handleScroll = () => {
    const questionElement = questionRef.current;
    let absoluteTop = questionElement ? questionElement.getBoundingClientRect().top : 600;

    if (absoluteTop > 656) absoluteTop = 656;
    if (absoluteTop < 178) absoluteTop = 178;

    setButtonTop(absoluteTop);
  };

  const handleItemHover = (itemID) => {
    setHoverID(itemID);
  };

  const handleTypeChange = (itemID, selectedOption) => {
    changeQuestionType(itemID, selectedOption);
  };

  const handleRemoveQuestion = (itemID) => {
    removeQuestion(itemID);
  };

  const handleTitleChange = (event, itemID) => {
    changeTitle(itemID, event.target.value);
  };

  const handleDescriptionChange = (event, itemID) => {
    changeDescription(itemID, event.target.value);
  };

  const handleDuplicate = (field) => {
    duplicateQuestion(field.itemID, field.title, field.type, field.options, field.required);
  };

  return (
    <div className="Form-container" onScroll={handleScroll}>
      <TitleContainer
        formContent={formContent}
        isActive={activeID}
        questionRef={questionRef}
        handleItemClick={handleItemClick}
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange}
      />
      {formContent.map((field, index) => {
        return (
          index !== 0 && (
            <div
              key={field.itemID}
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
                      onChange={(selectedOption) => handleTypeChange(field.itemID, selectedOption)}
                    />
                  </div>
                  <div
                    className={
                      activeID === field.itemID ? "Question-main" : "Inactive-question-main"
                    }
                  >
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
                    <Switch
                      label="Required"
                      itemID={field.itemID}
                      changeRequired={changeRequired}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="Inactive-drag-icon" />
                  <Text size={18} color="#202124" fontWeight={400}>
                    {field.title}
                  </Text>
                  <div
                    className={
                      activeID === field.itemID ? "Question-main" : "Inactive-question-main"
                    }
                  >
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
          )
        );
      })}
      <FloatButton itemID={activeID} addQuestion={addQuestion} style={{ top: buttonTop }} />
    </div>
  );
};

export default Question;
