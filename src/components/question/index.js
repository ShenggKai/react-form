/* eslint-disable react/prop-types */
import React from "react";
import { Text, Dropdown } from "../../components";
import { useDispatch } from "react-redux";
import { changeTypeQuestion } from "../../actions";
import "./style.css";

const Question = ({ questionContent }) => {
  const dispatch = useDispatch();

  const handleTypeChange = (id, selectedOption) => {
    dispatch(changeTypeQuestion(id, selectedOption));
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
                <select>
                  {field.listAnswer.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
