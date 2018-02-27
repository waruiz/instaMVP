import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../containers/user-list'

class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <div>
       Hello from App.jsx
       <UserList />
      </div>
    );
  }
}

export default App