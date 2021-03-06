import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../Redux/actions/";

const mapDispatchToProps = dispatch => {
  return {
    updateAddRequestState: username => dispatch(actions.updateAddRequestState(username)),
    updateTimeline: submissions => dispatch(actions.updateTimeline(submissions))
  };
};

const mapStateToProps = state => {
  return {
    addRequestState: state.addRequestState,
    currUser: state.currUser,
    timelineState: state.timelineState
  };
};

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.postRequest = this.postRequest.bind(this);
  }
  onUsernameChange(e) {
    this.props.addRequestState.username = e.target.value;
  }
  postRequest() {
    axios
      .post("/requestfollower", {
        host: this.props.addRequestState.username,
        username: this.props.currUser
      })
      .then(result => {
        console.log("Successful friend request: ", result);
        axios.get(`/subs/following/${this.props.currUser}`).then(response => {
          this.props.updateTimeline(response.data);
        });
      })
      .catch(err => {
        console.log("Failed friend request: ", err);
      });
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            onChange={this.onUsernameChange}
          />
          <input
            type="button"
            value="Follow"
            onClick={() => {
              this.postRequest();
            }}
          />
        </form>
      </div>
    );
  }
}

const RequestsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Requests
);
export default RequestsContainer;
