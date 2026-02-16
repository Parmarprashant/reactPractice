import { useState } from 'react'

function Fullform() {

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
  }

  function handleInput(e) {
    const { name, value } = e.target;

    setDetails(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>First Name: </label>
        <input 
          type="text" 
          name="firstname"
          value={details.firstname}
          onChange={handleInput}
        />
        <br /><br />

        <label>Last Name: </label>
        <input 
          type="text" 
          name="lastname"
          value={details.lastname}
          onChange={handleInput}
        />
        <br /><br />

        <label>Username: </label>
        <input 
          type="text" 
          name="username"
          value={details.username}
          onChange={handleInput}
        />
        <br /><br />

        <label>Email: </label>
        <input 
          type="email" 
          name="email"
          value={details.email}
          onChange={handleInput}
        />
        <br /><br />

        <label>Password: </label>
        <input 
          type="password" 
          name="password"
          value={details.password}
          onChange={handleInput}
        />
        <br /><br />

        <label>Confirm Password: </label>
        <input 
          type="password" 
          name="confirmPassword"
          value={details.confirmPassword}
          onChange={handleInput}
        />
        <br /><br />

        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default Fullform;
