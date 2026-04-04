import React, { useEffect, useRef, useState } from "react";
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
import UserDashboard from "./pages/UserDashboard";
import Effect1 from "./pages/Effect1";
import UploadFile from "./pages/UploadFile";
import socketClient from "socket.io-client";
import Chat from "./pages/chat";

const App = () => {
  // const [socket, setSocket] = useState("")
  let socket = useRef();
  let endpoint = "http://localhost:5001";
  useEffect(() => {
    socket.current = socketClient(endpoint);
  }, []);

  // console.log(socket.current);

  let token = localStorage.token;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<Navigate to="about" />} />
        <Route path="user/:id" element={<User />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<SignIn />} />
        <Route
          path="user-dashboard"
          element={token ? <UserDashboard /> : <Navigate to="/signin" />}
        />
        <Route path="effect" element={<Effect />} />
        <Route path="effect1" element={<Effect1 />} />
        <Route path="file" element={<UploadFile />} />
        <Route path="chat" element={<Chat socket={socket} />} />
        /**WildCard Route */
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
