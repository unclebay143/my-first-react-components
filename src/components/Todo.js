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
      <div className="container mt-3">
        <h3>Todo</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit} className="form-group">
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input type="text"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            className="form-control"
          />
          <button className="btn btn-success form-control mt-2">
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }
  
  handleChange(e){
    this.setState({ text: e.target.value })
  }
  
  handleSubmit(e){
    e.preventDefault();
    if (this.state.text.length === 0){
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }
}

class TodoList extends Component{
  render(){
    return (
      <ul>
        {this.props.items.map(item=>(
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}


export default Todo;