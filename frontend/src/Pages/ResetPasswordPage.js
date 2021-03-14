import {React,useState} from "react";
import "./SignUpForm.css";

function ResetPasswordPage () {

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

          <button type="button" className="btn1" >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
export default ResetPasswordPage;