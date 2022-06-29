import { Link } from 'react-router-dom';

const imgProductos = require.context("../img", true)

export default function Items({ id, title, price, pictureUrl, stock }) {

    return (
        //Card
        <div className='cardH zoom'>

            <div className='sizeImg'>
            {/* Imagen del producto */}
            <Link to={`/item/${id}`}><img className='imgProducto' src={pictureUrl} alt={"Producto1"} width="300px" /></Link>
            </div>

            {/* Titulo de producto */}
            <b className='styleTitle'>{title}</b>

            {/* Breve desc del producto
            <p className='descItem'>{description}</p> */}

            <div>
                {/* Precio del producto */}
                <b className='priceAnt'>${price * 1.20}</b><b className='priceDesp'>${price}</b>
            </div>

            {/* Boton mas detalles */}
            {/* <button type='button' className='btnAddCar'>Detalles</button> */}
            <Link className='btnDetalle' to={`/item/${id}`}>Ver detalle del producto <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-down-left-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.096 3.146a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z" />
            </svg></Link>

        </div>

    )
}
