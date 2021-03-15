import { React, useState } from "react";
import {Link} from "react-router-dom";

import axios from "axios";
import "./SignUpForm.css";


let URL = "http://localhost:8080/login";
export default function Login(props) {
  const [userLogin, setUserLogin] = useState({
    userName: "",
    userPassword: "",
  });

  function Login() {
    axios.post(URL, {
      username: userLogin.userName,
      password: userLogin.userPassword,
    }).then((Response) => {
        console.log("Backend Response: ",Response)
        // props.history.push("/login")
        // alert(`User Registered Sucessfully: ${Response.data.username}`);
      });
  }

  function changeField(event, key) {
    event.preventDefault();
    setUserLogin({
      ...userLogin,
      [key]: event.target.value,
    });
  }

  return (
    <form>
      <div className="heading">
        <h3>
          Login <span>Panel</span>
        </h3>
      </div>
      <div className="container">
        <label htmlFor="userEmail">
          <b>User Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="userName"
          onChange={(e) => changeField(e, "userName")}
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
        <button type="button" className="btn1" onClick={Login}>
          Login
        </button>
        <span className="psw">
          <Link to="/SignUpForm">Register Your Self</Link>
        </span>
      </div>
    </form>
  );
}
