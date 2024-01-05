import * as actions from "../actions/actionTypes";

const initialState = [
  {
    id: 0,
    title: "Untitled question first",
    type: "mt-choice",
    listOption: ["answer 1", "answer 2"],
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
          listOption: action.payload.listOption,
        },
      ];

    case actions.REMOVE_QUESTION:
      return state.filter((question) => question.id !== action.payload.id);

    case actions.CHANGE_TYPE_QUESTION:
      return state.map((question) => {
        if (question.id === action.payload.id) return { ...question, type: action.payload.type };
        else return question;
      });

    case actions.ADD_OPTION:
      let id = action.payload.id;
      let index = state.findIndex((item) => item.id === id);

      if (index !== -1) {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            listOption: [...state[index].listOption, "your option"],
          },
          ...state.slice(index + 1),
        ];
      }

      return state;

    default:
      return state;
  }
};

export default questionReducer;
