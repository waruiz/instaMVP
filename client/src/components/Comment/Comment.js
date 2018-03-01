import React from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import actions from "../../Redux/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    updateCommentState: (username) => dispatch(actions.updateCommentState(username))
  }
};

const mapStateToProps = state => {
  return {postCommentState: state.postCommentState}
};

class Comment extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      <ul>
        <li>
          <span className="commentBody">
            <table>
              <tbody>
                <tr>
                  <td className="userCell">
                    <a href={'#'} className="userLink">
                      <strong>USERNAME</strong>
                    </a>
                  </td>
                  <td>
                    <span className="commentText">
                      COMMENT BODY
                    </span>

                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <span className="commentMeta">
                      <em>
                        DATEANDTIME
                      </em>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
        </li>
      </ul>
    </div>)
  }

}

const CommentPage = connect(mapStateToProps, mapDispatchToProps)(Comment);
export default CommentPage;
