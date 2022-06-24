import React, { useEffect } from "react";
import "./quizListingPage.css";
import axios from "axios";
import { useQuiz } from "../../context/quiz-context";
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
        console.log(error);
      }
    })();
  }, [Navigate, quizDispatch]);

  const filterQuiz = quizes.filter((quiz) => quiz._id === categoryId);

  return (
    <>
      <div className="category-title">Select Quiz</div>
      <div className="category-container">
        {filterQuiz.map((quizOne) => (
          <div class="card">
            <div class="card-image-container">
              <img
                class="image-responsive"
                src={quizOne.quizImage}
                alt="card"
              />
            </div>
            <div class="card-container">
              <div>
                <p class="quiz-title">{quizOne.title}</p>
                <p class="quiz-subtitle">{quizOne.description}</p>

                <ul className="list-style">
                  <li>5 questions</li>
                </ul>
              </div>
              <div class="card-btn-container">
                <button
                  class="btn btn-primary btn-lg"
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
