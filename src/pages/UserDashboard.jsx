import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    useEffect(() => {
        getDashboard()
    }, [])
    let navigate = useNavigate()

    const getDashboard = () =>{
        let url = "http://localhost:5001/user/getdashboard"
        let token = localStorage.token
        axios.get(url,{
            headers: {
                "Authorization":  `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then((response)=>{
            if(!response.data.status){
                navigate("/signin")
            }else{ 
                console.log(response)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <div>
        <h1>I am the dashboard</h1>
    </div>
  )
}

export default UserDashboard