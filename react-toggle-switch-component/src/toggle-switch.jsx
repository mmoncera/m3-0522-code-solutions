import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    let { text, color, position } = {
      color: '',
      position: '',
      text: 'OFF'
    };

    if (this.state.isOn) {
      text = 'ON';
      color = 'green';
      position = 'right';
    }

    return (
      <div className='container'>
        <div className={`switch-container ${color}`}>
          <div className={`switch ${position}`} onClick={this.handleToggle}>
          </div>
        </div>
        <span className='status'>{text}</span>
      </div>
    );
  }
}

export default ToggleSwitch;
