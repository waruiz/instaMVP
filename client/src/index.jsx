import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// import App from "./components/app.jsx";
import NotFound from './NotFound.jsx';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Home/Navbar.jsx';
import CommentList from './components/Home/CommentList.jsx';
import User from './components/Home/User.jsx'

const store = createStore(allReducers);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div>
        {/* <div align="right"><Navbar /></div> */}
        {/* <div><CommentList /></div> */}
        {/* <ul> */}
          {/* <li><Link to="/login">Login or Sign Up</Link></li> */}
          {/* <li><Link to="/home">User Home</Link></li> */}
        {/* </ul> */}
        <Route path="/login" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        {/* <Route path="*" component={NotFound} /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);