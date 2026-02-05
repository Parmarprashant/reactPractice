import {useState} from 'react'

function Toggle() {
  const [chnge, setChange] = useState("On")

  function handleToggle(){
    setChange(prev => (prev === "On" ? "Off" : "On"));
  }
  return (
    <>
   
    <button onClick={handleToggle}>{chnge}</button>
    </>
  )
}

export default Toggle