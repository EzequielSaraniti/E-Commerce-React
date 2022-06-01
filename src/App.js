import logo from './logo.svg';
import NavBar from "./components/NavBar.jsx"
import React, { Component }  from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ItemListContainer from "./components/ItemListContainer.jsx"
import './App.css';



function App() {

  return (
  <div>
  <NavBar/>
  <ItemListContainer cars={"Bienvenido/a a la mejor página de regalos - 10% de descuento solo pagos en Efectivo"} />
  </div>
  
  );
}


export default App;
