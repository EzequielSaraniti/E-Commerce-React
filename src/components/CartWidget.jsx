
import React from 'react'
import imgComprar from "../img/comprar.png";
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';


export default function CartWidget() {

    const {getItemQty} = useContext(CartContext)

    return (
        <div>
            {getItemQty() > 0 && <span className="cantidadCompras">{getItemQty()}</span>}
            
            <a href="#">
                <img src={imgComprar} width="30px" className="imgCarrito" />
            </a>
        </div>
    )
}
