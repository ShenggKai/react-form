/* eslint-disable react/prop-types */
import React from "react";
import { Dropdown, Line, Switch, OptionInput } from "../../components";
import { useDispatch } from "react-redux";
import { changeTypeQuestion, removeQuestion, changeTitle, changeDescription } from "../../actions";
import { BinIcon, ImageIcon } from "../../assets";
import "./style.css";

const Question = ({ formContent }) => {
  const dispatch = useDispatch();

  const handleTypeChange = (itemID, selectedOption) => {
    dispatch(changeTypeQuestion(itemID, selectedOption));
  };

  const handleRemoveQuestion = (itemID) => {
    dispatch(removeQuestion(itemID));
  };

  const handleTitleChange = (event, itemID) => {
    dispatch(changeTitle(itemID, event.target.value));
  };

  const handleDescriptionChange = (event, itemID) => {
    dispatch(changeDescription(itemID, event.target.value));
  };

  return (
    <div className="Form-container">
      {formContent.map((field) => {
        return (
          <div key={field.itemID}>
            {field.type === "form-title" ? (
              <div className="Title-container">
                <input
                  value={field.title}
                  placeholder="Form title"
                  className="Title-container-title"
                  onChange={(event) => handleTitleChange(event, field.itemID)}
                />
                <input
                  value={field.description}
                  placeholder="Form description"
                  className="Title-container-description"
                  onChange={(event) => handleDescriptionChange(event, field.itemID)}
                />
              </div>
            ) : (
              <div className="Question">
                <div className="Question-header">
                  {/* <Text size={18}>{field.title}</Text> */}
                  <input
                    placeholder="Question"
                    value={field.title}
                    className="Question-title"
                    onChange={(event) => handleTitleChange(event, field.itemID)}
                    onFocus={(event) => event.target.select()}
                  />
                  <div className="Add-image-icon">
                    <ImageIcon />
                  </div>
                  <Dropdown
                    onChange={(selectedOption) => handleTypeChange(field.itemID, selectedOption)}
                  />
                </div>
                <div className="Question-main">
                  <OptionInput field={field} />
                </div>
                <Line />
                <div className="Question-footer">
                  <div className="Delete-icon" onClick={() => handleRemoveQuestion(field.itemID)}>
                    <BinIcon />
                  </div>
                  <Line height={32} width={1} />
                  <Switch label="Required" itemID={field.itemID} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Question;
