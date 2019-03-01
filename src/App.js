import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
