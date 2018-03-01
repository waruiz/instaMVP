import React from "react";
import {connect} from "react-redux";
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import actions from "../Redux/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    updateFollowing: following => dispatch(actions.updateFollowing(following))
  };
};

const mapStateToProps = state => {
  return {followingState: state.followingState};
};

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.getFollowing = this.getFollowing.bind(this);
  }

  getFollowing() {
    //should pull current user from state later on
<<<<<<< HEAD
    axios.get('/following/thejhnny').then((response) => {
      console.log('THIS IS THE RESPONSE ', response.data);
      console.log('this is our props ', this.props.updateFollowing);
      this.props.updateFollowing(response.data);
      // console.log(this.props)
    }).catch((error) => {
      console.log('ERROR IS: ', error);
    })
=======
    axios.get('/following/nelsonchen5')
      .then((response) => {
        console.log('THIS IS THE RESPONSE ', response.data);
        console.log('this is our props ', this.props.updateFollowing);
        this.props.updateFollowing(response.data);
        console.log(this.props)
      })
      .catch((error) => {
        console.log('ERROR IS: ', error);
      })
>>>>>>> refactored add to refresh
  }

  render() {
    return (<div>

      <h2 className="btn btn-primary" data-toggle="modal" data-target=".following-list" onClick={this.getFollowing}>Following</h2>

      <div className="modal fade following-list" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
                 <h5>Following</h5>
          <div className="modal-content">
            {
              this.props.followingState.map((item, i) => {
                return (<div key={i}>{item.username}</div>)
              })
            }
          </div>
        </div>
      </div>

    </div>)
  }
}

const FollowingPage = connect(mapStateToProps, mapDispatchToProps)(Followers);
export default FollowingPage;
