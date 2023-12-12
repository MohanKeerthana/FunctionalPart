import { useState } from "react"



const Controlled =()=>{ 

const [username,setUsername]=useState("");
const[usernameError,setUsernameError]=useState("");
const[password,setPassword]=useState("");

const handleSubmit = (event)=>{
      event.preventDefault()
      const details = {
        username:username,
        password:password
      }
      console.log(details);
      fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(details)
})
.then(res => res.json())
.then((response=>{
    if(response.message){
        alert(response.message)}
        else{
           alert("Login Success")
           localStorage.setItem("userDetails",JSON.stringify(details))
        }
    }));

}
const handlePassword = (event)=>{
    setPassword(event.target.value)
    if(event.target.value.length<5){
        
        setUsernameError("please enter <5 username characters")
    }else{
        setUsernameError("")
    }
}
const Userhandler = (event)=>{
    setUsername(event.target.value)
    if(event.target.value.length<5){
        
        setUsernameError("please enter <5 username characters")
    }else{
        setUsernameError("")
    }
}

    return(
        <>
<h1>controlled</h1>
<form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">username</label>
          <input type="text" value={username} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={Userhandler}/>
          <br/><label htmlFor="exampleInputEmail1" style={{color:"red"}}>{usernameError}</label>
        
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password"  value={password} className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePassword}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </>
    )
}

export default Controlled