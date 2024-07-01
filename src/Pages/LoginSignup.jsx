import React, { useState } from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (ev)=>{
    setFormData({...formData, [ev.target.name] : ev.target.value});
  }

  const login = async()=>{
    console.log("Login function executed", formData);

    let responseData;
    await fetch('https://trend-mart-backend.vercel.app/login', {
      method: 'POST',
      headers: {
        Accept : 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res)=> res.json()).then((data)=>responseData = data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async()=>{
    console.log("Signup function executed", formData)

    let responseData;
    await fetch('https://trendmart-backend.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept : 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res)=> res.json()).then((data)=>responseData = data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=> {state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign up"
        ?<p className="loginsignup-login">Already have an account? <span onClick={()=> {setState("Login")}}>Login here</span></p> 
        :<p className="loginsignup-login">Create an account? <span onClick={()=> {setState("Sign up")}}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup