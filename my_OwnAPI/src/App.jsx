import { useEffect } from "react";

const URL = 'https://node-server-bzyc.onrender.com/users';

function App() {
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
      
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Check</h1>
    </div>
  );
}

export default App;