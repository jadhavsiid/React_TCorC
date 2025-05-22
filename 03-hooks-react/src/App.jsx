import { useState } from 'react'
import './App.css'

function App() {

  useState({})




  let counter = 5
  const addValue =() =>{
    console.log("clicked", counter);
    counter = counter++;
    
  }
  

  return (
    <>
    <h1> React Hooks </h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br/>
    <button>Remove value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
