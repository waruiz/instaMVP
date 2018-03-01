import React from 'react';
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
  }
  componentDidMount () {
    axios.get(`/subs/4`)
      .then(result => {
        this.props.updateUserPosts(result.data);
      })
  }
  render () {
    return (
      <div id="posts-container">
        <h1>Posts</h1>
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