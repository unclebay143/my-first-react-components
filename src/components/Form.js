import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>
      <h4>Form Component</h4>
        <form className="form-group">
          <input type="text" className="form-control mb-3" placeholder="Name"/>
          <input type="text" className="form-control mb-3" placeholder="Email"/>
          <input type="text" className="form-control mb-3" placeholder="Phone number"/>
          <input type="submit" className="form-control mb-3 bg-primary text-white" value="Submit"/>
        </form>
      </div>
    )
  };
};


export default Form;
