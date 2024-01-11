/* eslint-disable react/prop-types */
import React from "react";
import { Layout, Button, Question } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../../actions";
import "./style.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.question);

  const handleTitleChange = (event) => {
    dispatch(changeTitle("0000", event.target.value));
  };

  return (
    <Layout>
      <main className="Home-main">
        <div className="Form-header">
          <input
            placeholder=""
            className="Form-title"
            value={formContent[0].title}
            onChange={handleTitleChange}
          />

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
