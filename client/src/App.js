import React from 'react';
import io from 'socket.io-client';
//import { Button } from 'react-bootstrap';
const socket = io(process.env.REACT_SERVER_URL);

import './App.css';

class App extends React.Component {
  state = {
    subtitle: { text: 'Hello' }
  };

  componentDidMount() {
    socket.on('nextSubtitle', nextSubtitle => {
      this.setState({ subtitle: nextSubtitle });
    });
  }

  handleClick = e => {
    e.preventDefault();
    socket.emit('sendNextSubtitle');
  };

  render() {
    return (
      <div className="container">
        <a href="#" onClick={this.handleClick}>
          <div style={{width: '20px', height: '20px', color: 'black'}}></div>
        </a>
        <h1>{this.state.subtitle.text}</h1>
      </div>
    );
  }
}

export default App;
