import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../../Redux/actions/';

const mapDispatchToProps = dispatch => {
  return {
    updateAddRequestState: (username) => dispatch(actions.updateAddRequestState(username))
  }
};

const mapStateToProps = state => {
  return {
    addRequestState: state.addRequestState,
    currUser: state.currUser,
  }
};

class Requests extends React.Component {
  constructor (props) {
    super (props);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.postRequest = this.postRequest.bind(this);
  }
  onUsernameChange (e) {
    this.props.addRequestState.username = e.target.value;
  }
  postRequest () {
    axios
      .post('/requestfollower', {
        host: this.props.currUser,
        username: this.props.addRequestState.username
      })
      .then(result => {
        console.log('Successful friend request: ', result);
      })
      .catch(err => {
        console.log('Failed friend request: ', err);
      })
  }
  render () {
    return (
      <div>
        <form>
        <input type="text" name="username" placeholder="Username" autoComplete="off" onChange={this.onUsernameChange} />
        <input type="submit" value="Follow" onClick={() =>{this.postRequest()}} />
        </form>
      </div>
    );
  }
}

const RequestsContainer = connect(mapStateToProps, mapDispatchToProps)(Requests);
export default RequestsContainer;
