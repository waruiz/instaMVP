import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import allReducers from "./Redux/reducers";
import {Provider} from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  BrowserRouter,
  withRouter
} from "react-router-dom";

import NotFound from "./NotFound.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Home/Navbar.jsx";
import Profile from './components/ProfilePage.jsx';

import User from "./components/User.jsx";
import * as firebase from "firebase";

import {connect} from "react-redux";
import actions from "./Redux/actions/index";
import {browerHistory, Redirect} from "react-router";
import axios from 'axios'
// import config from '../../config.js';


const mapDispatchToProps = dispatch => {
  return {
    updateCurrUser: user => dispatch(actions.updateCurrUser(user)),
    updateCurrUserInfo: userInfo => dispatch(actions.updateCurrUserInfo(userInfo)),
    updateCurrClickedUser: user => dispatch(actions.updateCurrClickedUser(user))
  };
};

const mapStateToProps = state => {
  return {currUser: state.currUser, currUserInfo: state.currUserInfo, currClickedUser: state.currClickedUser};
};

firebase.initializeApp(process.env.config);

const store = createStore(allReducers);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    const auth = firebase.auth();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");

    auth.signInWithEmailAndPassword(email.value, password.value).then(response => {
      this.props.updateCurrUser(response.email);
      axios.get(`/user/${response.email}`).then(result => {
        this.props.updateCurrUserInfo(result.data);
        this.props.updateCurrClickedUser(result.data);
      })
    }).catch(function(error) {
      console.log("ERROR: ", error);
    });
  }

  signUp() {
    const auth = firebase.auth();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");

    auth.createUserWithEmailAndPassword(email.value, password.value).then(response => {
      axios.post('/info', {
        username: response.email,
        password: password.value,
        name: response.email
      }).then(response => {
        console.log('successfully added user to local database')
      })
    }).catch(function(error) {
      console.log("ERROR: ", error);
    });
  }

  logout() {
    firebase.auth().signOut().then((response) => {
      this.props.updateCurrUser(null);
    });
  }

  render(props) {
    return (<div>
      <div id="login">
        <input type="email" id="email" placeholder="Email"/>
        <input type="password" id="password" placeholder="Password"/>

        <button id="btnLogin" onClick={() => this.login()} className="btn btn-action">
          Login
        </button>
        <button id="btnSignUp" onClick={() => this.signUp()} className="btn btn-secondary">
          Sign Up
        </button>
        <button id="btnLogout" onClick={() => this.logout()} className="btn btn-action hide">
          Log out
        </button>
      </div>
      {
        (
          this.props.currUser
          ? (<Redirect to="/home"/>)
          : (<Redirect to="/"/>))
      }
      <Route exact="exact" path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/user" component={User}/>
      <Route path="/profile" component={Profile} />
    </div>);
  }
}

const AppPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

ReactDOM.render(<Provider store={store}>
  <Router>
    <AppPage/>
  </Router>
</Provider>, document.getElementById("app"));
