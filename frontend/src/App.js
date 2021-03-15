import SignUpForm from "./Pages/SignUpForm";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import Login from "./Pages/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/login" exact component={Login} />
      <Route path="/ResetPasswordPage" component={ResetPasswordPage} />
      <Route path="/SignUpForm" component={SignUpForm}/>
    </div>
  );
}

export default App;
