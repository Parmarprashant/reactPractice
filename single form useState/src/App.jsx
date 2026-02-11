import {useState} from 'react'

function App() {

   const [details, setDetails] = useState({
       name: "",
       email: ""
   })

   function handleInput(e){
     const {name, value} = e.target;
     setDetails(prev =>({
      ...prev,
      [name]: value
     }))
   }



  function handleSubmit(e){
       e.preventDefault();
       console.log(details);
       
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">EnterName:- </label>
      <input type="text" id='username' name='name'  value={details.name} onChange={handleInput} />
      <br />
      <br />
      <label htmlFor="useremail">Email:- </label>
      <input type="text" id='useremail' name='email' value={details.email} onChange={handleInput}/>
      <br />
      <br />
      <button type="submit">Submit</button>

    </form>
    </>
  )
}

export default App