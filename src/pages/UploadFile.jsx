import axios from 'axios'
import React, { useState } from 'react'

const UploadFile = () => {
    let url = "http://localhost:5001/user/upload"
    const [file, setfile] = useState("")
    const changeFile = (e) =>{
        console.log(e.target.files[0])
        let image = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = () =>{
            console.log(reader.result)
            setfile(reader.result)
        }

        // let song = new Audio("skelewu.mp3")
        // song.play()
    }

    const handleUpload = () =>{
            axios.post(url, {file})
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
  return (
    <div>
        <h1>File Upload</h1>

        <input type="file" onChange={(e)=>changeFile(e)}/>
        <button onClick={handleUpload} className='btn btn-info'>Upload File</button>
    </div>
  )
}

export default UploadFile