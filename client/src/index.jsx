<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage.jsx';
import Navbar from './components/Home/Navbar.jsx'

import CommentList from './components/Home/CommentList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (<div>



      <div align="right">
   <Navbar />
      </div>

      <div>
   <LandingPage />
      </div>

      <div>
    <CommentList />
      </div>


    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
=======
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
// import LandingPage from "./components/LandingPage.jsx";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import App from "./components/app.jsx";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
>>>>>>> boilerplate for redux
