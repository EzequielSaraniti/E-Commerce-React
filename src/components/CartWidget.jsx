
import React from 'react'
import imgComprar from "../img/comprar.png";


export default function CartWidget({items}) {
    return (
        <div>
            <span className="cantidadCompras">{items}</span>
            <a href="#">
                <img src={imgComprar} width="30px" className="imgCarrito" />
            </a>
        </div>
    )
}
