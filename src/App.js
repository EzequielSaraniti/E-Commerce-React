import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.jsx"
import React, { Component }  from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ItemListContainer from "./components/ItemListContainer.jsx"

function App() {


  return (
  <div>
  <NavBar/>
  <ItemListContainer cars={"Bienvenido/a a la mejor página de Rosario"} />
  </div>
  
  
  );
}

export default App;
