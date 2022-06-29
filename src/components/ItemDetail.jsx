import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import ItemCount from './ItemCount.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function ItemDetail({ itemDet }) {

  //Hooks
  const { id, title, description, price, pictureUrl, stock } = itemDet
  const { isInCart, addItem, notifySucess, notifyError } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1)
  const [stockArticulos, setStock] = useState(stock)
  const [articulosAgregados, setArtAdd] = useState(0)


  // Funciones
  function onAdd() {
    if (stockArticulos - cantidad >= 0) {
      setArtAdd(cantidad)
      addItem(itemDet, cantidad)

      //controlamos la cantidad de articulos agregados
      setStock(stockArticulos - cantidad)
    } else {
      notifyError("No hay stock, quedan " + stockArticulos + " unidades")
    }
  }

  function restar() {
    { cantidad > 1 && setCantidad(cantidad - 1) }
  }

  function sumar() {
    { cantidad < stock && setCantidad(cantidad + 1) }
  }



  return (
    <div className='cardDetalles'>

      {/* Imagen del producto */}
      <div className='imgProductoDetail'>
        <img className='imgProducto img-fluid' src={pictureUrl} alt={"Producto1"} />
      </div>

      <h4 className='titleDetails'>{title}</h4>

      <p className='textDetails'>{description}</p>



      <div className='precioDetails'>

        {articulosAgregados === 0 &&
          <div>
            {/* Precio del producto */}
            <b className='priceAnt'>${price * 1.20}</b><b className='priceDesp'>${price}</b>
          </div>}

        {/* Stock restante */}
        {articulosAgregados === 0 && <p className='uDisp'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-angle" viewBox="0 0 16 16">
          <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
        </svg> {stock} Disponibles</p>}

        <ToastContainer />

        {articulosAgregados === 0 &&
          <ItemCount stock={stock} initial={1} onAdd={onAdd} restar={restar} sumar={sumar} cantSelect={cantidad} />}

        {articulosAgregados > 0 && <Link className='btnAddCar' to={`/cart`}>FINALIZAR COMPRA</Link>}
        {articulosAgregados > 0 && <Link className='btnSeguirC' to={`/`}>Seguir comprando</Link>}

      </div>

    </div>
  )


}
