import {useEffect, useState} from 'react'

function WhenState() {

const [counter, setCounter] = useState(0);
function handleCounter(){
    setCounter(prev => prev+1);
}

useEffect(()=>{
    console.log("Effect rendered");
})

  return (
    <>
    
    <h1>Counter: {counter}</h1>
    <button onClick={handleCounter}>Increase</button>
    </>
  )
}

export default WhenState