import React from 'react';
import axios from 'axios';
// import Home from './Home/Home.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './Home/Navbar.jsx';

class LandingPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      username: '',
      password: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange (e) {
    const { name, value } = e.target;
    this.setState({[name]: value});
    console.log(this.state);
  }

  login () {
    // axios.post('/login', );
    }


  render () {
    return (
      <div>
        {/* <Navbar />
        <form id="sign-up">
          <input type="text" name="email" placeholder="Email" autoComplete="email" onChange={this.handleChange} />
          <input type="text" name="username" placeholder="Username" autoComplete="off" onChange={this.handleChange} />
          <input type="text" name="password" placeholder="Password" autoComplete="off" onChange={this.handleChange} />
          <input type="submit" value="Sign Up" onClick={this.login} />
        </form>
        <div>
          <p>Have an account? <a href="">Log in</a></p>
        </div> */}
      </div>
    );
  }
}

export default LandingPage;
