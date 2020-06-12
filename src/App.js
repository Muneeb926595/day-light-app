import React,{useState} from 'react';
import './App.css';

function App() {
  let [count,setCount]=useState(29)
  let [isDay,setDay]=useState(true)
  return (
    <div className={`box ${isDay?'dayLight':''}`}>
      <div className="content">
      <h1>Welcome To My New Page</h1>
      <button onClick={()=> setDay(!isDay)}>Day/Light</button>
      <br/ >
  <h1>Hi There Your Current Room Temprature is : {count}</h1>

  <span><h2 className="myText">Set Temprature</h2></span>
      <button onClick={()=> setCount(--count)}>-</button>
      <button onClick={()=> setCount(++count)}>+</button>
      </div>
    </div>
  );
}

export default App;
