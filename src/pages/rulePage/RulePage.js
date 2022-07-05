import React from "react";
import "./rulePage.css";
import { useNavigate, useParams } from "react-router-dom";

const RulePage = () => {
  const Navigate = useNavigate();
  const { quizId } = useParams();

  return (
    <>
      <div>
        <div className="category-title">Rules For Quiz</div>
        <div className="rule-container">
          <div className="rule-wrapper-container">
            <ul className="list-style">
              <li className="list-element">
                There are five questions in the quiz
              </li>
              <li className="list-element">
                Click on next button to save answer and move to next question
              </li>
              <li className="list-element">Only one chance for each answer</li>
              <li className="list-element">
                For each correct answer gets 15 points
              </li>
              <li className="list-element">
                For each wrong answer gets 0 points
              </li>
            </ul>

            <button
              onClick={() => Navigate(`/questions/${quizId}/${1}`)}
              className="btn btn-primary"
            >
              Let's go!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { RulePage };
