import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Submit from './Submit.jsx';
import Add from './Add.jsx';
import Requests from './Requests.jsx';
import User from './User.jsx';
import Timeline from './Timeline/Timeline.jsx';

class Home extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <h1>Insta Home</h1>
        <nav>
          <ul>
            <li>
              <Link to="/submit">Submit</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
        
        <div id="timeline">
          <h1>My Timeline</h1>
          <Timeline />
        </div>
        <Route path="/submit" component={Submit} />
        <Route path ="/add" component={Add} />
        <Route path="/requests" component={Requests} />
        <Route path="/user" component={User} />
      </div>
    );
  }
}

export default Home;