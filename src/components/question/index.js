/* eslint-disable react/prop-types */
import React from "react";
import { Text, Dropdown, Line, Switch } from "../../components";
import { useDispatch } from "react-redux";
import { changeTypeQuestion, addOption } from "../../actions";
import { CircleIcon, CloseIcon, BinIcon } from "../../assets/icons";
import "./style.css";

const Question = ({ questionContent }) => {
  const dispatch = useDispatch();

  const handleTypeChange = (id, selectedOption) => {
    dispatch(changeTypeQuestion(id, selectedOption));
  };

  const handleAddOption = (id) => {
    dispatch(addOption(id));
  };

  return (
    <div className="Question-container">
      {questionContent.map((field) => {
        return (
          <div className="Question" key={field.id}>
            <div className="Question-header">
              <Text size={18}>{field.title}</Text>
              <Dropdown
                options={questionContent}
                onChange={(selectedOption) => handleTypeChange(field.id, selectedOption)}
              />
            </div>
            <div className="Answer">
              {field.type === "paragraph" && (
                <textarea rows={4} placeholder="your answer" className="Input-text" />
              )}
              {field.type === "mt-choice" && (
                <div className="Multiple-input-container">
                  {field.listOption.map((item) => (
                    <div key={item} className="Multiple-input">
                      <CircleIcon />
                      <input
                        type="text"
                        title="Your option"
                        defaultValue={item}
                        className="Multiple-input-text"
                      />
                      <div className="Remove-icon" title="Remove">
                        <CloseIcon />
                      </div>
                    </div>
                  ))}

                  <div className="Add-option">
                    <CircleIcon />
                    <input
                      type="text"
                      title="Add option"
                      placeholder="Add option"
                      className="Add-option-text"
                      onClick={() => handleAddOption(field.id)}
                    />
                  </div>
                </div>
              )}
            </div>
            <Line />
            <div className="Question-footer">
              <div className="Delete-icon">
                <BinIcon />
              </div>
              <Line height={50} width={1} />
              <Switch label="Required" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
