import { useEffect } from "react";
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
import Profile from "./components/profile/Profile";
import { fetchPosts } from "./store/postsSlice";
import { useAppDispatch, useAppSelector } from "./store/store-hooks";

const App = () => {
  const posts = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then(res => res.json())
      .then(json => {
        console.warn('test', json);
        return dispatch(fetchPosts(json.content))
      });
  }, [dispatch])

  console.warn(posts);
  return (
    <Router>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
