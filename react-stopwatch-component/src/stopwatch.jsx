import React, { Component } from 'react';

export class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTicking: false,
      seconds: 0
    };
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlayPause() {
    if (this.state.isTicking) {
      this.setState({ isTicking: false });
      clearInterval(this.intervalId);
    } else if (!this.state.isTicking) {
      this.setState({ isTicking: true });
      this.intervalId = setInterval(() => this.startTicking(), 1000);
    }
  }

  handleReset(event) {
    if (!this.state.isTicking) {
      this.setState({ seconds: 0 });
    }
  }

  startTicking() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    const playPauseClassName = this.state.isTicking
      ? 'fa-solid fa-pause pause'
      : 'fa-solid fa-play play';
    const clickable = this.state.isTicking ? '' : 'click';
    return (
      <>
        <div className="stopwatch-container" >
          <div className={`seconds-container ${clickable}`} onClick={this.handleReset}>
            <span>{this.state.seconds}</span>
          </div>
          <i className={playPauseClassName} onClick={this.handlePlayPause}></i>
        </div>
      </>
    );
  }
}

export default Stopwatch;
