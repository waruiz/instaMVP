import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showFollowing} from './show-following'

class FollowingList extends Component {

  createFollowingListItems() {
    return this.props.following.map( (user) => {
      return (
        <li key={user.id}>{user.username}</li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.createFollowingListItems()}
      </ul>   
    )
  }
}

function mapStateToProps(state){
  return {
    following: state.following
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({showFollowing: showFollowing}, dispatch)
}

export default connect(mapStateToProps)(FollowingList)