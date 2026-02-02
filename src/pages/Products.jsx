import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components/Loading";
import { Loader2 } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  // if (products.length == 0) {
  //   return <Loading/>
   
  // }

    
  return (
    <>
      <h1>Products</h1>
      
      <div>
        {products.length == 0? <Loading/> :  products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.images[0]} alt="" />
            <Link to={`/productdetail/${product.id}`}>See More</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
