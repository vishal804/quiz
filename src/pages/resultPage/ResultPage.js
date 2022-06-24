import React from "react";
import "./resultPage.css";
import { useQuiz } from "../../context/quiz-context";

const ResultPage = () => {
  const {
    quizState: { quiz, questionAnswers, score, isFeching },
  } = useQuiz();

  return (
    <>
      {isFeching ? (
        console.log("THIS IS  FECHING Wait")
      ) : (
        <div className="result-container">
          <div className="category-title">Final Scorecard</div>
          <div className="sm-title">
            Final Score:{" "}
            <p className="result">
              {score}/{75}
            </p>
          </div>
          <div className="mid-container">
            {quiz.mcqs.map((data, index) => (
              <div className="sm-container" key={index}>
                <p className="question">{data.question}</p>
                <ul>
                  {data.options.map((option, index) => (
                    <div key={index}>
                      <li
                        className={`display-btn-style btn-lg 
                     ${data.answer === option ? "answer" : "background-color"} 
                     ${
                       option === questionAnswers[data._id]
                         ? "selected"
                         : "background-color"
                     }
                          `}
                      >
                        {option}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { ResultPage };
