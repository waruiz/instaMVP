import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showFollowers} from './show-followers'

class FollowerList extends Component {

  createFollowerListItems() {
    return this.props.followers.map( (follower) => {
      return (
        <li key={follower.id}>{follower.username}</li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.createFollowerListItems()}
      </ul>   
    )
  }
}

function mapStateToProps(state){
  return {
    followers: state.followers
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({showFollowers: showFollowers}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FollowerList)