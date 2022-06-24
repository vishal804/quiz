import "./App.css";
import { Header } from "./component";
import { PrivateRoutes } from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import {
  CategoryPage,
  HomePage,
  QuizListingPage,
  QuizPage,
  ResultPage,
  RulePage,
  Signin,
  Signup,
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<QuizListingPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/rules/:quizId" element={<RulePage />} />
          <Route path="/questions/:quizId/:questionId" element={<QuizPage />} />
          <Route path="/result/:quizId" element={<ResultPage />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
