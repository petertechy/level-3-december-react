import { useState } from 'react'

import './App.css'

function App() {

  const [text , setText] = useState()
  const [todos, setTodos] = useState([])

  const AddToDo = () => {
    // console.log(todo);
    setTodos([...todos, text])
    console.log(todos);
    
  }


  return (
    <>
     <h1>Todo</h1>

     <input type="text"
     onChange={(e) => setText(e.target.value)}

     />
     <button onClick={AddToDo}>Add to todo</button>
     {
      todos.map((texts)=>
        <div key={texts.id}>
          <h1>{texts}</h1>
        </div>
     )}
    </>
  )
}

export default App
