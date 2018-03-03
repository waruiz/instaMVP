import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../../Redux/actions/';

const mapDispatchToProps = dispatch => {
  return {
    updateAddLikeState: (likes) => dispatch(actions.updateAddLikeState(likes))
  }
}

const mapStateToProps = state => {
  return {
    currUser: state.currUser,
    addLikeState: state.addLikeState
  }
}
class Likes extends React.Component {
  constructor (props) {
    super (props);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }
  handleLikeClick () {
    axios.put('/like', {
      data: {
        username: `${this.props.currUser}`,
        postId: this.props.postID
      }
    })
    .then(result => {
      axios.get(`/likes/${this.props.postID}`)
    .then(result => {
      this.props.updateAddLikeState(result.data.like_count);
      })
      .catch(err => {
        console.log('Error during GET Likes: ', err);
      });
    })
  }
  componentDidMount () {
    axios.get(`/likes/${this.props.postID}`)
    .then(result => {
      this.props.updateAddLikeState(result.data.like_count);
      })
      .catch(err => {
        console.log('Error during GET Likes: ', err);
      });
  }
  render () {
    return (
      <div id="likes" onClick={() => {this.handleLikeClick()}}>
        Likes: {this.props.addLikeState}
      </div>
    );
  }
}

const LikesContainer = connect(mapStateToProps, mapDispatchToProps)(Likes);
export default LikesContainer;