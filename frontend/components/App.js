import React from 'react';
import axios from 'axios';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos';

export default class App extends React.Component {
  state = {
    todos: [],
    error: '',
    todoNameInput: ''
  }

  onChange = event => {
    const { value } = event.target;
    this.setState({
      ...this.state,
      todoNameInput: value
    });
  }

  resetForm = () => {
    this.setState({ ...this.state, todoNameInput: ''})
  }

  postNewTodo = () => {
    axios.post(URL, { name: this.state.todoNameInput })
      .then(res => {
        this.setState({ ...this.state, todos: this.state.todos.concat(res.data.data) })
        this.resetForm()
      })
      .catch(err => console.error(err))
  }

  onSubmit = event => {
    event.preventDefault();
    this.postNewTodo();
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(err => {
        this.setState({ ...this.state, error: err.response.data.message })
      });
  }

  handleToggle = id => event => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.fetchAllTodos()
      })
      .catch(err => console.error(err))
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  componentDidMount() {
    this.fetchAllTodos();
  }

  render() {
    return (
      <div>
        <div id='todos'>
          <h2>Todos:</h2>
          {
            this.state.todos.map(todo => {
              return <div onClick={this.handleToggle(todo.id)} key={todo.id}>{todo.name}{todo.completed ? '- complete' : ''}</div>
            })
          }
        </div>
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          todoNameInput={this.state.todoNameInput}
          handleClear={this.handleClear}
        />
      </div>
    )
  }
}
