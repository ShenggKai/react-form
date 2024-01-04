/* eslint-disable react/prop-types */
import React from "react";
import { Text, Dropdown } from "../../components";
import "./style.css";

const Question = ({ questionContent }) => {
  return (
    <div className="Form-container">
      {questionContent.map((field) => {
        return (
          <div className="Question" key={field.name}>
            <div className="Question-header">
              <Text size={18}>{field.label}</Text>
              <Dropdown
                options={questionContent}
                onChange={(selectedOption) => console.log(selectedOption)}
              />
            </div>
            <div className="Answer">
              {field.type === "paragraph" && (
                <textarea rows={4} placeholder="your answer" className="Input-text" />
              )}
              {field.type === "mt-choice" && (
                <select>
                  {field.list.map((item) => (
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
