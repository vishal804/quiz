import React, { useEffect } from "react";
import "./quizListingPage.css";
import axios from "axios";
import { useQuiz } from "../../context/quiz-context";
import { ErrorToast } from "../../component";
import { useNavigate, useParams } from "react-router-dom";

const QuizListingPage = () => {
  const { categoryId } = useParams();
  const Navigate = useNavigate();
  const {
    quizDispatch,
    quizState: { quizes },
  } = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/quizzes/`);
        quizDispatch({ type: "SET_GET_QUIZ", payload: response.data.quizes });
      } catch (error) {
        Navigate("/");
        ErrorToast("Seems like error", error);
      }
    })();
  }, [Navigate, quizDispatch]);

  const filterQuiz = quizes.filter((quiz) => quiz._id === categoryId);

  return (
    <>
      <div className="category-title">Select Quiz</div>
      <div className="category-container">
        {filterQuiz.map((quizOne, index) => (
          <div className="card" key={index}>
            <div className="card-image-container">
              <img
                className="image-responsive"
                src={quizOne.quizImage}
                alt="card"
              />
            </div>
            <div className="card-container">
              <div>
                <p className="quiz-title">{quizOne.title}</p>
                <p className="quiz-subtitle">{quizOne.description}</p>

                <ul className="list-style">
                  <li>5 questions</li>
                </ul>
              </div>
              <div className="card-btn-container">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => Navigate(`/rules/${quizOne._id}`)}
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { QuizListingPage };
