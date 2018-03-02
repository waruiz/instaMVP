import React from "react";

import { Route, Link } from "react-router-dom";

import axios from "axios";
import { connect } from "react-redux";
import actions from "../../Redux/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    updateUserPosts: posts => dispatch(actions.updateUserPosts(posts))
  };
};
const mapStateToProps = state => {
  return { userPostsState: state.userPostsState, currUser: state.currUser };
};

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getUserPosts = this.getUserPosts.bind(this);
  }

  getUserPosts() {
    axios.get(`/subs/${this.props.currUser}`).then(result => {
      console.log(this.props);
      this.props.updateUserPosts(result.data);
    });
  }

  render() {
    return (
      <div id="posts-container">
        <h1
          className="btn btn-primary"
          data-toggle="modal"
          data-target=".postbox"
          onClick={this.getUserPosts}
        >
          Posts
        </h1>

        <div
          className="modal fade postbox"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              {this.props.userPostsState.map((post, i) => {
                return (
                  <div key={i}>
                    <img width="100%" src={post} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const PostsContainerPage = connect(mapStateToProps, mapDispatchToProps)(
  PostsContainer
);
export default PostsContainerPage;
