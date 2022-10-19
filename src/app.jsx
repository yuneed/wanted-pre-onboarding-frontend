import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Todos from './components/todos';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'eat', count: 0},
      { id: 2, name: 'cook', count: 0},
      { id: 3, name: 'drink', count: 0},
      { id: 4, name: 'sleep', count: 0},
    ]
  }

  render(){
    return (
      <>
        <Navbar/>
        <Todos todos={this.state.todos}/>
      </>
    )
  }
}

export default App;
