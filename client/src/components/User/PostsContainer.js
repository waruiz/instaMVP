import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import actions from "../../Redux/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    updateUserPosts: posts => dispatch(actions.updateUserPosts(posts))
  };
};

const mapStateToProps = state => {
  return {
    userPostsState: state.userPostsState
  };
};

class PostsContainer extends React.Component {
  constructor (props) {
    super (props);
    this.getUserPosts = this.getUserPosts.bind(this);
  }

  onComponentDidMount () {
    axios.get(`/subs/4`)
      .then(result => {
        this.props.updateUserPosts(result.data);
      })
  }

  render () {
    return (
      <div id="posts-container">
        <h1 onClick={this.getUserPosts}>Posts</h1>
        {this.props.userPostsState.map((post, i) => {
          return (
          <div key ={i}>
            {post.image_url}
          </div>
          )
        })}
      </div>
    );
  }
}

const PostsContainerPage = connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
export default PostsContainerPage;