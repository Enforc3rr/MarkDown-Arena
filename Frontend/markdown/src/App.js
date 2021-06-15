import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MakeMarkDown from './components/makePosts';
import DisplayPosts from './components/displayPosts';
import DisplayPost from './components/displayPost';
import Navbar from './components/navbar';
import UserLogin from './components/userLogin';
import UserSignup from './components/userSignup';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" />
      <Switch>
        <Route path="/createpost" component={MakeMarkDown} />
      </Switch>      
      <Switch>
        <Route path="/viewposts" component={DisplayPosts} />
      </Switch>   
      <Switch>
        <Route path="/viewpost/:postID" children={<DisplayPost />} />
      </Switch> 
      <Switch>
        <Route path="/usersignup" component={UserSignup} />
      </Switch>  
      <Switch>
        <Route path="/userlogin" component={UserLogin} />
      </Switch> 
    </Router>
  );
}

