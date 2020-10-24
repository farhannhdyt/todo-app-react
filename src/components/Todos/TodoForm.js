import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoForm extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (this.state.title === '') {
      return
    }

    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  onChange = (e) => this.setState({ title: e.target.value })

  render() {
    const { title } = this.state
    return (
      <div className="todo-form-wrapper">
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="title" 
            className="todo-form" 
            placeholder="What needs to be done?" 
            value={title}
            onChange={this.onChange}
          />
          <button className="button-todo-submit">Submit</button>
        </form>
      </div>
    )
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm