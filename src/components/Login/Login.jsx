import React  from "react";
import "./login.css";
import { useState } from "react";

  
const Login = (props) => {
  const [email, setEmail] = useState('');

  const  [pass,setPass] = useState('');


  // handling the state of email and passwords
  const handleSubmit = (e) => {
    e.preventDefalut();
    console.log(email);
    console.log(pass);
  }
  return (
    <>
      <section className="login-section">
      <aside className="side-image">Side image</aside>
      <form  className = "login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label> 
        <input type="email" id="email" placeholder="Enter your email"name="email" value={email} onChange = {(e) => setEmail(e.target.value)} />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" placeholder="Enter Your Password" name="password" value ={pass} onChange = {(e) => setPass(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('signup')}>Don't have an account ? Register Here</button>
      </section>
      
    </>
  );
};
export default Login;