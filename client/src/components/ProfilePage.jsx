import React from 'react';
import { connect } from 'react-redux';
import actions from '../Redux/actions/';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { browserHistory, Redirect } from "react-router";
import axios from 'axios';

const mapStateToProps = state => {
  return {
    currUser: state.currUser
  }
}

class ProfilePage extends React.Component {
  constructor (props) {
    super (props);
  }
  componentDidMount () {
    console.log('THE CURRENT USER IS: ', this.props.currUser);
  }
  render () {
    return (
      <div id="profile_page">
        <h1>User Profile</h1>
        <div className="profile_pic">{/* profile_pic */}</div>
        <div className="username">{/* username */}</div>
        <div className="name">{/* name */}</div>
      </div>
    );
  }
}

const Profile = withRouter(connect(mapStateToProps)(ProfilePage));
export default Profile;