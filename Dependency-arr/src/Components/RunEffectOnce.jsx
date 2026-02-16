import {useEffect} from 'react'

function RunEffectOnce() {
    useEffect(()=>{
        console.log("component Mounted");
        alert("component Mounted");
    }, [])
  return (
   <>

   </>
  )
}

export default RunEffectOnce