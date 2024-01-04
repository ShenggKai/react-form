import * as actions from "./actionTypes";

export const addQuestion = (title, type, listAnswer) => ({
  type: actions.ADD_QUESTION,
  payload: {
    title: title,
    type: type,
    listAnswer: listAnswer,
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

export const addAnswer = (id, listAnswer) => ({
  type: actions.ADD_ANSWER,
  payload: {
    id: id,
    listAnswer: listAnswer,
  },
});
