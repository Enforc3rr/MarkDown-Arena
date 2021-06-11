import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MakeMarkDown from './components/makePosts';
import DisplayPosts from './components/displayPosts';
import DisplayPost from './components/displayPost';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/createpost" component={MakeMarkDown} />
      </Switch>      
      <Switch>
        <Route path="/viewposts" component={DisplayPosts} />
      </Switch>   
      <Switch>
        <Route path="/viewpost" component={DisplayPost} />
      </Switch>   
    </Router>
  );
}
