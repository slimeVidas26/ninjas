import React, { Component } from 'react';
import './App.css';
import Ninjas from "./Ninjas"
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas:[
      {name:"John",age:35,belt:"black" , id:1},
      {name:"Mario",age:45,belt:"yellow",id:2},
      {name:"Sam",age:25,belt:"red",id:3},
    ]
  }

  addNinja = (ninja)=>{
console.log(ninja);
ninja.id = Math.random();
const ninjas = [...this.state.ninjas , ninja];
this.setState({
  ninjas
})
  }
  render() {
    return (
      <div className="App">
       <Ninjas ninjas = {this.state.ninjas}/>
       <AddNinja addNinja = {this.addNinja} />
      </div>
    );
  }
}

export default App;
