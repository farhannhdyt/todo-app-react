import React, { Component } from 'react'
import '../../assets/css/global.css'
import { CheckSVG, TrashSVG } from '../../assets'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo
    return (
      <div className="todo-item">
        <div className="column todos">
          <p className={completed ? 'is-complete' : null}>
            { title }
          </p>
        </div>
        <div className="column action-button">
          <span className="action action-done" onClick={this.props.markComplete.bind(this, id)}>
            <img src={CheckSVG} alt="checkSVG" />
          </span>
          <span className="action action-remove" onClick={this.props.deleteTodo.bind(this, id)}>
            <img src={TrashSVG} alt="trashSVG" />
          </span>
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
