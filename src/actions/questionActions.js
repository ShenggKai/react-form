import * as actions from "./actionTypes";

export const addQuestion = (title, type, listOption) => ({
  type: actions.ADD_QUESTION,
  payload: {
    title: title,
    type: type,
    listOption: listOption,
  },
});

export const removeQuestion = (id) => ({
  type: actions.REMOVE_QUESTION,
  payload: {
    id: id,
  },
});

export const changeTypeQuestion = (id, type) => ({
  type: actions.CHANGE_TYPE_QUESTION,
  payload: {
    id: id,
    type: type,
  },
});

export const addOption = (id) => ({
  type: actions.ADD_OPTION,
  payload: {
    id: id,
  },
});
