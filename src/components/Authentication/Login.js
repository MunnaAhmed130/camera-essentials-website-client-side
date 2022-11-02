import { Alert, CircularProgress, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useAuth from "../../Hooks/useAuth";
import useTheme from "../../Hooks/useTheme";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import "./Authentication.css";

const Login = () => {
  const { user, error, userLogin, googleSignIn, isLoading } = useAuth();
  // console.log(error.message);
  const location = useLocation();
  const history = useHistory();
  const { darkMode } = useTheme();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    userLogin(data.email, data.password, location, history);
  };

  const handleGoogleSignIn = () => {
    googleSignIn(location, history);
  };

  return (
    <div className={darkMode ? "dark-auth" : "light"}>
      <Header />
      <div className={`login ${darkMode ? "dark-bg dark-auth" : "light-bg"}`}>
        <div className="login-form-container">
          <h2 className="login-heading">Please Login</h2>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              required="required"
            />{" "}
            <br />
            <input
              {...register("password")}
              type="password"
              placeholder="Your Password"
              required="required"
            />{" "}
            <br />
            <p className="m-0">
              By Signing in, you agree to&nbsp;
              <a href="/login" alt="">
                Terms and Conditions
              </a>{" "}
              and <a href="/login">Privacy Policy</a>.
            </p>
            <Button
              className="login-btn mt-4 mb-3"
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
          {isLoading && (
            <Box>
              <CircularProgress /> <br />
            </Box>
          )}
          {user?.email && (
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
          {/* <div> */}
          <span className="d-block mb-1 alt-sign-in">or Sign In using</span>
          {/* <hr /> */}
          {/* </div> */}

          <Button
            className="mb-4 mt-3 google-login-btn login-btn"
            variant="contained"
            onClick={handleGoogleSignIn}
            type="submit"
          >
            {" "}
            <span className="login-icon">
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            oogle&nbsp; Sign In
          </Button>
          <br />
          <p className="mb-0">
            {" "}
            New User? <br />
            <Link to="/register" className="d-inline-block ">
              Please Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
