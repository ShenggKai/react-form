import * as actions from "../actions/actionTypes";

let itemIndex = 1;
let optionIndex = 0;

function generateQuestionID(number) {
  return String(number).padStart(4, "0").slice(-4);
}

function generateOptionID(itemID, optionIndex) {
  return `${itemID}_${String(optionIndex).padStart(4, "0")}`;
}

const initialState = [
  {
    itemID: "0000",
    title: "Form title",
    description: "",
    type: "form-title",
  },
  {
    itemID: "0001",
    title: "Question 1",
    type: "paragraph",
    listOption: [{ optionID: "0001_0000", content: "Option 1" }],
    required: false,
  },
];

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_QUESTION:
      itemIndex++;
      optionIndex = 0;
      let qID = generateQuestionID(itemIndex);

      return [
        ...state,
        {
          itemID: qID,
          title: `Question ${state.length}`,
          type: "paragraph",
          listOption: [{ optionID: generateOptionID(qID, optionIndex), content: "Option 1" }],
          required: false,
        },
      ];

    case actions.REMOVE_QUESTION:
      return state.filter((question) => question.itemID !== action.payload.itemID);

    case actions.CHANGE_TYPE_QUESTION:
      return state.map((question) => {
        if (question.itemID === action.payload.itemID)
          return { ...question, type: action.payload.type };
        else return question;
      });

    case actions.CHANGE_REQUIRED:
      return state.map((question) => {
        if (question.itemID === action.payload.itemID)
          return { ...question, required: !question.required };
        else return question;
      });

    case actions.CHANGE_TITLE:
      return state.map((question) => {
        if (question.itemID === action.payload.itemID)
          return { ...question, title: action.payload.text };
        else return question;
      });

    case actions.CHANGE_DESCRIPTION:
      return state.map((question) => {
        if (question.itemID === action.payload.itemID)
          return { ...question, description: action.payload.text };
        else return question;
      });

    case actions.ADD_OPTION:
      optionIndex++;
      let itemID = action.payload.itemID;
      let index = state.findIndex((item) => item.itemID === itemID);
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
                optionID: generateOptionID(itemID, optionIndex),
                content: `Option ${option_number}`,
              },
            ],
          },
          ...state.slice(index + 1),
        ];
      }
      return state;

    case actions.REMOVE_OPTION:
      let questionId_temp = action.payload.itemID;
      let optionID = action.payload.optionID;

      return state.map((question) => {
        if (question.itemID === questionId_temp) {
          return {
            ...question,
            listOption: question.listOption.filter((option) => option.optionID !== optionID),
          };
        }
        return question;
      });

    case actions.CHANGE_TEXT_OPTION:
      return state.map((question) => {
        if (question.itemID === action.payload.itemID)
          return {
            ...question,
            listOption: question.listOption.map((option) => {
              if (option.optionID === action.payload.optionID)
                return { ...option, content: action.payload.text };
              return option;
            }),
          };
        return question;
      });

    default:
      return state;
  }
};

export default questionReducer;
