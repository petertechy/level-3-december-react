import React, { useEffect, useState } from 'react'

const Chat = ({socket}) => {
    const [message, setmessage] = useState("")
    const [allMessage, setallMessage] = useState([])

    useEffect(() => {
      if(socket.current){
        socket.current.on("broadcastMsg", (receiveMsg)=>{
            setallMessage([...allMessage, receiveMsg])
            console.log(receiveMsg)
        })
      }
    }, [])
    

    const sendMessage = () =>{
        console.log(message)
        socket.current.emit("sendMsg", message)
        
    }
  return (
    <div>
        {
            allMessage.map((msg, index)=>(
                <div key={index}>
                    {msg}
                </div>
            ))
        }
        <h1>Chat App</h1>
        <input onChange={(e)=>setmessage(e.target.value)} type="text" />
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Chat