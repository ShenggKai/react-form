import * as actions from "./actionTypes";

export const addQuestion = (title, type, listOption) => ({
  type: actions.ADD_QUESTION,
  payload: {
    title: title,
    type: type,
    listOption: listOption,
  },
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
