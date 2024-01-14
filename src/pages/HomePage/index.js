import React, { useState } from "react";
import { Layout, Button, Question } from "../../components";
import "./style.css";

// initial state for form content
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

let itemIndex = 1;
let optionIndex = 0;

function generateQuestionID(number) {
  return String(number).padStart(4, "0").slice(-4);
}

function generateOptionID(itemID, optionIndex) {
  return `${itemID}_${String(optionIndex).padStart(4, "0")}`;
}

const HomePage = () => {
  const [formContent, setFormContent] = useState(initialState);

  const changeQuestionType = (itemID, selectedOption) => {
    setFormContent((prevFormContent) => {
      return prevFormContent.map((question) => {
        if (question.itemID === itemID) {
          return { ...question, type: selectedOption };
        } else {
          return question;
        }
      });
    });
  };

  const changeRequired = (itemID) => {
    setFormContent((prevFormContent) => {
      return prevFormContent.map((question) => {
        if (question.itemID === itemID) {
          return { ...question, required: !question.required };
        } else {
          return question;
        }
      });
    });
  };

  const addQuestion = (itemID) => {
    itemIndex++;
    let qID = generateQuestionID(itemIndex);
    let index = formContent.findIndex((item) => item.itemID === itemID);

    setFormContent(() => {
      if (index !== -1) {
        return [
          ...formContent.slice(0, index + 1),
          {
            itemID: qID,
            title: `Question ${formContent.length}`,
            type: "paragraph",
            listOption: [{ optionID: generateOptionID(qID, optionIndex), content: "Option 1" }],
            required: false,
          },
          ...formContent.slice(index + 1),
        ];
      }
      return state;
    });
  };

  const removeQuestion = (itemID) => {
    setFormContent(() => {
      return formContent.filter((question) => question.itemID !== itemID);
    });
  };

  const changeTitle = (itemID, text) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID) return { ...question, title: text };
        else return question;
      });
    });
  };

  const changeDescription = (itemID, text) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID) return { ...question, description: text };
        else return question;
      });
    });
  };

  const duplicateQuestion = (itemID, title, type, listOption, required) => {
    itemIndex++;
    let qID = generateQuestionID(itemIndex);
    let index = formContent.findIndex((item) => item.itemID === itemID);

    setFormContent(() => {
      if (index !== -1) {
        return [
          ...formContent.slice(0, index + 1),
          {
            itemID: qID,
            title: title,
            type: type,
            listOption: listOption,
            required: required,
          },
          ...formContent.slice(index + 1),
        ];
      }
      return formContent;
    });
  };

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <input
            placeholder=""
            className="Form-title"
            value={formContent[0].title}
            onChange={(event) => changeTitle("0000", event.target.value)}
          />

          <div className="Button-send">
            <Button>Send</Button>
          </div>
        </div>
        <Question
          formContent={formContent}
          changeQuestionType={changeQuestionType}
          changeRequired={changeRequired}
          addQuestion={addQuestion}
          removeQuestion={removeQuestion}
          changeTitle={changeTitle}
          changeDescription={changeDescription}
          duplicateQuestion={duplicateQuestion}
        />
      </main>
    </Layout>
  );
};

export default HomePage;
