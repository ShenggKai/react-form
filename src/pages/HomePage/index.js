/* eslint-disable react/prop-types */
import React from "react";
import { Layout, Button, Question } from "../../components";
import { AddIcon } from "../../assets/";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, changeTitle } from "../../actions";
import "./style.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.question);

  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  const handleTitleChange = (event) => {
    dispatch(changeTitle("0000", event.target.value));
  };

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <input
            className="Form-title"
            value={formContent[0].title}
            onChange={handleTitleChange}
          />

          <div className="Add-icon" title="Add question" onClick={handleAddQuestion}>
            <AddIcon />
          </div>

          <div className="Button-send">
            <Button>Send</Button>
          </div>
        </div>
        <Question formContent={formContent} />
      </main>
    </Layout>
  );
};

export default HomePage;
