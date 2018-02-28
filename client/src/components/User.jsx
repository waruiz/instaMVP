import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home.jsx';
import PostsContainerPage from './User/PostsContainer.js';

class User extends React.Component {
  constructor (props) {
    super (props);
  }
  // axios
  render () {
    // mapping over axios res
    return (
      <div>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
        <h1>User Page</h1>
        
        <PostsContainerPage />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default User;