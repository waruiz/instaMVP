import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));