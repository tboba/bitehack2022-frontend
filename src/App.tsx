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
          <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/" element={<Navbar/>}/>
          </Routes>
      </Router>
  );
}

export default App;
