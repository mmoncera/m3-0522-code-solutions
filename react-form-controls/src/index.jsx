import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input required type="text" id="username" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
        <label htmlFor="password">Password</label>
        <input required type="password" id="password" name="password" autoComplete="on" value={this.state.password} onChange={this.handlePasswordChange}/>
        <button>Sign Up</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegistrationFrom />);
