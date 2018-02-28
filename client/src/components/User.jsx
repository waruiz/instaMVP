import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home.jsx';


class User extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <div>
        <nav>
          <Link to="/home">User</Link>
        </nav>
        <h1>User Page</h1>
        
        <div id="timeline">
          <h1>My Submissions</h1>
        </div>
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default User;