import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from "./Redux/reducers";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Route,
  IndexRoute
} from "react-router-dom";

// import App from "./components/app.jsx";
import NotFound from "./NotFound.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Home/Navbar.jsx";
import CommentList from "./components/Home/CommentList.jsx";
import User from "./components/User.jsx";
import * as firebase from "firebase";

import { connect } from "react-redux";
import actions from "./Redux/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    updateCurrUser: followers => dispatch(actions.updateCurrUser(followers))
  };
};

const mapStateToProps = state => {
  return {
    currUser: state.currUser
  };
};

var config = {
  apiKey: "AIzaSyBNcvgQ3DZNMCGvtUwsAH4roqoRcph1ZWw",
  authDomain: "instamvp-27932.firebaseapp.com",
  databaseURL: "https://instamvp-27932.firebaseio.com",
  projectId: "instamvp-27932",
  storageBucket: "instamvp-27932.appspot.com",
  messagingSenderId: "434695589661"
};

firebase.initializeApp(config);

const store = createStore(allReducers);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  login() {
    const auth = firebase.auth();
    const email = document.getElementById("email");
    console.log(email.value);
    const password = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");
    var context = this;
    auth.signInWithEmailAndPassword(email.value, password.value)
    .then((response) => {
      console.log('RESPONSE EMAIL: ', response.email);
      console.log('RIGHT HEREEE', this.props)
      this.props.updateCurrUser(response.email);
      console.log(context.props.currUser)
    })
    .catch(function(error){
      console.log('ERROR: ', error)
    })
  }

  signUp() {
    const auth = firebase.auth();
    const email = document.getElementById("email");
    console.log(email.value);
    const password = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");
    
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(function(response){
      console.log('RESPONSE: ' ,response)
      
    })
    .catch(function(error){
      console.log('ERROR: ', error)
    })
  }



  render(props) {
    return (
      <div>
        <h1>{this.props.currUser}</h1>
        <div id="login">
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />

          <button id="btnLogin" onClick={this.login} className="btn btn-action">
            Login
          </button>
          <button id="btnSignUp" onClick={this.signUp} className="btn btn-secondary">
            Sign Up
          </button>
          <button id="btnLogout" id="btnLogout" className="btn btn-action hide">
            Log out
          </button>
        </div>

        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
      </div>
    );
  }
}

const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppPage;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
