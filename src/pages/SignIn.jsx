import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    let navigate = useNavigate()
    const handleSignIn = () =>{
        console.log({email, password})
        let url = "https://level-3-node-class.onrender.com/user/signin"
        let credential = {email, password}

        axios.post(url, credential)
        .then((response)=>{
            console.log(response)
            if(response.data.status){
                localStorage.token = response.data.token
                navigate("/user-dashboard")
            }else{
                console.log("Invalid Credential")
                setmessage(response.data.message)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='mx-auto col-7 rounded shadow p-3 my-4'>
        <h1 className='text-center text-success fs-4'>Sign In</h1>
        <p className='text-danger'>{message}</p>
        <input className='form-control mb-3' type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input className='form-control mb-3' type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
        <button className='btn btn-success w-100' onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignIn