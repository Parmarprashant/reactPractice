
import {useState} from 'react'

function App() {


const [items, setItems] = useState([
  {name: "apple", quantity: 0},
  {name: "Banana", quantity: 0},
  {name: "Mango", quantity: 0}
])

const totalQuantity = items.reduce((total, item) => {
  return total + item.quantity;
}, 0);



  return (
    <>
    
   <button
  onClick={() => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.name === "apple"
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }}
>
  Add Apples
</button>

    <br />
    <br />
    <button  onClick={() => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.name === "Banana"
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }}>Add Banana</button>
    <br />
    <br />
    <button
    
    onClick={() => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.name === "Mango"
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }}  >Add Mango</button>

    <br /><br />

    <p>apple:- {items.map((data)=>{
      if(data.name == "apple")
      return data.quantity
    })}</p>


      <p>Banana:- {items.map((data)=>{
      if(data.name == "Banana")
      return data.quantity
    })}</p>


<p>mango:- {items.map((data)=>{
      if(data.name == "Mango")
      return data.quantity
    })}</p>


    {/* <h4>total Quantity:- {items.map((data)=>{
      if(data.name == "Banana" || data.name == "apple" || data.name == "Mango")
      return data.quantity
    })} </h4> */}



    <h4>Total Quantity:- {totalQuantity} </h4>
    
    </>
  )
}

export default App