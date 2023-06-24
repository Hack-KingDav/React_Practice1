import React, { useState } from "react";
import axios from 'axios';
const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // app.use(express.json());
  const collectData = async () => {
    console.log({ name, username, email, password, confirmPassword });
    try{
        // axios
        let result = axios.post('http://127.0.0.1:5000/SignUp', {
        // axios.post('localhost:5000/SignUp', {
          name:name,
          username:username,
          email:email,
          password:password
        })
        console.log(result);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="containerRegistrationInfo">
            <h2>Register Here</h2>
            <form id="ResistrationForm">
                <input className="RegisterationInfo" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Full Name"></input>
                <input className="RegisterationInfo" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"></input>
                <input className="RegisterationInfo" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
                <input className="RegisterationInfo" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
                <input className="RegisterationInfo" type="text" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password"></input>
                <button onClick={collectData} type="button" id="RegistrationSubmitButton">SignUP</button>
            </form>
        </div>
  )
}

export default SignUp;
