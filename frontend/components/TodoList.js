import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
        <div>
          <h2>Todos:</h2>
          {
            this.props.todos.map(todo => {
              return (
                <Todo 
                  key={todo.id}
                  handleToggle={this.props.handleToggle}
                  todo={todo}
                />
              )
            })
          }
        </div>
    )
  }
}
