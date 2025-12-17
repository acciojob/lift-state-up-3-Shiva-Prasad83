import {useState} from 'react';
import React from 'react';
import Child1 from './Child1.jsx';
import Child2 from './Child2.jsx';
function Parent(){
const [selectedOption,setSelectedOption]=useState("")
  return (
    <div style={{backgroundColor:"#73FF00",width:"500px",height:"450px"}}>
      <h1>Parent Component</h1>
     <Child1 setSelectedOption={setSelectedOption}/>
    <Child2 setSelectedOption={setSelectedOption}/>

      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default Parent;      
