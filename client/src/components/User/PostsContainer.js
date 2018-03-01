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

  getUserPosts () {
    axios.get(`/subs/4`)
      .then(result => {
        console.log(this.props);
        this.props.updateUserPosts(result.data);
      })
  }

  render () {
    return (
      <div id="posts-container">
        <h1 className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={this.getUserPosts}>Posts</h1>

  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        {this.props.userPostsState.map((post, i) => {
              return (
              <div key ={i}>
                <img width="30%" src={post.image_url} />
              </div>
              )
            })}
      </div>
    </div>
  </div>



      </div>
    );
  }
}

const PostsContainerPage = connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
export default PostsContainerPage;
