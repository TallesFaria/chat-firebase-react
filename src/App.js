import React, { Component } from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom'
class App extends Component {
  render() {
    return (
      <div className="App">
        This is the React Chat
        <ChatRoom />
      </div>
    );
  }
}

export default App;
