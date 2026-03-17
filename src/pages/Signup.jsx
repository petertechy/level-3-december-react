import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [age, setage] = useState("")
    const [password, setpassword] = useState("")
    let navigate = useNavigate()
    const registerUser = () =>{
        const url = "http://localhost:5001/user/register"
        const userObject = {firstname, lastname, email, age, password}
        console.log(userObject)

        axios.post(url, userObject)
        .then((response)=>{
            console.log(response)
            if(response.data.status){
                navigate("/signin")
            }else{
                console.log("Wrong Details")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
        <input type="text" placeholder='First Name' onChange={(e)=>setfirstname(e.target.value)} />
        <input type="text" placeholder='Last Name' onChange={(e)=>setlastname(e.target.value)}  />
        <input type="text" placeholder='Email' onChange={(e)=>setemail(e.target.value)} />
        <input type="number" placeholder='age' onChange={(e)=>setage(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={registerUser}>Sign Up</button>
    </div>
  )
}

export default Signup