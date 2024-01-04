/* eslint-disable react/prop-types */
import React from "react";
import { Text, Layout, Button, Question } from "../../components";
import { AddIcon } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../actions";
import "./style.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question);

  const handleAdd = () => {
    dispatch(addQuestion("Untitled", "paragraph", ["a", "b"]));
  };

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <Text size={30} fontWeight={600}>
            Untitled form
          </Text>

          <div className="Add-icon" onClick={() => handleAdd()}>
            <AddIcon />
          </div>

          <div className="Button-send">
            <Button>Send</Button>
          </div>
        </div>
        <Question questionContent={questions} />
      </main>
    </Layout>
  );
};

export default HomePage;
