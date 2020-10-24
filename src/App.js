import React from 'react'
import './assets/css/global.css' 
import { Todos, Footer } from './components'
import TodoForm from './components/Todos/TodoForm'
import axios from 'axios'

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ todos: res.data }))
  }

  // Mark completed
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    })})
  }

  // Delete todo
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    // Destructuring the state
    const { todos } = this.state

    return (
      <div className="app">
        <TodoForm addTodo={this.addTodo}/>
        <Todos todos={todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        <Footer />
      </div>
    )
  }

}

export default App
