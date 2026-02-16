import {useState} from 'react'
import Compo from './Components/Fullform'
function App() {

  const [details, setDetails] = useState({
    namedd: "",
    emaill: "",
    phonee: ""
  })

  function handleMain(e){
        e.preventDefault();
        console.log(details);
        
  }


function handleSubmit(e){
    const { name, value } = e.target;
     setDetails(prev =>({
      ...prev,
      [name]: value
      
     }))
}

  return (
    <>
    {/* <div className="main">
    <form onSubmit={handleMain}>
       
       <label htmlFor="named">Name:- </label>
       <input type="text" id='named' name='namedd' onChange={handleSubmit}  value={details.namedd}/>
       <br />
       <br />
       <label htmlFor="email">Email:- </label>
       <input type="text" id='email' name='emaill' onChange={handleSubmit} value={details.emaill}/>

       <br />
       <br />

       <label htmlFor="Phone">Phone number:- </label>
       <input type="text" id='Phone' name='phonee' onChange={handleSubmit} value={details.phonee}/>
       <br />
       <br />
       <button type="submit">Submit</button>
    </form>

    </div> */}


    <Compo></Compo>
    
    </>
  )
}

export default App