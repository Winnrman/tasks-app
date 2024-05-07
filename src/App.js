
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import LoginView from './components/LoginView';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/login" element={<LoginView/>} />

      </Routes>
    </Router>
  );
}

export default App;
