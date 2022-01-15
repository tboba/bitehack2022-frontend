import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import SignIn from "./components/login/SignIn";
import SignUp from "./components/registration/SignUp";
import Details from "./Details";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
