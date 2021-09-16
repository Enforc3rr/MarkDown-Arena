import React from "react";
import MakeMarkDown from "./components/makePosts";
import DisplayPosts from "./components/displayPosts";
import DisplayPost from "./components/displayPost";
import Navbar from "./components/navbar";
import UserLogin from "./components/userLogin";
import UserSignup from "./components/userSignup";
import HomeScreen from "./components/homeScreen";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/createpost" component={MakeMarkDown} />
        <Route path="/viewposts" component={DisplayPosts} />
        <Route path="/viewpost/:postID" children={<DisplayPost />} />
        <Route path="/usersignup" component={UserSignup} />
        <Route path="/userlogin" component={UserLogin} />
      </Switch>
      <Footer />
    </Router>
  );
}
