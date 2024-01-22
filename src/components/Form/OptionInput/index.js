/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CircleIcon, CloseIcon, RectangleIcon, DragIconVertical } from "../../../assets";
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
      <div className="Inactive-drag-vertical-icon" />
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

const Icon = ({ type, index }) => {
  return (
    <>
      {type === "multiple-choice" && <CircleIcon />}
      {type === "checkbox" && <RectangleIcon />}
      {type === "dropdown" && <div className="Dropdown-text-index">{index + 1}.</div>}
    </>
  );
};

const OptionInput = ({ field, isActive, addOption, removeOption, changeTextOption }) => {
  const [indexHover, setIndexHover] = useState(null);
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

  const handleHover = (optionID) => {
    setIndexHover(optionID);
  };

  return (
    <>
      {isActive === itemID ? (
        type === "paragraph" ? (
          <ActiveParagraph />
        ) : (
          <div className="Multiple-input-container">
            {options.map((option, index) => (
              <div
                key={option.optionID}
                className="Multiple-input"
                onMouseEnter={() => handleHover(option.optionID)}
                onMouseLeave={() => handleHover(null)}
              >
                {indexHover === option.optionID ? (
                  <div className="Drag-vertical-icon">
                    <DragIconVertical />
                  </div>
                ) : (
                  <div className="Inactive-drag-vertical-icon" />
                )}

                <Icon type={type} index={index} />

                <input
                  type="text"
                  placeholder="your option"
                  value={option.content}
                  className="Multiple-input-text"
                  autoFocus
                  onFocus={(event) => event.target.select()}
                  onChange={(event) => handleOptionTextChange(event, itemID, option.optionID)}
                />

                {options.length > 1 ? (
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
            <AddOption
              type={type}
              options={options}
              handleAddOption={handleAddOption}
              itemID={itemID}
            />
          </div>
        )
      ) : type === "paragraph" ? (
        <InactiveParagraph />
      ) : (
        <div className="Inactive-multiple-input-container">
          {options.map((option, index) => (
            <div key={option.optionID} className="Multiple-input">
              <Icon type={type} index={index} />
              <input value={option.content} className="Inactive-multiple-input-text" readOnly />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default OptionInput;
