import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
const imgProductos = require.context("../img", true)

export default function Cart() {

  const {cart} = useContext(CartContext)

  return (
    <>
    <h4>Carrito de compras</h4>
    
    <div className='cartContainer'>

      <img className='imgProducto img-fluid' src={imgProductos(`./alfombra.jpg`)} alt={"Producto1"} width="70px" />
      <p className='titleCart'>Alfolmbra de Llamita</p>
      <p className='precioCart'>Precio: $100</p>
      <p className='cantidadCart'>Cantidad: 1</p>
      <p className='subtotalCart'>Subtotal: $100</p>
      <p className='eliminarItemCard'>X</p>

    </div>


    <button className='btnAddCar'>Finalizar Compra</button>
    <button className='btnAddCar'>Seguir Comprando</button>

    
    </>
  )
}
