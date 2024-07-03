import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProduct from './components/AllProduct';
import ProductDetail from './components/ProductDetail';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get('http://localhost:8080/')
  })
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<AllProduct/> } />
        <Route path="/product/:id" component={<ProductDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;