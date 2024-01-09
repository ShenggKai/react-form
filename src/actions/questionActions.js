import * as actions from "./actionTypes";

export const addQuestion = () => ({
  type: actions.ADD_QUESTION,
});

export const removeQuestion = (questionID) => ({
  type: actions.REMOVE_QUESTION,
  payload: {
    questionID: questionID,
  },
});

export const changeTypeQuestion = (questionID, type) => ({
  type: actions.CHANGE_TYPE_QUESTION,
  payload: {
    questionID: questionID,
    type: type,
  },
});

export const changeRequired = (questionID) => ({
  type: actions.CHANGE_REQUIRED,
  payload: {
    questionID: questionID,
  },
});

export const addOption = (questionID) => ({
  type: actions.ADD_OPTION,
  payload: {
    questionID: questionID,
  },
});

export const removeOption = (questionID, optionID) => ({
  type: actions.REMOVE_OPTION,
  payload: {
    questionID: questionID,
    optionID: optionID,
  },
});

export const changeTextOption = (questionID, optionID, text) => ({
  type: actions.CHANGE_TEXT_OPTION,
  payload: {
    questionID: questionID,
    optionID: optionID,
    text: text,
  },
});
