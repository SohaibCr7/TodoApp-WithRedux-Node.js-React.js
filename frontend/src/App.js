import SignUpForm from "./Pages/SignUpForm";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import Login from "./Pages/Login";
import TodoList from "./Pages/TodoList";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/ResetPasswordPage" component={ResetPasswordPage} />
      <Route path="/SignUpForm" component={SignUpForm}/>
      <Route path="/TodoList" component={TodoList} />
    </div>
  );
}

export default App;
