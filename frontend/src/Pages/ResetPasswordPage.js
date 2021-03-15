import {React,useState} from "react";
import "./SignUpForm.css";
import axios from "axios"

let URL = "http://localhost:8080/ResetPasswordPage";

function ResetPasswordPage () {

  const [pass, setPass] = useState({
    userEmail: "",
    userPassword: "",
  });

 // Change Fields Function
 function changeField(event, key) {
  event.preventDefault();
  setPass({
    ...pass,
    [key]: event.target.value,
  });
}

// Reset Password end Point
function ResetPasswordById(){
  axios
  .put(URL,{
    email: pass.userEmail,
    password: pass.userPassword,
  })
  .then((Response) => {
    alert(`Password of ${Response.data.email} is Updated...!` )
  })

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

          <button type="button" className="btn1" onClick={ResetPasswordById}>
            Conform
          </button>
        </div>
      </form>
    </>
  );
};
export default ResetPasswordPage;