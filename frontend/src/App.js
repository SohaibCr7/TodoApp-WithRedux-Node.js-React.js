import SignUpForm from './Pages/SignUpForm';
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/ResetPasswordPage" element={<ResetPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
