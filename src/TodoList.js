import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  //Functions
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id) //Filter all the todos that are not that ID (keep everything but this ID)
    });
  }

  update(id, updatedTask) {
    //Need to make new array that contains all the old todos unchanged
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  //Render Component
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <CSSTransition key={todo.id} timeout={500} classNames='todo'>
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
          />
        </CSSTransition>
      );
    });
    return (
      <div className='TodoList'>
        <h1>
          Todo App<span>A Todo App Created With React</span>
        </h1>
        <NewTodoForm createTodo={this.create} />

        <ul>
          <TransitionGroup className='todo-list'>{todos}</TransitionGroup>
        </ul>
      </div>
    );
  }
}

export default TodoList;


// ToDoList - should render the NewToDo Form component and should render the list of ToDo components. Place your state that contains all of the todos in this component