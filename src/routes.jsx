import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/subscriptions" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default App;