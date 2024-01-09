/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addOption, removeOption, changeTextOption } from "../../../actions";
import { CircleIcon, CloseIcon, RectangleIcon } from "../../../assets";
import "./style.css";

const OptionInput = ({ field }) => {
  const dispatch = useDispatch();
  const [type, listOption, questionID] = [field.type, field.listOption, field.questionID];

  const handleAddOption = (questionID) => {
    dispatch(addOption(questionID));
  };

  const handleRemoveOption = (questionID, optionID) => {
    dispatch(removeOption(questionID, optionID));
  };

  const handleOptionTextChange = (event, questionID, optionID) => {
    // console.log(questionID, optionID, event.target.value);
    dispatch(changeTextOption(questionID, optionID, event.target.value));
  };

  return (
    <>
      {type === "paragraph" ? (
        <textarea rows={4} placeholder="Long answer text" disabled className="Paragraph-input" />
      ) : (
        <div className="Multiple-input-container">
          {listOption.map((item, index) => (
            <div key={item.optionID} className="Multiple-input">
              {type === "mt-choice" ? (
                <CircleIcon />
              ) : type === "checkbox" ? (
                <RectangleIcon />
              ) : (
                <div className="Dropdown-text-index">{index + 1}.</div>
              )}
              <input
                type="text"
                placeholder="your option"
                defaultValue={item.content}
                className="Multiple-input-text"
                autoFocus
                onFocus={(event) => event.target.select()}
                onChange={(event) => handleOptionTextChange(event, questionID, item.optionID)}
              />

              {listOption.length > 1 ? (
                <div
                  className="Remove-icon"
                  title="Remove"
                  onClick={() => handleRemoveOption(questionID, item.optionID)}
                >
                  <CloseIcon />
                </div>
              ) : (
                <div className="Placeholder-icon" />
              )}
            </div>
          ))}

          <div className="Add-option">
            {type === "mt-choice" ? (
              <CircleIcon />
            ) : type === "checkbox" ? (
              <RectangleIcon />
            ) : (
              <div className="Dropdown-text-index">{listOption.length + 1}.</div>
            )}
            <input
              type="text"
              title="Add option"
              placeholder="Add option"
              className="Add-option-text"
              onClick={() => handleAddOption(questionID)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OptionInput;
