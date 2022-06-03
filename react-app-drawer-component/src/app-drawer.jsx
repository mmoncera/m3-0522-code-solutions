import React, { Component } from 'react';

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
  }

  handleOpenMenu(event) {
    this.setState({ isOpen: true });
  }

  handleCloseMenu(event) {
    if (event.target.className === 'nav-link' || event.target.className === 'overlay') {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <>
        {this.state.isOpen && (
        <>
          <div className="overlay" onClick={this.handleCloseMenu}></div>
          <nav className='menu-container'>
            <h1>Menu</h1>
            <ul className="link-container" onClick={this.handleCloseMenu}>
              <li className="link"><a className="nav-link">About</a></li>
              <li className="link"><a className="nav-link">Get Started</a></li>
              <li className="link"><a className="nav-link">Sign in</a></li>
            </ul>
          </nav>
        </>
        )}
        <i className="fa-solid fa-bars menu-bars" onClick={this.handleOpenMenu}></i>
      </>
    );
  }
}

export default AppDrawer;
