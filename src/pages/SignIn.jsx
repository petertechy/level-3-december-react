import axios from 'axios'
import React, { useState } from 'react'

const SignIn = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const handleSignIn = () =>{
        console.log({email, password})
        let url = "http://localhost:5001/user/signin"
        let credential = {email, password}

        axios.post(url, credential)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
        <h1>Sign In</h1>
        <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignIn