import React from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import actions from "../../Redux/actions/index";
import $ from 'jquery'

const mapDispatchToProps = dispatch => {
  return {
    updatePostComments: (comments) => dispatch(actions.updatePostComments(comments))
  }
};

const mapStateToProps = state => {
  return {postCommentState: state.postCommentState, timelineState: state.timelineState}
};

class Comment extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      comment: "so sweet dude",
      submission: 1
    }
    this.addComment = this.addComment.bind(this);
    this.renderComments = this.renderComments.bind(this)
  }

  addComment(props) {
    var content = $(`.${this.props.postID}`).val();
    var theUser = 1;
    // if (this.props.currUser) {
    //   theUser = this.props.currUser;
    // }
    console.log(this.props.postID, 'inside my post dog')
    axios
      .post("/comment", {
        user_id: theUser,
        submission_id: this.props.postID,
        content: content,
      })
      .then(response => {
        $(`.${this.props.postID}`).val('')
        console.log("this is the response", response);
        this.props.updatePostComments(response.data)
      })
      .catch(error => {
        console.log("this is our error", error);
      }).then(axios.get(`/comments/${this.props.postID}`))
  }

  componentDidMount(props) {
    this.renderComments();
  }

  componentWillUnmount() {
    this.props.updatePostComments("initialize");  
  }

  renderComments(props) {
    console.log(`This POST ID IS ${this.props.postID}`)
    axios.get(`/comments/${this.props.postID}`).then(result => {
      this.props.updatePostComments(result.data);
      console.log(this.props, "here be my COMMMENT Props");
    })
  }





  render() {
    return (<div align="center">
      <div align="center">
        {this.props.postID}

        <table>
          <tbody>
            <tr>
              <td>
                {
                  this.props.postCommentState.filter((comment, i) => {
                    if (comment.submission_id === this.props.postID) {
                      return comment;
                    }
                  }).map((comment, i) => {
                    return (<div align="left" key={i}>
                      <span className="commentBody">

                        <span className="userCell">
                          <a href={'#'} className="userLink">
                            <strong>{comment.user_id}</strong>
                          </a>
                        </span>

                        <span className="commentText">
                          {comment.content}
                        </span>

                        <span className="commentMeta">
                          <em></em>
                        </span>

                      </span>
                    </div>)
                  })
                }
                <form align="center" className="form-inline sub-comments" role="form">

                  <input type = 'textbox' className={this.props.postID} placeholder = 'add comment' />

                  <input type = 'button' value = 'ADD COMMENT' onClick = {()=>{this.addComment()}}/>
                </form>

              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>)
  }

}

const CommentPage = connect(mapStateToProps, mapDispatchToProps)(Comment);
export default CommentPage;
