import {useState} from 'react'

function App() {
    const [todo, setTodo] = useState([]);
  const [inputValue, setValue] = useState("");


  function handleInput(e){
       setValue(e.target.value)
  }
  console.log(inputValue);

  function handleAdd(){
    if(inputValue.trim() === "") return;

    setTodo(prev=>[
      ...prev,
      inputValue
    ])
    setValue("")
  }

  function handleDelete(selectedIndex) {
  const arr = todo.filter((data, index) => {
    return index !== selectedIndex;
  });
  setTodo(arr);
}

  console.log(todo)


  return (
    <>
    
    <label htmlFor="addedTodo">Enter todo:- </label>
    <input type="text" id='addedTodo' onChange={handleInput} value={inputValue} />
    <button onClick={handleAdd}>Add</button>

   <ul>
  {todo.map((data, index) => (
    <li key={index}>
    
      {data}
      
      <button style={{paddingLeft:"1rem"}} onClick={() => handleDelete(index)}>Delete</button>
    </li>
  ))}
</ul>
     
    </>
  )
}

export default App