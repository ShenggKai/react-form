/* eslint-disable react/prop-types */
import React from "react";
import { Text, Dropdown, Line, Switch, OptionInput } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeQuestion, removeQuestion } from "../../actions";
import { BinIcon, ImageIcon } from "../../assets";
import "./style.css";

const Question = () => {
  const dispatch = useDispatch();
  const questionContent = useSelector((state) => state.question);

  const handleTypeChange = (questionID, selectedOption) => {
    dispatch(changeTypeQuestion(questionID, selectedOption));
  };

  const handleRemoveQuestion = (questionID) => {
    dispatch(removeQuestion(questionID));
  };

  return (
    <div className="Question-container">
      {questionContent.map((field) => {
        return (
          <div className="Question" key={field.questionID}>
            <div className="Question-header">
              {/* <Text size={18}>{field.title}</Text> */}
              <input placeholder="Question" defaultValue={field.title} className="Question-title" />
              <div className="Add-image-icon">
                <ImageIcon />
              </div>
              <Dropdown
                onChange={(selectedOption) => handleTypeChange(field.questionID, selectedOption)}
              />
            </div>
            <div className="Question-main">
              <OptionInput field={field} />
            </div>
            <Line />
            <div className="Question-footer">
              <div className="Delete-icon" onClick={() => handleRemoveQuestion(field.questionID)}>
                <BinIcon />
              </div>
              <Line height={32} width={1} />
              <Switch label="Required" questionID={field.questionID} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
