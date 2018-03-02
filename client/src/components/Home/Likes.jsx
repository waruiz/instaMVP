import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../../Redux/actions/';

const mapDispatchToProps = dispatch => {
  return {
    updateAddLikeState: (liked, likes) => dispatch(actions.updateAddLikeState(liked, likes))
  }
}

const mapStateToProps = state => {
  return {
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
        id: this.props.postID,
        liked: this.props.addLikeState.liked
      }
    })
      .then(result => {
        console.log('Success like');
        this.props.addLikeState.liked = this.props.addLikeState.liked ? false : true;
      });
  }
  componentDidMount () {
    axios.get(`/likes/${this.props.postID}`)
    .then(result => {
        console.log('CURRENT LIKES: ', this.props.addLikeState);
        this.props.addLikeState.likes = result.data.like_count;
      })
      .catch(err => {
        console.log('Error during GET Likes: ', err);
      });
  }
  render () {
    return (
      <div id="likes" onClick={() => {this.handleLikeClick()}}>
        Likes: {this.props.addLikeState.likes}
      </div>
    );
  }
}

const LikesContainer = connect(mapStateToProps, mapDispatchToProps)(Likes);
export default LikesContainer;