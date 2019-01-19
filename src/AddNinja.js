import React, { Component } from 'react'

export default class AddNinjas extends Component {
  state = {
    name:null,
    age:null,
    belt:null
  }

   handleSubmit = (e)=>{
     e.preventDefault();
     console.log(this.state);
    
   } 

   handleChange = (e)=>{
    
     this.setState({
      [e.target.id] : e.target.value
     })
   }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange = {this.handleChange}/>
            <label htmlFor="age">age</label>
            <input type="text" id="age" onChange = {this.handleChange}/>
            <label htmlFor="belt">Belt</label>
            <input type="text" id="belt" onChange = {this.handleChange}/>

            <button>Add Ninjas</button>

        </form>
      </div>
    )
  }
}
