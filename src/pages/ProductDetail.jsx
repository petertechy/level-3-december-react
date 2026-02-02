import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const ProductDetail = () => {
  const {id} = useParams()
  const [theProduct, setTheProduct] = useState({})

  console.log(id);

  useEffect(()=>{
  axios.get(`https://dummyjson.com/products/${id}`).then((data)=>{setTheProduct(data.data), console.log(data)}
  )
  },[id])
  
  

  return (
    <div>ProductDetail

    <h1>{theProduct.title}</h1>
   <img src={theProduct.images?.[0]} alt={theProduct.title || ''} />
    </div>
  )
}

export default ProductDetail