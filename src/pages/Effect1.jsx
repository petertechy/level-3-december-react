import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Effect1 = () => {
    const [number, setnumber] = useState(0)
    const [myName, setmyName] = useState("Ayo")
    const changeName = () =>{
        setmyName("Caroline")
    }
    const increaseNumber = () =>{
        setnumber(number+1)
    }
    const displayUsers = () =>{
        let url  = "https://jsonplaceholder.typicode.com/users"
        axios.get(url)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(() => {
      console.log("Onload it runs")

      return () => {
        console.log("Unmounted from component")
      }
    }, [number, myName])
    
    
  return (
    <div>
        <h1>Effect in React</h1>
        <h1>This is {myName}</h1>
        <button onClick={changeName}>Change Name</button>
        <h1>Number is: {number}</h1>
        <button onClick={increaseNumber}>Increase Number</button>
        <button onClick={displayUsers}>Display Users</button>
    </div>
  )
}

export default Effect1