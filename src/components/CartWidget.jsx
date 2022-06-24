
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import imgComprar from "../img/comprar.png";


export default function CartWidget() {

    const {getItemQty} = useContext(CartContext)

    return (
        <div>
            {getItemQty() > 0 && <Link to={`/cart`}><span className="cantidadCompras">{getItemQty()}</span></Link>}
            
            {getItemQty() > 0 && <Link to={`/cart`}><img src={imgComprar} width="30px" className="imgCarrito" /></Link>}
            
            {getItemQty() == 0 && <Link to={`/cart`}><img src={imgComprar} width="30px" className="imgCarrito" /></Link>}

        </div>
    )
}
