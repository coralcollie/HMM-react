import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './pages/service';
import Container from './pages/container';
import AboutHMM from './pages/aboutHMM';
import Main from './pages/main';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/aboutHMM' element={<AboutHMM/> } />
      <Route path='/container' element={<Container/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/service' element={<Service/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
