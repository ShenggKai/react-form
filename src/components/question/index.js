/* eslint-disable react/prop-types */
import React from "react";
import { Text, Dropdown, Line, Switch } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeQuestion, removeQuestion, addOption, removeOption } from "../../actions";
import { CircleIcon, CloseIcon, BinIcon } from "../../assets/icons";
import "./style.css";

const Question = () => {
  const dispatch = useDispatch();
  const questionContent = useSelector((state) => state.question);

  const handleTypeChange = (questionID, selectedOption) => {
    dispatch(changeTypeQuestion(questionID, selectedOption));
  };

  const handleAddOption = (questionID) => {
    dispatch(addOption(questionID));

    console.log("Add option for question:", questionID);
  };

  const handleRemoveOption = (questionID, optionID) => {
    dispatch(removeOption(questionID, optionID));

    console.log("remove question, id:", questionID, optionID);
  };

  const handleRemoveQuestion = (questionID) => {
    dispatch(removeQuestion(questionID));

    console.log("remove:", questionID);
  };
  return (
    <div className="Question-container">
      {questionContent.map((field) => {
        return (
          <div className="Question" key={field.questionID}>
            <div className="Question-header">
              <Text size={18}>{field.title}</Text>
              <Dropdown
                options={questionContent}
                onChange={(selectedOption) => handleTypeChange(field.questionID, selectedOption)}
              />
            </div>
            <div className="Question-main">
              {field.type === "paragraph" && (
                <textarea rows={4} placeholder="your answer" className="Input-text" />
              )}
              {field.type === "mt-choice" && (
                <div className="Multiple-input-container">
                  {field.listOption.map((item) => (
                    <div key={item.optionID} className="Multiple-input">
                      <CircleIcon />
                      <input
                        type="text"
                        placeholder="your option"
                        defaultValue={item.content}
                        className="Multiple-input-text"
                      />
                      {field.listOption.length > 1 ? (
                        <div
                          className="Remove-icon"
                          title="Remove"
                          onClick={() => handleRemoveOption(field.questionID, item.optionID)}
                        >
                          <CloseIcon />
                        </div>
                      ) : (
                        <div className="Placeholder-icon" />
                      )}
                    </div>
                  ))}

                  <div className="Add-option">
                    <CircleIcon />
                    <input
                      type="text"
                      title="Add option"
                      placeholder="Add option"
                      className="Add-option-text"
                      onClick={() => handleAddOption(field.questionID)}
                    />
                  </div>
                </div>
              )}
            </div>
            <Line />
            <div className="Question-footer">
              <div className="Delete-icon" onClick={() => handleRemoveQuestion(field.questionID)}>
                <BinIcon />
              </div>
              <Line height={32} width={1} />
              <Switch label="Required" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
