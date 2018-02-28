import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
// import allReducers from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route, IndexRoute } from 'react-router-dom';

// import App from "./components/app.jsx";
import NotFound from './NotFound.jsx';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
<<<<<<< HEAD
import Navbar from './components/Home/Navbar.jsx';
import CommentList from './components/Home/CommentList.jsx';
import User from './components/Home/User.jsx'
=======
import Navbar from './components/Home/Navbar.jsx'
import CommentList from './components/Home/CommentList.jsx'
import User from './components/User.jsx';
>>>>>>> 7a5fe50b9e286f55f33c601a439d9f612b65cdb1

// const store = createStore(allReducers);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div>
<<<<<<< HEAD
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
=======
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
>>>>>>> 7a5fe50b9e286f55f33c601a439d9f612b65cdb1
      </div>
    );
  }
}

ReactDOM.render(
  
    <Router>
      <App />
    </Router>
  ,
  document.getElementById("app")
);