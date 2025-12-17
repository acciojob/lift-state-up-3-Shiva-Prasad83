import React from "react";
function Child1({setSelectedOption}){

  return (
    <div style={{backgroundColor:"#C6671A",width:"350px",height:"120px"}}>
    <h1>Child Component 1</h1>

      <button onClick={()=>setSelectedOption("Option 1")}>Option 1</button>
    </div>
  )
}

export default Child1;
