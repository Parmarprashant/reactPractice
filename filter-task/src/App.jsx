import { useState } from "react";

const initialItems = ["Oranges", "Apple", "Mango", "Grapes", "Guava", "Papaya"];

const App = () => {
  const [items, setItems] = useState(initialItems);

  function handleAsen() {
    const sorted = [...items].sort();   
    setItems(sorted);
  }

  function handleDes() {
    const sorted = [...items].sort().reverse();
    setItems(sorted);
  }

  return (
    <div>
      <h1>Items</h1>

      <button onClick={handleAsen}>Ascending</button>
      <br /><br />

      <button onClick={handleDes}>Descending</button>

      <ul>
        {items.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
