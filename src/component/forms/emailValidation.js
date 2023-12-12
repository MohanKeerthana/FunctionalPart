import { useState } from "react";



const EmailValidate = ()=>{
    const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidpassword, setIsValidpassword] = useState(true);
  const[password,setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
  }

  const handleValidateEmail = () => {
    const isValid = validateEmail(email);
    setIsValidEmail(!!isValid); 
  };
  const handleValidatepassword = () => {
    const isValid = validatepassword(password);
    setIsValidpassword(!!isValid); 
  };

  const validatepassword = (password) => {
    return String(password)
      .toLowerCase()
      .match(
        /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
      );
  };


    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    return(
        <>
        <h1>EmailValidate</h1>
        <input type="text" value={email} onChange={handleEmailChange} />
      <button onClick={handleValidateEmail}>Validate Email</button>
      {isValidEmail ? <p>Email is valid!</p> : <p>Email is not valid.</p>}
    <h1>Password Validate</h1>
      <input type="text" value={password} onChange={handlePasswordChange} />
      <button onClick={handleValidatepassword}>Validate Email</button>
      {isValidpassword ? <p>password is valid!</p> : <p>password is not valid.</p>}



        </>
    )
}
export default EmailValidate