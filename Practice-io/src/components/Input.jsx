import { useState } from 'react';

function Input() {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cleaned = value.trim();
    if (cleaned) {
      setArr(prevArr => [...prevArr, cleaned]);
      setValue("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value} 
          onChange={handleChange} 
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {arr.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Input;