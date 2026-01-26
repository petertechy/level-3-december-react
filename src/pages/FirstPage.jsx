import React, { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Child from "./components/Child";
import Display from "./components/Display";
import Control from "./components/Control";

const FirstPage = () => {
  let myName = "Moses";
  let age = 24;
  let myStyle = {
    fontFamily: "cursive",
    color: "blue",
    fontSize: "4rem"
  };

  const [count, setcount] = useState(10)
  return (
    <>
    <Navbar/>

    <div className="text-center">
      <Display count={count}/>
      <Control increaseCount={()=>setcount(count+1)}/>
    </div>



    <div className="d-flex flex-wrap justify-content-center gap-4">
    <Child title="Child 1" subtitle="Hello, I am child 1" image="https://images.unsplash.com/photo-1768108662268-583d5d29b8b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"/>
    <Child title="Child 2" subtitle="Hello, I am child 2" image="https://images.unsplash.com/photo-1768108662268-583d5d29b8b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"/>
    <Child title="Child 3" subtitle="Hello, I am child 3" image="https://images.unsplash.com/photo-1768108662268-583d5d29b8b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"/>
    <Child title="Child 4" subtitle="Hello, I am child 4" image="https://images.unsplash.com/photo-1768108662268-583d5d29b8b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"/>
    </div>


    <Hero/>
      <div>
        <h1 style={{ fontFamily: "cursive", color: "green" }}>
          Good Morning {myName}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque
          reiciendis quibusdam dignissimos nulla veritatis perferendis
          cupiditate accusamus. Sequi nulla aut error deserunt sed magnam
          sapiente recusandae dolorem sint? Libero?
        </p>
      </div>

      <div>
        <h1 style={myStyle}>Good Morning - {age}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque
          reiciendis quibusdam dignissimos nulla veritatis perferendis
          cupiditate accusamus. Sequi nulla aut error deserunt sed magnam
          sapiente recusandae dolorem sint? Libero?
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default FirstPage;
