import React from "react";
import "LoginFoam.css";
export default ResetPasswordPage = () => {
  return (
    <>
      <div className="heading">
        <h3>
          Reset <span>Password</span>
        </h3>
      </div>
      <form>
        <div className="container">
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
        </div>
      </form>
    </>
  );
};
