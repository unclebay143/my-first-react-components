import React, { Component } from 'react'

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = { items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <h3>Todo</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}



export default Todo;