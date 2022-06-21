import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
const imgProductos = require.context("../img", true)

export default function Cart() {

  const { cart, deleteItem, getItemQty, getItemPrice, emptyCart } = useContext(CartContext)


  return (
    <>
    <div className='centerCart'>
      <h4 className='titleCart'>Carrito de compras</h4>


      {getItemQty() > 0 ?

        <div className='cardCarrito'>
          <div className='tamanoTitleCart'>
            <div className='cartContainer'>
              <p className='cantidadCart'>Producto</p>
              <p className='precioCart'>Precio Unitario</p>
              <p className='subtotalCart'>Precio Total</p>
            </div>
          </div>
          {cart.map(product => (

            <div className='lineCart'>
              <div className='cartContainer'>
                <img className='imgProducto img-fluid' src={imgProductos(`./${product.pictureUrl}`)} alt={"Producto1"} width="70px" />
                <p className='cantidadCart'>{product.cantidad} x {product.title}</p>
                <p className='precioCart'>Precio: ${product.price}</p>
                <p className='subtotalCart'>Subtotal: ${product.cantidad * product.price}</p>
                <p onClick={() => deleteItem(product.id)} className='eliminarItemCard'><img className='imgBasura img-fluid' src={imgProductos(`./basura.png`)} alt={"Producto1"} width="30px" /></p>
              </div>
            </div>
          ))}


          <div className='impFinal'>
          <div className='labelTotal'>Importe total: ${getItemPrice()} ({getItemQty()} Producto/s)</div>

          <div>
            <button className='btnAddCar btnFinalC'>Finalizar Compra</button>
            <button className='btnVaciarCarrito' onClick={emptyCart}>Vaciar Carrito</button>
          </div>
          </div>
        </div>

        : <p>No hay productos en el carrito</p>}






</div>
    </>
  )
}
