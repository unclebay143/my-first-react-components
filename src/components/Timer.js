import React, { Component } from 'react'
export default class Timer extends Component {
  constructor(props){
    super(props)
      this.state = {seconds: 0};
  }

  tick(){
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillMount(){
    clearInterval(this.interval);
  }
  render() {

    return (
      <div className="container mt-4">
        <div className="card card-body">
        second: {this.state.seconds}
        </div>
      </div>
    )
  }
}
