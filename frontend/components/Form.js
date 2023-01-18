import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form id='todoForm' onSubmit={this.props.onSubmit}>
          <input 
            onChange={this.props.onChange} 
            value={this.props.todoNameInput} 
            type='text' 
            placeholder='Type todo'>
            </input>
          <input type='submit'></input>
          <button onClick={this.props.handleClear}>Clear Completed</button>
        </form>
      </div>
    )
  }
}
