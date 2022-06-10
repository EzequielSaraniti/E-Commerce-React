import NavBar from "./components/NavBar.jsx"
import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList.jsx';



function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          
        <Route path="/category/accesorios" element={<ItemListContainer category={"accesorios"} />} />
          
        <Route path="/category/pijamas" element={<ItemListContainer category={"pijamas"} />} />
          
        <Route path="/category/papeleria" element={<ItemListContainer category={"papeleria"} />} />
          
        <Route path="/category/regalos" element={<ItemListContainer category={"regalos"} />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App;
