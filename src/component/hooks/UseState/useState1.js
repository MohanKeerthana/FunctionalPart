import { useState } from "react"




const UseState = ()=>{
  const[count,setCount]= useState(0)
  
  const handleIncre = () =>{
    setCount(state=>state+1)
  }

  const handleDecre = ()=>{
    setCount(state=> state-1)
  }

  const reset = ()=>{
    setCount(state=> state=0)
  }

    return(
<> 
<h1>Use state {count}</h1>
<button onClick={handleIncre}>Increment</button>
<button onClick={handleDecre}>Decrement</button>
<button onClick={ reset}>Reset</button>
</>

    )
}

export default UseState