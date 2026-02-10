import {useState} from 'react'

function App() {

const [name, setName] = useState("");

function handleInput(e){
  setName(e.target.value);
}
  
  function handleSubmit(e){
    
      e.preventDefault();
      console.log("clicked me");
  }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="enterName">Enter Name:- </label>
      <input type="text" id='enterName' value={name} onChange={handleInput}/>
      <button type='submit'>Submit</button>
      <p>{name}</p>
    </form>
    
    </>
  )
}

export default App