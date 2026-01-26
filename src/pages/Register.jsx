import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate()
    const handleRegister = ()=>{
        console.log("User Registered")
        navigate("/about")
    }
  return (
    <div className='mx-auto col-7 p-4 my-3 rounded-3 shadow-3 text-center'>
        <h1>Register User</h1>
        <button onClick={handleRegister}>Sign Up</button>
    </div>
  )
}

export default Register