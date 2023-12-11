import axios from "axios";
import { useState } from "react"



const UseState2 = ()=>{

    const [data,setData] = useState([]);
    const [timer,setTimer] = useState(0)

    const handleTimer = ()=>{
      setInterval(()=>{
        setTimer((prevtime)=>prevtime+1)
      },1000)
    }
    
  const handleClick = () =>{
    axios.get("https://fakestoreapi.com/products").then((response)=> setData(response.data)).catch(err=> alert(err.message))


  }

    return(
        <>
        <h2>{timer }</h2>
        <button style={{color: timer>100 ? "red" : "blue"}} onClick={handleTimer}>Start time</button>
        <h2>Counter</h2>
        <button onClick={handleClick}>products</button>
        {
            data.length>0 ?
            data.map((element)=>{
                return(
                    <>
                    <h1>{element.title}</h1>
                    </>
                )
            })
            :
            null
        }
        </>
    )
}
export default UseState2