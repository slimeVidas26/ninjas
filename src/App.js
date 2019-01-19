import React, { Component } from 'react';
import './App.css';
import Ninjas from "./Ninjas"
import AddNinja from './AddNinja';

class App extends Component {
  states = {
    ninjas:[
      {name:"John",age:35,belt:"black" , id:1},
      {name:"Mario",age:45,belt:"yellow",id:2},
      {name:"Sam",age:25,belt:"red",id:3},
    ]
  }

  
  render() {
    return (
      <div className="App">
       <Ninjas ninjas = {this.states.ninjas}/>
       <AddNinja addNinja = {this.addNinja} />
      </div>
    );
  }
}

export default App;
