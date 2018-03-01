import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home.jsx';
import PostsContainerPage from './User/PostsContainer.js';
import Following from './Following.jsx';
import Followers from './Followers.jsx';
import InfoPage from './User/Info.js';

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
        <InfoPage />
        <PostsContainerPage />
        <Following/>
        <Followers/>
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default User;