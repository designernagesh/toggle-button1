import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      text: 'Click on the Button'
    };
  }

  toggleText = () => {
    this.setState({
      clicked: !this.state.clicked      
    })
  }
  render() {
    const text = this.state.clicked ? 'You have Clicked' : 'No you haven\'t clicked'

    return (
      <div>
      <h1>{this.props.title}</h1>
        <button onClick={this.toggleText}>{text}</button>
      </div>
    );
  }
}

render(<App title='Click the Button to Toggle the Text' />, document.getElementById('root'));
