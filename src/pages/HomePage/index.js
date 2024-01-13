import React, { useState, useEffect } from "react";
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

const HomePage = () => {
  const [formContent, setFormContent] = useState(initialState);
  const [formTitle, setFormTitle] = useState(formContent[0].title);

  // set formContent when formTitle change
  useEffect(() => {
    setFormContent(
      formContent.map((item) => (item.itemID === "0000" ? { ...item, title: formTitle } : item))
    );
  }, [formTitle]);

  const changeFormTitle = (event) => {
    setFormTitle(event.target.value);
  };

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

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <input
            placeholder=""
            className="Form-title"
            value={formTitle}
            onChange={changeFormTitle}
          />

          <div className="Button-send">
            <Button>Send</Button>
          </div>
        </div>
        <Question
          formContent={formContent}
          changeQuestionType={changeQuestionType}
          changeRequired={changeRequired}
        />
      </main>
    </Layout>
  );
};

export default HomePage;
