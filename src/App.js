import React, { Component } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Form from './components/Form'
import MapDetails from './components/MapDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet'

class App extends Component {
  render() {
    const friends = [
      {
        name:"felix",
        age: 12,
        profession: "computer"  
      },
      {
        name:"stephen",
        age: 22,
        profession: "politician"  
      }
    ]
    return (
      <div className="App">
        <Header owner="Contact Manager" />
        <Greet />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <Form />
              <MapDetails bestFriends = {friends}/>
            </div>
            <div className="col-lg-6 col-sm-12">
              <Contact name="Ayodele Samuel Adebayo" email="unclebigbay@gmail.com" phone="09088776677"/>
              <Contact name="Durojaye Felix Toba" email="felixtoba@gmail.com" phone="07093773783"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App