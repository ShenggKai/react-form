/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { FloatButton, TitleContainer, QuestionContainer } from "../../components";
import { getFloatButtonTop } from "../../utils";
import "./style.css";

const Form = ({
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
  const [activeID, setActiveID] = useState("0");
  const [buttonTop, setButtonTop] = useState(null); // initial value
  const questionRef = useRef(null);
  const formRef = useRef(null);
  const leftRef = useRef(null);
  const floatButtonRef = useRef(null);

  const handleItemClick = (itemID, event) => {
    setActiveID(itemID);

    // get info of the question clicked and calculate the float button position
    const questionElement = event.currentTarget;
    const floatButtonTop = getFloatButtonTop(formRef, leftRef, floatButtonRef, questionElement);
    setButtonTop(floatButtonTop);
  };

  // calculate the float button position when scrolling
  const handleScroll = () => {
    const floatButtonTop = getFloatButtonTop(formRef, leftRef, floatButtonRef, questionRef.current);
    setTimeout(() => {
      setButtonTop(floatButtonTop);
    }, 100);
  };

  const handleTitleChange = (event, itemID) => {
    changeTitle(itemID, event.target.value);
  };

  const handleDescriptionChange = (event, itemID) => {
    changeDescription(itemID, event.target.value);
  };

  return (
    <div className="Form-container" ref={formRef} onScroll={handleScroll}>
      <div className="Left-container" ref={leftRef}>
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
              <div key={index}>
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
              </div>
            )
          );
        })}
      </div>
      <div className="Right-container">
        <FloatButton
          itemID={activeID}
          addQuestion={addQuestion}
          style={{ top: buttonTop }}
          floatRef={floatButtonRef}
        />
      </div>
    </div>
  );
};

export default Form;
