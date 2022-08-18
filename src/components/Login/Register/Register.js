import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Alert, CircularProgress, Button, Box } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import Header from "../../Shared/Header/Header";
import "./Register.css";
import Footer from "../../Shared/Footer/Footer";
import useTheme from "../../../Hooks/useTheme";

const Register = () => {
  const { user, error, userRegister, isLoading } = useAuth();
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
      <h2 className="register-heading">Please Register</h2>
      {!isLoading && (
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Your name"
            required="required"
          />{" "}
          <br />
          <input
            {...register("email", { required: true })}
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
          <Link to="./login">Already Registered? Login</Link> <br />
          <Button className="mb-3" variant="contained" type="submit">
            Register
          </Button>
        </form>
      )}
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
      <Footer />
    </div>
  );
};

export default Register;
