import React , {useState} from 'react';
import {Massage} from './Massage.js';
import './App.css';

function App() {
  let [count , setCount] = useState (1)
  let [isMorning , setMorning] = useState(true);

  return (
     <div className = "box">

      <h1>day time is = {isMorning ? 'Morning' : 'Night'} </h1>

      <Massage counter={count}/> 

      <br />
      <button  onClick = {() => setCount (count + 1) }>  update counter </button>
      <br />

      <button  onClick = {() => setMorning (!isMorning) }>  update day </button>



    </div>
  );
}

export default App;