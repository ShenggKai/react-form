import * as actions from "./actionTypes";

export const addQuestion = (itemID) => ({
  type: actions.ADD_QUESTION,
  payload: {
    itemID: itemID,
  },
});

export const removeQuestion = (itemID) => ({
  type: actions.REMOVE_QUESTION,
  payload: {
    itemID: itemID,
  },
});

export const changeTypeQuestion = (itemID, type) => ({
  type: actions.CHANGE_TYPE_QUESTION,
  payload: {
    itemID: itemID,
    type: type,
  },
});

export const changeRequired = (itemID) => ({
  type: actions.CHANGE_REQUIRED,
  payload: {
    itemID: itemID,
  },
});

export const changeTitle = (itemID, text) => ({
  type: actions.CHANGE_TITLE,
  payload: {
    itemID: itemID,
    text: text,
  },
});

export const changeDescription = (itemID, text) => ({
  type: actions.CHANGE_DESCRIPTION,
  payload: {
    itemID: itemID,
    text: text,
  },
});

export const addOption = (itemID) => ({
  type: actions.ADD_OPTION,
  payload: {
    itemID: itemID,
  },
});

export const removeOption = (itemID, optionID) => ({
  type: actions.REMOVE_OPTION,
  payload: {
    itemID: itemID,
    optionID: optionID,
  },
});

export const changeTextOption = (itemID, optionID, text) => ({
  type: actions.CHANGE_TEXT_OPTION,
  payload: {
    itemID: itemID,
    optionID: optionID,
    text: text,
  },
});
