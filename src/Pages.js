import React from 'react';
import {Routes, Route}from 'react-router-dom'; 
import Payment from './components/Payment';
import Login from './components/Login';
const Pages = () => {
    
    return (
      <div>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/login" exact element={<Login />} />
       </Routes>

      </div>
       
    )
};

export default Pages;