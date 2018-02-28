import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import User from '../User.jsx';

const Navbar = (props) => {
  return (
  <nav>
    <div className="btn-group" role="group" aria-label="...">
      <Link to="/home">
        <button type="button" className="btn btn-default">Home</button>
      </Link>
      <button type="button" className="btn btn-default">LogOut</button>
      <Link to="/user" ><button type="button" className="btn btn-default">User</button></Link>
    </div>
    <Route path="/user" component={User} />
    <Route path="/home" component={Home} />
  </nav>
  )
}
export default Navbar;
