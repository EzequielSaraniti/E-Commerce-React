import React from 'react'
const imgProductos = require.context("../img", true)

export function ItemDetail({id, title, description, price, pictureUrl, stock}) {
  return (
    <div className='cardDetalles'>
    
        {/* Imagen del producto */}
        <div className='imgProductoDetail'>
        <img className='imgProducto img-fluid' src={imgProductos(`./${pictureUrl}`)} alt={"Producto1"} max-width="550px" />
        </div>
        
        <h4 className='titleDetails'>{title}</h4>

        <p className='textDetails'>{description}</p>

        <div className='precioDetails'>
        <b>Precio: ${price}</b>
        <br />
        <button>Añadir al Carrito</button>
        </div>

    </div>
  )
}
