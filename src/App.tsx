import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import SignIn from "./components/login/SignIn";
import Navbar from "./components/navbar/Navbar";
import {Button} from "@mui/material";

const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <Button variant={"text"}>Text</Button>
                </Link>
              </li>
              <li>
                <Link to="/signIn">Sign in</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/" element={<Navbar/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
