import React from 'react'
import { useParams } from 'react-router-dom'
import { user } from '../utils/user'

const User = () => {
  const {id} =  useParams()

  const users = user.find(u => u.id === Number(id))

  if(!users){
    return <h1>User not found</h1>
  }

  return (
    <div>
        <h1>User Name: {users.name}</h1>
        <p>User Email: {users.email}</p>
    </div>
  )
}

export default User