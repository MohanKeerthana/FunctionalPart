import { createRef } from "react"






const Uncontrolled = () =>{
    const emailRef = createRef();
    const passwordRef = createRef();

const handleSubmit = (event)=>{
        alert("submitted")
        event.preventDefault();
        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);
    
    const Userdetails ={
        username:emailRef.current.value,
        password:passwordRef.current.value
    }
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Userdetails)
})
.then(res => res.json())
.then((response=>{
    if(response.message){
        alert(response.message)}
        else{
           alert("Login Success")
           localStorage.setItem("userDetails",JSON.stringify(Userdetails))
        }
    }));

}
    return(
        <>
        <h1>Uncontrolled Forms</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"  ref={emailRef}/>
          <br/><small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordRef}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </>
    )
}
export default Uncontrolled