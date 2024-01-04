import * as actions from "../actions/actionTypes";

const initialState = [
  {
    id: 0,
    title: "Untitled question first",
    type: "paragraph",
    listAnswer: ["answer 1", "answer 2"],
  },
];

let lastID = 1;

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_QUESTION:
      return [
        ...state,
        {
          id: lastID++,
          title: action.payload.title,
          type: action.payload.type,
          listAnswer: action.payload.listAnswer,
        },
      ];

    case actions.REMOVE_QUESTION:
      return state.filter((question) => question.id !== action.payload.id);

    case actions.CHANGE_TYPE_QUESTION:
      return state.map((question) => {
        if (question.id === action.payload.id) return { ...question, type: action.payload.type };
        else return question;
      });

    default:
      return state;
  }
};

export default questionReducer;
