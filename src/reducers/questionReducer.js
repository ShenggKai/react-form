import * as actions from "../actions/actionTypes";

const initialState = [
  {
    questionID: 0,
    title: "Untitled question first",
    type: "mt-choice",
    listOption: [{ optionID: 0, content: "Option 1" }],
  },
];

let lastQuestionID = 1;
let lastOptionID = 1;
let optionLength = 2; // for default option's content

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_QUESTION:
      return [
        ...state,
        {
          questionID: lastQuestionID++,
          title: action.payload.title,
          type: action.payload.type,
          listOption: action.payload.listOption,
        },
      ];

    case actions.REMOVE_QUESTION:
      return state.filter((question) => question.questionID !== action.payload.questionID);

    case actions.CHANGE_TYPE_QUESTION:
      return state.map((question) => {
        if (question.questionID === action.payload.questionID)
          return { ...question, type: action.payload.type };
        else return question;
      });

    case actions.ADD_OPTION:
      let questionID = action.payload.questionID;
      let index = state.findIndex((item) => item.questionID === questionID);

      if (index !== -1) {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            listOption: [
              ...state[index].listOption,
              { optionID: lastOptionID++, content: `Option ${optionLength++}` },
            ],
          },
          ...state.slice(index + 1),
        ];
      }

      return state;

    case actions.REMOVE_OPTION:
      let questionId_temp = action.payload.questionID;
      let optionID = action.payload.optionID;
      let index_d = state.findIndex((item) => item.questionID === questionId_temp);

      return state.map((question) => {
        if (question.questionID === index_d) {
          optionLength--;
          return {
            ...question,
            listOption: question.listOption.filter((item) => item.optionID !== optionID),
          };
        }
        return question;
      });

    default:
      return state;
  }
};

export default questionReducer;
