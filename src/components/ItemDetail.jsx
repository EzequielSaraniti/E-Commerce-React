import React from 'react'
import ItemCount from './ItemCount.jsx';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const imgProductos = require.context("../img", true)

export function ItemDetail({id, title, description, price, pictureUrl, stock}) {

  const [valorInicial, setCantidad] = useState(1)
  const [stockArticulos, setStock] = useState(stock)
  const [articulosAgregados, setArtAdd] = useState(0)

  return (
    <div className='cardDetalles'>
    
        {/* Imagen del producto */}
        <div className='imgProductoDetail'>
        <img className='imgProducto img-fluid' src={imgProductos(`./${pictureUrl}`)} alt={"Producto1"} max-width="550px" />
        </div>
        
        <h4 className='titleDetails'>{title}</h4>

        <p className='textDetails'>{description}</p>



        <div className='precioDetails'>

        {articulosAgregados === 0 && <b>Precio: ${price}</b>}

          {articulosAgregados === 0 && 
          <ItemCount stock={stock} initial={1} onAdd={addToCart} restar={restar} sumar={sumar} cantSelect={valorInicial} />}

          {articulosAgregados > 0 && <Link className='btnAddCar' to={`/cart`}>Finalizar Compra</Link>}

          

          {/* Stock restante */}
          {articulosAgregados === 0 && <p>Cant. Disponible: {stock}</p>}

        </div>

    </div>
  )

  function addToCart(){
    if (stockArticulos - valorInicial >= 0){
        alert("Se agregaron " + valorInicial + " Items al carrito")
        setArtAdd(valorInicial)
        setStock(stockArticulos - valorInicial)
    }else{
        alert("No hay stock, quedan "+ stockArticulos +" unidades")
    }
}

function restar(){
  {valorInicial > 1 && setCantidad(valorInicial - 1)}
}

function sumar(){
  {valorInicial < stock && setCantidad(valorInicial + 1)}
}


}
