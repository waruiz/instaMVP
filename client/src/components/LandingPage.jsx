import React from 'react';
import axios from 'axios';

class LandingPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
<<<<<<< HEAD
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
=======
    }
  }
  logIn () {
    axios.post('/login', );
>>>>>>> Skeleton LandingPage component
  }
  render () {
    return (
      <div>
        <form id="sign-up">
<<<<<<< HEAD
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
          <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
          <input type="submit" value="Sign Up" onClick={this.login} />
=======
          <input type="text" name="fullname" placeholder="Full Name" />
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="password" placeholder="Password" />
          <input type="submit" value="Sign Up" />
>>>>>>> Skeleton LandingPage component
        </form>
        <div>
          <p>Have an account? <a href="">Log in</a></p>
        </div>
      </div>
    );
  }
}

export default LandingPage;