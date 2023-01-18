import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
        <div>
          <h2>Todos:</h2>
          {
            this.props.todos.map(todo => {
              return <div onClick={this.props.handleToggle(todo.id)} key={todo.id}>{todo.name}{todo.completed ? '- complete' : ''}</div>
            })
          }
        </div>
    )
  }
}
