import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import allReducers from "./Redux/reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route, IndexRoute } from 'react-router-dom';

// import App from "./components/app.jsx";
import NotFound from './NotFound.jsx';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Home/Navbar.jsx'
import CommentList from './components/Home/CommentList.jsx'
import User from './components/User.jsx';

const store = createStore(allReducers);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById("app")
);