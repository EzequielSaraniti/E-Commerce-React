import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
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

            
            <div className='lineCart' key={product.id}>
              <div className='cartContainer'>
                <img className='imgProducto img-fluid' src={product.pictureUrl} alt={"Producto1"} width="70px" />
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
          <Link className='btnAddCar btnFinalC' to={`/checkout`}>Finalizar Compra</Link>
            <button className='btnVaciarCarrito' onClick={emptyCart}>Vaciar Carrito</button>
          </div>
          </div>
        </div>

        : 
        
        <div className='noHayCompras'>
        <p>No hay productos en el carrito</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <Link to="/"><button className='btnIrDeCompras'>Ir de compras</button></Link>
        </div>
        }

</div>
    </>
  )
}
