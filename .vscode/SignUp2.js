// import React, {useState} from "react";
// import axios from 'axios';

// // import event from "events";
// const SignUp = () =>{
//     const [name,setName] = useState("");
//     const [username,setUsername] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [confirmPassword,setConfirmPassword] = useState("");
    

//     console.log({ name, username, email, password, confirmPassword });
//     app.post("/async/post/", async (req, res) => {
//         try {
//             const response = await axios.post("posts", {
//                 title: "Foo",
//                 body: "bar",
//                 userID: 1
//             });
//             res.status(200).json(response);
//         } catch (err) {
//             res.status(500).json({ message: err });
//         }
//     });

//     return(
//         <div className="containerRegistrationInfo">
//             <h2>Register Here</h2>
//             <form id="ResistrationForm">
//                 <input className="RegisterationInfo" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Full Name"></input>
//                 <input className="RegisterationInfo" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"></input>
//                 <input className="RegisterationInfo" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
//                 <input className="RegisterationInfo" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
//                 <input className="RegisterationInfo" type="text" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password"></input>
//                 <button onClick={collectData} type="Submit" id="RegistrationSubmitButton">SignUP</button>
//             </form>
//         </div>
//     )
// }

// export default SignUp;
// import React, {useState} from "react";
// import axios from 'axios';
// const SignUp = () =>{
//     const [name,setName] = useState("");
//     const [username,setUsername] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [confirmPassword,setConfirmPassword] = useState("");
        

//     const collectData= async() =>
//     {
//         console.log({name, username, email, password, confirmPassword});
//         const response = await axios({
// 			name: name,
// 			username: username,
//             email: email,
//             password: password
//         });
//         // let result = await result.json();
//         console.log(response);
//     }

//     return(
        // <div className="containerRegistrationInfo">
        //     <h2>Register Here</h2>
        //     <form id="ResistrationForm">
        //         <input className="RegisterationInfo" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Full Name"></input>
        //         <input className="RegisterationInfo" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"></input>
        //         <input className="RegisterationInfo" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
        //         <input className="RegisterationInfo" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
        //         <input className="RegisterationInfo" type="text" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password"></input>
        //         <button onClick={collectData} type="Submit" id="RegistrationSubmitButton">SignUP</button>
        //     </form>
        // </div>
//     )
// }

// export default SignUp;

import React, { useState } from "react";
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const collectData = async () => {
    console.log({ name, username, email, password, confirmPassword });
    try {
        // axios
        axios.post('localhost:5000/SignUp', {
          name:name,
          username:username,
          email:email,
          password:password
        })
        // axios.then((response) => {
        //   setPost(response.data);
    //   });

    //   console.log(response.data);
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
                <button onClick={collectData} type="Submit" id="RegistrationSubmitButton">SignUP</button>
            </form>
        </div>
  )
}

export default SignUp;
