import React, { useState } from "react";
import "./SignUpForm.css";

import axios from "axios";
import { Link } from "react-router-dom";
let URL = "http://localhost:8080/signup";

const SignUpForm = (props) => {
  // User States
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  // Change Fields Function
  function changeField(event, key) {
    event.preventDefault();
    setUser({
      ...user,
      [key]: event.target.value,
    });
  }

  // Sign Up Funtion
  function SignUpUser() {
    axios
      .post(URL, {
        username: user.userName,
        email: user.userEmail,
        password: user.userPassword,
      })
      .then((Response) => {
        props.history.push("/login")
        // alert(`User Registered Sucessfully: ${Response.data.username}`);
      });
  }

  return (
    <>
      <div className="heading">
        <h3>
          SignUp <span>Form</span>
        </h3>
      </div>
      <form>
        <div className="container">
          <label htmlFor="userName">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="userName"
            onChange={(e) => changeField(e, "userName")}
          />

          <label htmlFor="userEmail">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="userEmail"
            onChange={(e) => changeField(e, "userEmail")}
          />

          <label htmlFor="userPassword">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="userPassword"
            onChange={(e) => changeField(e, "userPassword")}
          />

          <button type="button" className="btn1" onClick={SignUpUser}>
            Sign Up
          </button>

          <div className="container2">
            <button type="reset" className="cancelbtn" defaultValue="Reset">
              Cancel
            </button>

            <span className="psw">
              <Link to="/ResetPasswordPage">Forgot Password?</Link>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
