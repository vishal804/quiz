import React, { useEffect } from "react";
import "./quizPage.css";
import axios from "axios";
import { QuestionCard } from "../../component";
import { useQuiz } from "../../context/quiz-context";
import { useAuth } from "../../context/auth-context";
import { useNavigate, useParams } from "react-router-dom";

const QuizPage = () => {
  const { quizId } = useParams();
  const Navigate = useNavigate();
  const {
    quizDispatch,
    quizState: { quiz, currentQuestion, isFeching },
  } = useQuiz();
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/quizzes/${quizId}`, {
          headers: { authorization: token },
        });
        quizDispatch({ type: "SET_QUIZ", payload: response.data.quiz });
      } catch (error) {
        Navigate("/");
        console.log(error);
      }
    })();
  }, [Navigate, quizDispatch, quizId, token]);

  return (
    <>
      {isFeching ? (
        <div className="loading">
          <i className="fas fa-sync fa-spin fa-5x"></i>
        </div>
      ) : (
        <div>
          {currentQuestion && (
            <>
              <QuestionCard quiz={quiz} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export { QuizPage };
