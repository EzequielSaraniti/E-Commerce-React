import NavBar from "./components/NavBar.jsx"
import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import Cart from "./components/Cart.jsx"
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList.jsx';
import MyProvider from "./context/CartContext.jsx";



function App() {

  return (
    <div>
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          
          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="*" element={<ItemListContainer />} />

          </Routes>
        </MyProvider>
      </BrowserRouter>
    </div>  

  );
}


export default App;
