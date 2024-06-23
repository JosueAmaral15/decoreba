import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Login from "./pages/login-page";
import About from "./pages/About";


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/subscriptions" element={<Payment/>} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default App;