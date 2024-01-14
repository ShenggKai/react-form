/* eslint-disable react/prop-types */
import React from "react";
import { CircleIcon, CloseIcon, RectangleIcon } from "../../../assets";
import { Text, Line, Space } from "../../../components";
import "./style.css";

const ActiveParagraph = () => {
  return <textarea rows={4} placeholder="Long answer text" disabled className="Paragraph-input" />;
};

const InactiveParagraph = () => {
  return (
    <>
      <Space height={15} />
      <Text size={16} fontWeight={400} color="#757575">
        Long answer text
      </Text>
      <Space height={5} />
      <Line />
    </>
  );
};

const AddOption = ({ type, options, handleAddOption, itemID }) => {
  return (
    <div className="Add-option">
      {type === "multiple-choice" ? (
        <CircleIcon />
      ) : type === "checkbox" ? (
        <RectangleIcon />
      ) : (
        <div className="Dropdown-text-index">{options.length + 1}.</div>
      )}
      <input
        type="text"
        title="Add option"
        placeholder="Add option"
        className="Add-option-text"
        onClick={() => handleAddOption(itemID)}
      />
    </div>
  );
};

const OptionInput = ({ field, isActive, addOption, removeOption, changeTextOption }) => {
  const [type, options, itemID] = [field.type, field.options, field.itemID];

  const handleAddOption = (itemID) => {
    addOption(itemID);
  };

  const handleRemoveOption = (itemID, optionID) => {
    removeOption(itemID, optionID);
  };

  const handleOptionTextChange = (event, itemID, optionID) => {
    changeTextOption(itemID, optionID, event.target.value);
  };

  return (
    <>
      {type === "paragraph" ? (
        isActive === itemID ? (
          <ActiveParagraph />
        ) : (
          <InactiveParagraph />
        )
      ) : (
        <div className="Multiple-input-container">
          {options.map((option, index) => (
            <div key={option.optionID} className="Multiple-input">
              {type === "multiple-choice" ? (
                <CircleIcon />
              ) : type === "checkbox" ? (
                <RectangleIcon />
              ) : (
                <div className="Dropdown-text-index">{index + 1}.</div>
              )}
              <input
                type="text"
                placeholder="your option"
                value={option.content}
                className={
                  isActive === itemID ? "Multiple-input-text" : "Inactive-multiple-input-text"
                }
                autoFocus
                onFocus={(event) => event.target.select()}
                onChange={(event) => handleOptionTextChange(event, itemID, option.optionID)}
              />

              {options.length > 1 && isActive === itemID ? (
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
          {isActive === itemID && (
            <AddOption
              type={type}
              options={options}
              handleAddOption={handleAddOption}
              itemID={itemID}
            />
          )}
        </div>
      )}
    </>
  );
};

export default OptionInput;
