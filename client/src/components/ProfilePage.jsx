import React from 'react';
import { connect } from 'react-redux';
import actions from '../Redux/actions/';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { browserHistory, Redirect } from "react-router";
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    updateProfilePicState: img_url => dispatch(actions.updateProfilePicState(img_url)),
    updateNameState: name => dispatch(actions.updateNameState(name))
  }
}

const mapStateToProps = state => {
  return {
    currUser: state.currUser,
    profilePicState: state.profilePicState,
    nameState: state.nameState
  }
}

class ProfilePage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      profile_img_url: '',
      name: ''
    }
    this.handleProfileImgUrl = this.handleProfileImgUrl.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleProfileImgUrl (e) {
    this.setState({profile_img_url: e.target.value});
  }
  handleNameChange (e) {
    this.setState({name: e.target.value});
  }
  handleSubmit () {
    axios.put('/updateProfile', {
      data: {
        name: this.state.name,
        profile_pic: this.state.profile_img_url,
        username: this.props.currUser
      }
    })
    .then(result => {
      // this.props.updateNameState(result.data.name);
      // this.props.updateProfilePicState(result.data.profile_pic);
      console.log(result);
    })
    .catch(err => {
      console.log('Error while trying to update profile settings: ', err);
    })
  }
  componentDidMount () {
    axios.get(`/info/${this.props.currUser}`)
      .then(result => {
        this.props.updateProfilePicState(result.data.profile_pic);
        this.props.updateNameState(result.data.name);
      });
  }
  render () {
    return (
      <div id="profile_page">
        <h1>User Profile</h1>
        <form>
          <div className="profile_pic">
            Profile Picture:
            <input type="text"
              placeholder="change image url"
              onChange={this.handleProfileImgUrl}
            /><br />
            {this.props.profilePicState}
          </div>
          <div className="username">Username: {this.props.currUser}</div>
          <div className="name">
            Name: {this.props.nameState} <br />
            <input type="text"
              placeholder="change profile name"
              onChange={this.handleNameChange}
            />
          </div>
          <input type="submit" value="Save Changes" onClick={() => {this.handleSubmit()}} />
        </form>
      </div>
    );
  }
}

const Profile = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
export default Profile;