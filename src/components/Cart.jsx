import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
const imgProductos = require.context("../img", true)

export default function Cart() {

  const {cart, deleteItem, getItemQty, getItemPrice} = useContext(CartContext)


  return (
    <>
    <h4>Carrito de compras</h4>
    

    {cart.map(product => ( 
    
    <div className='lineCart'>
    <div className='cartContainer'>
      <img className='imgProducto img-fluid' src={imgProductos(`./${product.pictureUrl}`)} alt={"Producto1"} width="70px" />
      <p className='titleCart'>{product.title}</p>
      <p className='precioCart'>Precio: ${product.price}</p>
      <p className='cantidadCart'>Cantidad: {product.cantidad}</p>
      <p className='subtotalCart'>Subtotal: ${product.cantidad * product.price}</p>
      <p onClick={() => deleteItem(product.id)} className='eliminarItemCard'><img className='imgBasura img-fluid' src={imgProductos(`./basura.png`)} alt={"Producto1"} width="30px" /></p>
    </div>
    </div>
    ))}

      <p>PRODUCTOS TOTALES: {getItemQty()}</p>
      <p>TOTAL A PAGAR: ${getItemPrice()}</p>


    <button className='btnAddCar'>Finalizar Compra</button>
    <button className='btnAddCar'>Seguir Comprando</button>

    
    </>
  )
}
