import './App.css';
import React, { useState } from "react";
import HomePage from './Home/Home';
import NavBar from "./Components/NavBar";
import SearchPage from './Home/SearchPage/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
