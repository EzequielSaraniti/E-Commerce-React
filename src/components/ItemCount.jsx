import React, { useState, useEffect } from 'react'

const imgProductos = require.context("../img", true)


export default function ItemCount({ stock, initial, onAdd }) {


    const [X, setX] = useState(initial)


    return (
        <div className='cardH'>
            <img className='imgProducto' src={ imgProductos(`./yerbera.jpg`) } alt={ "Producto1" } width="190px" />
            <p>Yerbera y Azucarera</p>
            <div className='agregarItems'>
                <button type='button' className='btnCard' onClick={() => {

                    if (X > 1) {
                        setX(X - 1)
                    }

                }}>-</button>
                <input className='inputCard' value={X} />
                <button type='button' className='btnCard' onClick={() => {
                    if (X < stock) {
                        setX(X + 1)
                    }
                }}>+</button>
            </div>
            <button type='button' className='btnAddCar' onClick={() => { onAddItem(X) }}>Agregar al carrito</button>
        </div>
    )
}

function onAddItem(X) {
    alert("Se agregaron " + X + " Items al carrito")
}
