import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const Header = () => {
  const { authState, authDispatch } = useAuth();

  const navigate = useNavigate();

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/");
  };

  const loginHandler = () => {
    if (authState.token) {
      logoutHandler();
    }
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="nav">
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <div>
              <Link to="/">Quiz Corner</Link>
            </div>
            <div className="quick-links">
              <Link to="/">
                <p className="quick-link">Home</p>
              </Link>
              <Link to="/categories">
                <p className="quick-link">Category</p>
              </Link>
            </div>
          </div>

          <ul className="right-navbar">
            <li>
              {authState.token ? (
                <Link to="/">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Logout
                  </button>
                  <p onClick={loginHandler}>
                    <i className="show fas fa-sign-out-alt fa-2x"></i>
                  </p>
                </Link>
              ) : (
                <Link to="/signin">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                  <p onClick={loginHandler}>
                    <i className="show fas fa-sign-in-alt fa-2x"></i>
                  </p>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {/* Header Navigation */}
    </>
  );
};

export { Header };
