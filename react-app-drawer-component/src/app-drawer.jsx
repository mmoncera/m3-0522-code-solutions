import React, { Component } from 'react';

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleOpenCloseMenu = this.handleOpenCloseMenu.bind(this);
  }

  handleOpenCloseMenu(event) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        {this.state.isOpen && (
        <>
          <div className="overlay" onClick={this.handleOpenCloseMenu}></div>
          <nav className='menu-container'>
            <h1>Menu</h1>
            <ul className="link-container">
              <li className="link" onClick={this.handleOpenCloseMenu}>
                <a href="" className="nav-link">About</a>
              </li>
              <li className="link" onClick={this.handleOpenCloseMenu}>
                <a href="" className="nav-link">Get Started</a>
              </li>
              <li className="link" onClick={this.handleOpenCloseMenu}>
                <a href="" className="nav-link">Sign in</a>
              </li>
            </ul>
          </nav>
        </>
        )}
        <i className="fa-solid fa-bars menu-bars" onClick={this.handleOpenCloseMenu}></i>
      </>
    );
  }
}

export default AppDrawer;
