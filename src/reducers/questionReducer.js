import * as actions from "../actions/actionTypes";

let questionLength = 0;
let optionLength = 0;

function generateQuestionID(number) {
  return String(number).padStart(4, "0").slice(-4);
}

function generateOptionID(questionID, optionLength) {
  return `${questionID}_${String(optionLength).padStart(4, "0")}`;
}

const initialState = [
  {
    questionID: "0000",
    title: "Question 1",
    type: "paragraph",
    listOption: [{ optionID: "0000_0000", content: "Option 1" }],
    required: false,
  },
];

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_QUESTION:
      questionLength++;
      optionLength = 0;
      let qID = generateQuestionID(questionLength);

      return [
        ...state,
        {
          questionID: qID,
          title: `Question ${state.length + 1}`,
          type: "paragraph",
          listOption: [{ optionID: generateOptionID(qID, optionLength), content: "Option 1" }],
          required: false,
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

    case actions.CHANGE_REQUIRED:
      return state.map((question) => {
        if (question.questionID === action.payload.questionID)
          return { ...question, required: !question.required };
        else return question;
      });

    case actions.CHANGE_TEXT_QUESTION:
      return state.map((question) => {
        if (question.questionID === action.payload.questionID)
          return { ...question, title: action.payload.text };
        else return question;
      });

    case actions.ADD_OPTION:
      optionLength++;
      let questionID = action.payload.questionID;
      let index = state.findIndex((item) => item.questionID === questionID);
      // use for default option's label
      let option_number = state[index].listOption.length + 1;

      if (index !== -1) {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            listOption: [
              ...state[index].listOption,
              {
                optionID: generateOptionID(questionID, optionLength),
                content: `Option ${option_number}`,
              },
            ],
          },
          ...state.slice(index + 1),
        ];
      }
      return state;

    case actions.REMOVE_OPTION:
      let questionId_temp = action.payload.questionID;
      let optionID = action.payload.optionID;

      return state.map((question) => {
        if (question.questionID === questionId_temp) {
          return {
            ...question,
            listOption: question.listOption.filter((item) => item.optionID !== optionID),
          };
        }
        return question;
      });

    case actions.CHANGE_TEXT_OPTION:
      return state.map((question) => {
        if (question.questionID === action.payload.questionID)
          return {
            ...question,
            listOption: question.listOption.map((item) => {
              if (item.optionID === action.payload.optionID)
                return { ...item, content: action.payload.text };
              return item;
            }),
          };
        return question;
      });

    default:
      return state;
  }
};

export default questionReducer;
