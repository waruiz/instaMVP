import React from 'react';
import ReactDom from 'react-dom';
import Comm from './Comm.jsx'

const CommentList = (props) => {
  return (<div>
    <h3>comments</h3>
    <ul className="commentList"><Comm /></ul>
  </div>)

}

export default CommentList;
