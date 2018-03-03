import React from 'react';

import axios from 'axios';
import {connect} from 'react-redux'
import actions from "../../Redux/actions/index";
import ReactFilestack, { client } from "filestack-react";


const mapDispatchToProps = dispatch => {
  return {
    updateAddState: (image_url, caption) => dispatch(actions.updateAddState(image_url, caption)),
    updateTimeline: submissions => dispatch(actions.updateTimeline(submissions))
  };
};

const mapStateToProps = state => {
  return {
    addState: state.addState,
    timelineState: state.timelineState,
    currUser: state.currUser,
  };
};
const options = {
  accept: "image/*",
  maxFiles: 5,
  storeTo: {
    location: "s3"
  }
};
class Add extends React.Component {
  constructor(props){
    super(props)
    this.postSubmission = this.postSubmission.bind(this)
    this.onCaptionChange = this.onCaptionChange.bind(this)
    this.onImageUrlChange = this.onImageUrlChange.bind(this)
    this.onSuccess = this.onSuccess.bind(this);
  }
  onSuccess(result) {
    console.log("file stack result: ", result);
    this.props.addState.image_url = result.filesUploaded[0].url;
  }

  postSubmission() {
    axios
      .post("/submit", {
        username: this.props.currUser,
        image_url: this.props.addState.image_url,
        caption: this.props.addState.caption,
      })
      .then(response => {
        axios.get(`/subs/${this.props.currUser}`).then(response => {
          this.props.updateTimeline(response.data)
        })
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
    <input type = 'form' placeholder = 'insert caption' onChange = {this.onCaptionChange}/>
    {/* <input type = 'form' placeholder = 'image url' onChange = {this.onImageUrlChange}/> */}
    <ReactFilestack
          apikey="Af4grpuWtTk6IdNCYHbTbz"
          buttonText="Upload a picture!"
          buttonClass="classname"
          options={options}
          onSuccess={this.onSuccess}
        />
    <input type = 'submit' value = 'ADD POST' onClick = {()=>{this.postSubmission()}}/>

  </div>
    )
  }
}

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add)
export default AddContainer;