import React from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import actions from "../../Redux/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    updatePostComments: (comments) => dispatch(actions.updatePostComments(comments))
  }
};

const mapStateToProps = state => {
  return {postCommentState: state.postCommentState,
          timelineState: state.timelineState                                      }
};

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i, event) {
    console.log(i);
  }

  renderComments(props) {
    console.log(`This POST ID IS ${this.props.postID}`)
    axios.get(`/comments/${this.props.postID}`)
    .then(result => {
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
                  this.props.postCommentState.map((comment, i) => {
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
                  <div class="form-group">
                    <input className="form-control" type="text" placeholder="Your comments"/>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-default">Add</button>
                  </div>
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
