import React from 'react'
import ItemCount from "./ItemCount.jsx"
import {Link, useParams} from 'react-router-dom';

const imgProductos = require.context("../img", true)

export default function Items({ id, title, description, price, pictureUrl, stock }) {

    return (
        //Card
        <div className='cardH'>

            {/* Imagen del producto */}
            <img className='imgProducto' src={imgProductos(`./${pictureUrl}`)} alt={"Producto1"} width="300px" />

            {/* Titulo de producto */}
            <b className='styleTitle'>{title}</b>

            {/* Breve desc del producto */}
            <p className='descItem'>{description}</p>

            {/* Precio del producto */}
            <p>${price}</p>

            {/* Boton mas detalles */}
            {/* <button type='button' className='btnAddCar'>Detalles</button> */}
            <Link className='btnAddCar' to={`/item/${id}`}>VER MAS DETALLE DEL PRODUCTO</Link>

        </div>

    )
}
