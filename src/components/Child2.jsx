import React from "react";
function Child2({setSelectedOption}){
 return(
   <div className="parent" style={{backgroundColor:"#FED400",width:"350px",height:"120px"}}>
   <h1>Child Component 2</h1>
     <button onClick={()=>setSelectedOption("Option 2")}>Option 2</button>
   </div>
 )
}

export default Child2;
