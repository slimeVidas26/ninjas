import React from 'react'

 const Ninjas = ({ninjas})=> {
  console.log({ninjas});
  const ninjasList = ninjas.map((ninja)=>{
    return(
      <div key = {ninja.id}>
     
        <div>Name : {ninja.name}</div>
        <div>Age : {ninja.age}</div>
        <div>Belt : {ninja.belt}</div>
        <br/>
      </div>
      
    )
  })
    return (
      <div>
      <div className="title"><h1>Ninjas</h1></div>
        {ninjasList}
      </div>
    )
  
}

export default Ninjas;
