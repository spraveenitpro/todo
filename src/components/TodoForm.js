import React from "react";
import shortid from "shortid";

class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.text);
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <form>
        <input
          name="text"
          value={this.state.text}
          placeholder="todo..."
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
