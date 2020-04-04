import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  //Input name needs to match state name - that's how state being updated during typing
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false }); //Adding new object, taking everything in the state and passing in a new ID
    this.setState({ task: "" });
  }

  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='task'>New Todo</label>
        <input
          type='text'
          placeholder='New Todo'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;


// NewToDoForm - should render a form with one text input for the tast to be created. 
// When this form is submitted a new Todo component should be created
