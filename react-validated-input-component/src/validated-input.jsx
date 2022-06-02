import React, { Component } from 'react';

class ValidatedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isVisible: false
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  checkPasswordValidity() {
    const password = this.state.password.trim();
    const hasDigit = /\d/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()]/.test(password);
    let msg = '';
    let iconValidity = 'fa-solid fa-xmark invalid';
    if (password.length === 0) {
      msg = 'A password is required.';
    } else if (password.length < 8) {
      msg = 'Password is too short.';
    } else if (!hasDigit || !hasCapitalLetter || !hasSpecialCharacter) {
      msg = 'Password must contain a digit, capital letter, and a special character.';
    } else {
      msg = '';
      iconValidity = 'fa-solid fa-check valid';
    }
    return { msg, iconValidity };
  }

  render() {
    const { msg, iconValidity } = this.checkPasswordValidity();
    return (
      <form className='password-form'>
        <label className='password-label' htmlFor="password">Password</label>
        <div className='password-input-container'>
          <input type="password" id="password" className='password-input' name='password' value={this.state.password} onFocus={this.handlePasswordFocus} onChange={this.handlePasswordChange} />
          <i className={iconValidity}></i>
        </div>
        <span className='invalid'>{msg}</span>
      </form>
    );
  }
}

export default ValidatedInput;
