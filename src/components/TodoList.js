import React from "react";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };
  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  removeAllTodoThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };

  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
            onDelete={() => this.handleDeleteTodo(todo.id)}
          />
        ))}
        <div>
          Active Todos: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        </div>
        <div>
          <button onClick={this.removeAllTodoThatAreComplete}>
            Remove all completed Todos
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              this.setState({
                todos: this.state.todos.map(todo => ({
                  ...todo,
                  complete: this.state.toggleAllComplete
                })),
                toggleAllComplete: !this.state.toggleAllComplete
              })
            }
          >
            Toggle All Complete: {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
