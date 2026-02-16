import { useEffect, useState } from 'react';

function Api() {
  const [detail, setDetails] = useState([]);
  const URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setDetails(data); 
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Users</h2>
      <ul>
        {detail.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Api;