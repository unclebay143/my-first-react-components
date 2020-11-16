import React from 'react';
import karate from './karate.jpeg';
import './style.css'
export default function Greet() {
  return (
    <div className="container">
      <div className="col-5 text-center card card-body d-block m-auto">
        <section>
          <h4>Welcome to Bay Zone</h4>
          <img src={ karate } className="karate-img img-fluid"/>
        </section>
      </div>      
    </div>
  )
}
