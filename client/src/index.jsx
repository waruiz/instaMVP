import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import App from "./components/app.jsx";

import LandingPage from './components/LandingPage.jsx';
import Navbar from './components/Home/Navbar.jsx'
import CommentList from './components/Home/CommentList.jsx'

const store = createStore(allReducers);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
    <div>
      <div align="right"><Navbar /></div>
      <div><LandingPage /></div>
      <div><CommentList /></div>
    </div>
    );
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
