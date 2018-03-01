import React from 'react';

import axios from 'axios';
import {connect} from 'react-redux'
import actions from "../../Redux/actions/index";


const mapDispatchToProps = dispatch => {
  return {
    updateAddState: (image_url, caption) => dispatch(actions.updateAddState(image_url, caption))
  };
};

const mapStateToProps = state => {
  return {
    addState: state.addState
  };
};
class Add extends React.Component {
  constructor(props){
    super(props)
    this.postSubmission = this.postSubmission.bind(this)
    this.onCaptionChange = this.onCaptionChange.bind(this)
    this.onImageUrlChange = this.onImageUrlChange.bind(this)
  }

  postSubmission() {
    axios
      .post("/submit", {
        username: "nelsonchen5",
        image_url: this.props.addState.image_url,
        caption: this.props.addState.caption,
      })
      .then(response => {
        console.log("this is the response", response);
      })
      .catch(error => {
        console.log("this is our error", error);
      });
  }
  onCaptionChange(e) {
    this.props.addState.caption = e.target.value
  }

  onImageUrlChange(e){
    this.props.addState.image_url = e.target.value
  }

  render(){
    return(

  <div>
    {console.log(this.props)}
    <input type = 'form' placeholder = 'insert caption' onChange = {this.onCaptionChange}/>
    <input type = 'form' placeholder = 'image url' onChange = {this.onImageUrlChange}/>
    <input type = 'submit' value = 'ADD POST' onClick = {()=>{this.postSubmission()}}/>

  </div>
    )
  }
}

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add)
export default AddContainer;