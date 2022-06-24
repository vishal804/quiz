import "./App.css";
import { Header } from "./component";
import { Routes, Route } from "react-router-dom";
import { CategoryPage, HomePage, Signin, Signup } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
