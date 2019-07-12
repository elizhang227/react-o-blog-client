import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogList from './components/blogList';
import BlogPost from './components/blogPost';
import AddPost from './components/addPost';

import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' exact component={BlogList} />
      <Route path='/post/:post_id?' component={BlogPost} />
      <AddPost />
    </Router>
  );
}

export default App;
