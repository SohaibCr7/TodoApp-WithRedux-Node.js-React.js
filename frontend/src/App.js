import SignUpForm from "./Pages/SignUpForm";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import Login from "./Pages/Login";
import TodoList from "./Pages/TodoList";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
function App() {
  console.log("app.js")
  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/ResetPasswordPage" component={ResetPasswordPage} />
      <PrivateRoute path="/TodoList" component={TodoList} /> 
    
      <Route path="/SignUpForm" component={SignUpForm} />
      {/* <Route path="/TodoList" component={TodoList} /> */}
    </div>
  );
}

export default App;
