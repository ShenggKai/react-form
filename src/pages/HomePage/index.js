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
    options: [{ optionID: "0001_0000", content: "Option 1" }],
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
            options: [{ optionID: generateOptionID(qID, optionIndex), content: "Option 1" }],
            required: false,
          },
          ...formContent.slice(index + 1),
        ];
      }
      return formContent;
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

  const duplicateQuestion = (itemID, title, type, options, required) => {
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
            options: options,
            required: required,
          },
          ...formContent.slice(index + 1),
        ];
      }
      return formContent;
    });
  };

  const addOption = (itemID) => {
    optionIndex++;
    let index = formContent.findIndex((item) => item.itemID === itemID);
    // use for default option's label
    let option_number = formContent[index].options.length + 1;

    setFormContent(() => {
      if (index !== -1) {
        return [
          ...formContent.slice(0, index),
          {
            ...formContent[index],
            options: [
              ...formContent[index].options,
              {
                optionID: generateOptionID(itemID, optionIndex),
                content: `Option ${option_number}`,
              },
            ],
          },
          ...formContent.slice(index + 1),
        ];
      }
      return formContent;
    });
  };

  const removeOption = (itemID, optionID) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID) {
          return {
            ...question,
            options: question.options.filter((option) => option.optionID !== optionID),
          };
        }
        return question;
      });
    });
  };

  const changeTextOption = (itemID, optionID, text) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID)
          return {
            ...question,
            options: question.options.map((option) => {
              if (option.optionID === optionID) return { ...option, content: text };
              return option;
            }),
          };
        return question;
      });
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
          addOption={addOption}
          removeOption={removeOption}
          changeTextOption={changeTextOption}
        />
      </main>
    </Layout>
  );
};

export default HomePage;
