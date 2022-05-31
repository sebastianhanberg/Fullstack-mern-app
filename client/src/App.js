import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';


const App = () => {
 

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
