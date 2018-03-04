import React from "react";

import {Route, Link} from "react-router-dom";

import axios from "axios";
import {connect} from "react-redux";
import actions from "../../Redux/actions/index";
import Comment from '../Comment/Comment.jsx';
import { Image, Circle, Grid, Row, Col } from 'react-bootstrap';

const mapDispatchToProps = dispatch => {
  return {
    updateUserPosts: posts => dispatch(actions.updateUserPosts(posts))
  };
};
const mapStateToProps = state => {
  return {userPostsState: state.userPostsState, currUser: state.currUser};
};

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getUserPosts = this.getUserPosts.bind(this);
  }

  getUserPosts() {
    axios.get(`/subs/${this.props.currUser}`).then(result => {
<<<<<<< HEAD
=======
      console.log(result.data, 'here are post container props');
>>>>>>> fixed user render
      this.props.updateUserPosts(result.data);
    });
  }

  componentDidMount() {
    this.getUserPosts();
  }

  postRender(props) {
    var content = [];

    this.props.userPostsState.forEach((post, i) => {

        content.push(
          <Col className="postClass" key={i} xs={6} md={4} className="col-sm">
            <Image width="50%" src={post.image_url} rounded/>
            <Comment postID={post.id}/>
          </Col>
        )

    });

    return (<div align="left">
      {content}
    </div>);

  }

  render() {
    return (
      <Grid id="post-container" className="container post-container">
      <h1 >
        Posts
      </h1>

        {this.postRender()}

    </Grid>);
  }
}

const PostsContainerPage = connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
export default PostsContainerPage;
