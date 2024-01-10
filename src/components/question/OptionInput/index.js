/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addOption, removeOption, changeTextOption } from "../../../actions";
import { CircleIcon, CloseIcon, RectangleIcon } from "../../../assets";
import "./style.css";

const OptionInput = ({ field }) => {
  const dispatch = useDispatch();
  const [type, listOption, itemID] = [field.type, field.listOption, field.itemID];

  const handleAddOption = (itemID) => {
    dispatch(addOption(itemID));
  };

  const handleRemoveOption = (itemID, optionID) => {
    dispatch(removeOption(itemID, optionID));
  };

  const handleOptionTextChange = (event, itemID, optionID) => {
    dispatch(changeTextOption(itemID, optionID, event.target.value));
  };

  return (
    <>
      {type === "paragraph" ? (
        <textarea rows={4} placeholder="Long answer text" disabled className="Paragraph-input" />
      ) : (
        <div className="Multiple-input-container">
          {listOption.map((option, index) => (
            <div key={option.optionID} className="Multiple-input">
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
                defaultValue={option.content}
                className="Multiple-input-text"
                autoFocus
                onFocus={(event) => event.target.select()}
                onChange={(event) => handleOptionTextChange(event, itemID, option.optionID)}
              />

              {listOption.length > 1 ? (
                <div
                  className="Remove-icon"
                  title="Remove"
                  onClick={() => handleRemoveOption(itemID, option.optionID)}
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
              onClick={() => handleAddOption(itemID)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OptionInput;
