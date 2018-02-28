import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Submit from "./Submit.jsx";
import Add from "./Add.jsx";
import Requests from "./Requests.jsx";
import User from "../User.jsx";
import Timeline from "./Timeline/Timeline.jsx";
import { connect } from "react-redux";
import actions from "../../Redux/actions/index";
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    updateTimeline: submissions => dispatch(actions.updateTimeline(submissions))
  };
};

const mapStateToProps = state => {
  return {
    timelineState: state.timelineState
  };
};


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getSubmissions = this.getSubmissions.bind(this);
  }

  getSubmissions() {
    console.log(this.props);
    axios.get('/subs')
      .then((response) => {
        console.log('THIS IS THE RESPONSE ', response.data);
        console.log('this is our props ', this.props.updateTimeline);
        this.props.updateTimeline(response.data);
      })
      .catch((error) => {
        console.log('ERROR IS: ', error);
      })
  }

  render() {
    return (
      <div>
        <h1>Insta Home</h1>
        <nav>
          <ul>
            <li>
              <Link to="/submit">Submit</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>

        <div id="timeline">
          <h1>My Timeline</h1>
          <button onClick={this.getSubmissions}>GET SUBMISSIONS</button>
          {this.props.timelineState.map((item) => {
            
            return(<div>{item.caption}</div>)
          })}


          <Timeline />
        </div>
        <Route path="/submit" component={Submit} />
        <Route path="/add" component={Add} />
        <Route path="/requests" component={Requests} />
        {/* <Route path="/user" component={User} /> */}
      </div>
    );
  }
}


const Homepage = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Homepage;
