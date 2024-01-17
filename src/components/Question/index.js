/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { FloatButton, TitleContainer, QuestionContainer } from "../../components";
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

  const handleTitleChange = (event, itemID) => {
    changeTitle(itemID, event.target.value);
  };

  const handleDescriptionChange = (event, itemID) => {
    changeDescription(itemID, event.target.value);
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
            <QuestionContainer
              activeID={activeID}
              field={field}
              questionRef={questionRef}
              addOption={addOption}
              removeOption={removeOption}
              changeTextOption={changeTextOption}
              changeQuestionType={changeQuestionType}
              changeRequired={changeRequired}
              removeQuestion={removeQuestion}
              duplicateQuestion={duplicateQuestion}
              handleItemClick={handleItemClick}
              handleTitleChange={handleTitleChange}
            />
          )
        );
      })}
      <FloatButton itemID={activeID} addQuestion={addQuestion} style={{ top: buttonTop }} />
    </div>
  );
};

export default Question;
