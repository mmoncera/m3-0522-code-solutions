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
    const color = this.state.isOn ? 'green' : '';
    const position = this.state.isOn ? 'right' : '';
    const text = this.state.isOn ? 'ON' : 'OFF';
    return (
      <div className='container'>
        <div className={`switch-container ${color}`}>
          <div className={`switch ${position}`} onClick={this.handleToggle}>
          </div>
        </div>
        <span>{text}</span>
      </div>
    );
  }
}

export default ToggleSwitch;
