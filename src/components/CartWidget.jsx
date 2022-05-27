
import React from 'react'
import imgComprar from "../img/comprar.png";


export default function CartWidget() {
    return (
        <div>
            <span className="cantidadCompras">1</span>
            <a href="#">
                <img src={imgComprar} width="30px" className="imgCarrito" />
            </a>
        </div>
    )
}
