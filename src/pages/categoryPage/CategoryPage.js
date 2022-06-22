import React, { useEffect } from "react";
import "./categoryPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

const CategoryPage = () => {
  const Navigate = useNavigate();
  const {
    quizDispatch,
    quizState: { category },
  } = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        quizDispatch({
          type: "SET_CATEGORY",
          payload: response.data.categories,
        });
      } catch (error) {
        console.log("Seems like error in feching");
        Navigate("/");
      }
    })();
  }, []);

  return (
    <>
      <div className="category-title">Select Category</div>
      <div className="category-container">
        {category.map((category) => (
          <div
            key={category._id}
            className="category-card"
            onClick={() => Navigate(`/category/${category._id}`)}
          >
            <img className="image-responsive" src={category.categoryImage} />

            <div className="category-name">
              <div className="container-text">{category.categoryName}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { CategoryPage };
