import React from 'react';
import axios from 'axios';

class Likes extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      likes: 0,
      liked: false
    }
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }
  handleLikeClick () {
    axios.put('/like', {
      data: {id: 5}
    })
      .then(result => {
        console.log('Success like');
        this.setState({liked: true});
      });
  }
  componentDidMount () {
    axios.get('/likes/5')
    .then(result => {
        this.setState({likes: result.data.like_count})
      })
      .catch(err => {
        console.log('Error during GET Likes: ', err);
      });
  }
  render () {
    return (
      <div id="likes" onClick={() => {this.handleLikeClick()}}>
        Likes: {this.state.likes}
      </div>
    );
  }
}

export default Likes;