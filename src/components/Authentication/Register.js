import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Alert, CircularProgress, Button, Box } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import useTheme from "../../Hooks/useTheme";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import "./Authentication.css";

const Register = () => {
  const { user, error, userRegister, isLoading } = useAuth();
  console.log(isLoading);
  const history = useHistory();
  const { darkMode } = useTheme();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.password2) {
      alert("your password did not match");
      return;
    }
    userRegister(data.email, data.password, data.name, history);
    console.log(user);
  };
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <div className={`register ${darkMode ? "dark-bg" : "light-bg"}`}>
        <div className="register-form-container">
          <h2 className="register-heading">Please Register</h2>
          {/* {!isLoading && ( */}
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your name"
              required="required"
            />{" "}
            <br />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
              required="required"
            />{" "}
            <br />
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Your password"
              required="required"
            />{" "}
            <br />
            <input
              type="password"
              {...register("password2", { required: true })}
              placeholder="Confirm your password"
              required="required"
            />{" "}
            <br />
            <p className="m-0">
              By continuing, you agree to{" "}
              <a href="/login" alt="">
                Terms and Conditions
              </a>{" "}
              and <a href="/login">Privacy Policy</a>.
            </p>
            <Button
              className="my-4 register-btn"
              variant="contained"
              type="submit"
            >
              Register
            </Button>
            <br />
          </form>
          {/* )} */}
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
          <p>
            {" "}
            Already Have an Account? <br />
            <Link to="/login" className="d-inline-block mb-2">
              Please Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
