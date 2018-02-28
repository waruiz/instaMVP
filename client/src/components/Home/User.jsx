import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';

class User extends React.Component {
  constructor (props) {
    super (props);
  }
  
  render () {
    return (
      <div>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
        <h1>User Page</h1>
        <button>Following</button>
        <button>Followers</button>
        <button>Info</button>
        
        <div id="userpage">
          <h1>My Submissions</h1>
          {/* <Submissions/> */}
        </div>
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default User;