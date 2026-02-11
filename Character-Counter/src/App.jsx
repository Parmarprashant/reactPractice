import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);


function handleText(e){
   var value = e.target.value;
    setCount(value.length);
   console.log(count)
}

  return (
    <>
  
    
    <textarea onChange={handleText} disabled = {count == 100}>
    </textarea>

    <h3>{count}</h3>




    
    </>
  )
}

export default App