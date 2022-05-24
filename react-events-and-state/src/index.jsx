import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Click Me!' : 'Thanks!'}
      </button>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
