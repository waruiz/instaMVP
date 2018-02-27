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
