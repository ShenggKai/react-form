import React, { useState } from "react";
import { Layout, Button, Text, Response, Form } from "../../components";
import "./style.css";
import { Link } from "react-router-dom";
import { questionData } from "../../data/question";

const ResponsePage = () => {
  const [formContent, setFormContent] = useState(questionData);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Response");

  const menuQAs = [
    { label: "Question", path: "/home" },
    { label: "Response", path: "/response" },
  ];

  const handleMenuItemClick = (label) => {
    setSelectedMenuItem(label);
  };

  const changeTitle = (itemID, text) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID) return { ...question, title: text };
        else return question;
      });
    });
  };

  // render form content to the screen with Question component and its props
  return (
    <>
      <Layout>
        <main className="Home-main">
          <div className="Form-header">
            <input
              placeholder=""
              className="Form-title"
              value={formContent[0].title}
              onChange={(event) => changeTitle("0", event.target.value)}
            />

            <div className="Button-send">
              <Button>Send</Button>
            </div>
          </div>
          <div className="menuQA-container">
            <ul className="horizontal-menuQA">
              {menuQAs.map((menuQA, index) => (
                <li key={index} className="menuQA-item">
                  <Link
                    to={menuQA.path}
                    className={`menuQA-link ${selectedMenuItem === menuQA.label ? "selected" : ""}`}
                    onClick={() => handleMenuItemClick(menuQA.label)}
                  >
                    <Text size={18} color={"#374957"} fontWeight={700} cursor={"pointer"}>
                      {menuQA.label}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Response />          
        </main>
      </Layout>
    </>
  );
};

export default ResponsePage;
