/* eslint-disable react/prop-types */
import React from "react";
import { Text, Layout, Button, Question } from "../../components";
import { AddIcon } from "../../assets/";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../actions";
import "./style.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <Text size={30} fontWeight={600}>
            Untitled form
          </Text>

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
