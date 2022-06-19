import React from 'react'
import ItemCount from './ItemCount.jsx';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
const imgProductos = require.context("../img", true)


export function ItemDetail({itemDet}) {


  const [{id, title, description, price, pictureUrl, stock}] = itemDet

  const {isInCart, addItem} = useContext(CartContext)


  const [cantidad, setCantidad] = useState(1)
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
          <ItemCount stock={stock} initial={1} onAdd={onAdd} restar={restar} sumar={sumar} cantSelect={cantidad} />}

          {articulosAgregados > 0 && <Link className='btnAddCar' to={`/cart`}>Finalizar Compra</Link>}

          

          {/* Stock restante */}
          {articulosAgregados === 0 && <p>Cant. Disponible: {stock}</p>}

        </div>

    </div>
  )

  function onAdd(){
    if (stockArticulos - cantidad >= 0){
        isInCart(id)
        addItem(itemDet, cantidad)

        //controlamos la cantidad de articulos agregados
        setArtAdd(cantidad)
        setStock(stockArticulos - cantidad)
    }else{
        alert("No hay stock, quedan "+ stockArticulos +" unidades")
    }
}

function restar(){
  {cantidad > 1 && setCantidad(cantidad - 1)}
}

function sumar(){
  {cantidad < stock && setCantidad(cantidad + 1)}
}


}
