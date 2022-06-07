import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleCircle = this.handleCircle.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.changePokemon('next');
    }, 3000);
  }

  handlePrevious(event) {
    this.changePokemon('previous');
    this.stopStartInterval();
  }

  handleNext(event) {
    this.changePokemon('next');
    this.stopStartInterval();
  }

  handleCircle(event) {
    this.changePokemon('circle', event);
    this.stopStartInterval();
  }

  changePokemon(view, event) {
    const { currentIndex } = this.state;
    const { list } = this.props;
    if (view === 'next') {
      currentIndex < list.length - 1
        ? this.setState({ currentIndex: currentIndex + 1 })
        : this.setState({ currentIndex: 0 });
    }
    if (view === 'previous') {
      currentIndex > 0
        ? this.setState({ currentIndex: currentIndex - 1 })
        : this.setState({ currentIndex: list.length - 1 });
    }
    if (view === 'circle') {
      const targetCircle = event.target.dataset.circle;
      this.setState({ currentIndex: +targetCircle });
    }
  }

  stopStartInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.handleNext(), 3000);
  }

  render() {
    const { name, url } = this.props.list[this.state.currentIndex];
    const circles = this.props.list.map(({ name }, index) => {
      const currentCircle = this.state.currentIndex === index ? 'fas fa-circle circle' : 'far fa-circle circle';
      return (
        <i key={name} className={currentCircle} data-circle={index} onClick={this.handleCircle}></i>
      );
    });

    return (
      <div className="carousel-container">
        <div className="row">
          <i className="fas fa-angle-left previous" onClick={this.handlePrevious}></i>
          <img className="pokemon" src={url} alt={name}></img>
          <i className="fas fa-angle-right next" onClick={this.handleNext}></i>
        </div>
        <div className="row">
          <div className="circle-container">
            {circles}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
