import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: ''
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(event) {
    const targetView = event.target.dataset.view;
    this.state.currentView === targetView
      ? this.setState({ currentView: '' })
      : this.setState({ currentView: targetView });
  }

  render() {
    const listItems = this.props.list.map(({ id, title, content }) => {
      const contentView = this.state.currentView === String(id) ? 'content' : 'hidden';
      return (
        <li key={id}>
          <div className="title" data-view={id} onClick={this.changeView}>{title}</div>
          <div className={contentView}>{content}</div>
        </li>
      );
    });

    return (
      <ul className="accordion-container">
        {listItems}
      </ul>
    );
  }
}

export default Accordion;
