import React, { Component } from 'react'
import TodoItem from './TodoItem'
import '../../assets/css/global.css'
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    const { todos } = this.props

    return (
      <div className="todo-container">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
        ))}
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default Todos
