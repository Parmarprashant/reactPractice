import {useState} from 'react'

function App() {
   const [todo, setTodo] = useState([]);
const [inputValue, setValue] = useState("");

function handleInput(e) {
  setValue(e.target.value);
}

function handleLi() {
  if (inputValue.trim() === "") return;

  setTodo([...todo, inputValue]);
  setValue("");
}

   

  return (
   <>
  <label htmlFor="todo">Enter Todo:- </label>
  <input type="text" id='todo' onChange={handleInput} value={inputValue}  />
  <button onClick={handleLi}>Add</button>



  <ul>
    {
      
        todo.map((data)=>{
          return <li>{data}</li>
        })
      
    }
  </ul>
   </>
  )
}

export default App