import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import Home from './Home/Home.jsx';
import PostsContainerPage from './User/PostsContainer.js';
import Following from './Following.jsx';
import Followers from './Followers.jsx';
import InfoPage from './User/Info.js';

import {connect} from "react-redux";
import actions from "../Redux/actions/index";
import {browerHistory, Redirect} from "react-router";
import styles from '../styles/button.css';

const mapStateToProps = state => {
  return {currUser: state.currUser};
};

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  // axios
  render() {
    // mapping over axios res
    return (<div>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <button className="button search">Search</button>
      <h1>User Page</h1>
      <Following/>
      <Followers/>
      <InfoPage/>

      <PostsContainerPage/>

      <Route path="/home" component={Home}/>
    </div>);
  }
}

export default withRouter(connect(mapStateToProps)(User));
