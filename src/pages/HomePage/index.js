/* eslint-disable react/prop-types */
import React from "react";
import { Layout, Button, Question } from "../../components";
import { AddIcon } from "../../assets/";
import { useDispatch } from "react-redux";
import { addQuestion, changeTitle } from "../../actions";
import "./style.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  const handleTitleChange = (event, itemID) => {
    // dispatch(changeTitle(itemID, event.target.value));
    console.log(event.target.value);
  };

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <input
            defaultValue={"Form title"}
            className="Form-title"
            onChange={(event) => handleTitleChange(event, 1)}
          />

          <div className="Add-icon" title="Add question" onClick={handleAddQuestion}>
            <AddIcon />
          </div>

          <div className="Button-send">
            <Button>Send</Button>
          </div>
        </div>
        <Question />
      </main>
    </Layout>
  );
};

export default HomePage;
