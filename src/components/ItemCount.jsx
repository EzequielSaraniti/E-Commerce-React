import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

export default function ItemCount({ stock, initial, onAdd, restar, sumar, cantSelect }) {


    return (
        <div className='centerCount'>

            <div className='agregarItems'>

                {/* BOTON RESTAR */}
                <button type='button' className='btnCard' onClick={restar}>-</button>

                {/* Input indicador de cantidas seleccionada */}
                <input className='inputCard' value={cantSelect} />

                {/* BOTON SUMAR */}
                <button type='button' className='btnCard' onClick={sumar}>+</button>
            </div>

            {/* Boton agregar al carrito */}
            <button type='button' className='btnAddCar' onClick={onAdd}>AGREGAR AL CARRITO</button>
            
        </div>
    )

}

