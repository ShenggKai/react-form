/* eslint-disable react/prop-types */
import React from "react";

const TitleContainer = ({
  formContent,
  isActive,
  questionRef,
  handleItemClick,
  handleTitleChange,
  handleDescriptionChange,
}) => {
  return (
    <div
      className={`Title-container ${isActive === formContent[0].itemID ? "active" : ""}`}
      onClick={(event) => handleItemClick(formContent[0].itemID, event)}
      ref={isActive === formContent[0].itemID ? questionRef : null}
    >
      <input
        value={formContent[0].title}
        placeholder="Form title"
        className={
          isActive === formContent[0].itemID
            ? "Active-title-container Title-container-title"
            : "Title-container-title"
        }
        onChange={(event) => handleTitleChange(event, formContent[0].itemID)}
      />
      <input
        value={formContent[0].description}
        placeholder="Form description"
        className={
          isActive === formContent[0].itemID
            ? "Active-title-container Title-container-description"
            : "Title-container-description"
        }
        onChange={(event) => handleDescriptionChange(event, formContent[0].itemID)}
      />
    </div>
  );
};

export default TitleContainer;
