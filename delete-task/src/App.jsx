import {useState} from 'react'

function App() {
const [todo, setTodo] = useState([]);
const [inputValue, setValue] = useState("");

function handleInput(e){
  setValue(e.target.value);
}

function handleAdd(){

  if(inputValue.trim() === "") return;
  setTodo(prev =>([...prev, inputValue]));
  setValue("");
}

function handleDelete(indexToDelete) {
   const updated = todo.filter((data, index) => 
       index !== indexToDelete
   );

   setTodo(updated);
}

  return (
    <>
    
    <label htmlFor="todos">Enter todo:- </label>
    <input type="text" id='todos' value={inputValue} onChange={handleInput}/>
    <button onClick={handleAdd}>add</button>
    
    <ul>
     {
  todo.map((data, index) => {
    return (
      <li key={index}>
        {data}
        <button onClick={() => handleDelete(index)}>
          Delete
        </button>
      </li>
    );
  })
}

    </ul>
    </>
  )
}

export default App