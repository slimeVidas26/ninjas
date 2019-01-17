import React from 'react'

 const Ninjas = (props)=> {
  console.log(props);
  const ninjasList = props.ninjas.map((ninja)=>{
    return(
      <div>
        <div>Name : {ninja.name}</div>
        <div>Age : {ninja.age}</div>
        <div>Belt : {ninja.belt}</div>
        <br/>
      </div>
      
    )
  })
    return (
      <div>
        {ninjasList}
      </div>
    )
  
}

export default Ninjas;
