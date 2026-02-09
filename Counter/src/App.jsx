import {useState} from 'react'

function App() {
 
  const [count, setCount] = useState(0)

  function countInc(){
    setCount(count +1);
  }

  function countDec(){
    setCount(count -1);
  }
  function handleReset(){
    setCount(0)
  }

  return (
   <>
   <h1>Counter:- {count}</h1>
   <button onClick={countInc}>Increase</button>
   <button onClick={countDec} disabled = {count ==0}>decrease</button>
   <button onClick={handleReset}>reset</button>
   </>
  )
}

export default App