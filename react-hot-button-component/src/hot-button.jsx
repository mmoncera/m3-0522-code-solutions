import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  changeHotButtonColor() {
    let color;
    if (this.state.clicks < 3) {
      color = 'light-gray';
    } else if (this.state.clicks < 6) {
      color = 'midnight-blue';
    } else if (this.state.clicks < 9) {
      color = 'slate-blue';
    } else if (this.state.clicks < 12) {
      color = 'indian-red';
    } else if (this.state.clicks < 15) {
      color = 'sandy-brown';
    } else if (this.state.clicks < 18) {
      color = 'yellow';
    } else {
      color = 'white';
    }
    return color;
  }

  render() {
    return (
      <button className={`hot-button ${this.changeHotButtonColor()}`} onClick={this.handleClicks}>Hot Button</button>
    );
  }
}

export default HotButton;
