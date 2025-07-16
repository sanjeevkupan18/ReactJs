import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter =15;

  const addVal=() =>{
    counter=counter+1;
    setCounter(counter);
  }

  const decVal = () =>{
    if(counter>0){
      counter = counter - 1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter} </h2>
      <button onClick={addVal}>Add Value</button>
      <br />
      <button onClick={decVal}>Decrease Value</button>
    </>
  )
}

export default App
