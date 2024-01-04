/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Text, Layout, Button, Question } from "../../components";
import { AddIcon } from "../../assets/icons";
import "./style.css";

const HomePage = () => {
  const [questionContent, setQuestionContent] = useState([
    {
      name: "question_0",
      label: "Untitled question",
      type: "paragraph",
      list: ["a", "b"],
    },
  ]);

  const addQuestion = () => {
    const field = {
      name: `question_${questionContent.length}`,
      label: "Untitled question",
      type: "paragraph",
      list: ["a", "b"],
    };
    setQuestionContent([...questionContent, field]);
  };

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <Text size={30} fontWeight={600}>
            Untitled form
          </Text>

          <div className="Add-icon" onClick={() => addQuestion()}>
            <AddIcon />
          </div>

          <div className="Button-send">
            <Button>Send</Button>
          </div>
        </div>
        <Question questionContent={questionContent} />
      </main>
    </Layout>
  );
};

export default HomePage;
