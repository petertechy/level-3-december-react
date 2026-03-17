import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import User from "./components/User";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Effect from "./components/Effect";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";




const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<Navigate to="about" />} />
        <Route path= "user/:id" element={<User/>}/>
        <Route path="/productdetail/:id" element={<ProductDetail/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="dashboard" element={<Dashboard/>}>
        <Route path="profile" element={<Profile/>}/>
        <Route path="settings" element={<Settings/>}/>
        </Route>
        <Route path="signup" element={<Signup/>}/>
        <Route path="signin" element={<SignIn/>}/>

        <Route path="effect" element={<Effect/>}/>

        /**WildCard Route */
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
