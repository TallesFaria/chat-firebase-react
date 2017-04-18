import React, { Component } from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom'
import Cart from './components/cart'


class App extends Component {
  render() {
    return (
      <div className="App">
        This is the React Chat
        <ChatRoom />
        <Cart />
      </div>
    );
  }
}

export default App;
