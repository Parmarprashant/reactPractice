import { useEffect, useState } from 'react';

function App() {
  const [detail, setDetail] = useState({
    Name: "",
    Email: "",
    Phone: ""
  });

  function handleChange(e) {
    const { name, value } = e.target; 
    setDetail(prev => ({
      ...prev,
      [name]: value 
    }));
  }
 
  
useEffect(() => {
  localStorage.setItem("formData", detail);
}, []);

  return (
    <>
      <div>
        <label htmlFor="name">Name:- </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name..."
          name="Name"
          value={detail.Name}
          onChange={handleChange}
          
        />
        <br /><br />

        <label htmlFor="email">Email:- </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email..."
          name="Email"
          value={detail.Email}
          onChange={handleChange}
        />
        <br /><br />

        <label htmlFor="num">Phone number:- </label>
        <input
          type="text"
          id="num"
          placeholder="Enter your number..."
          name="Phone"
          value={detail.Phone}
          onChange={handleChange}
        />
        <br /><br />

        <button onClick={() => {
          console.log(detail);
        }}>Sign Up</button>
      </div>
    </>
  );
}

export default App;