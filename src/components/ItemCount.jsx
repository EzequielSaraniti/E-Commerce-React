import React, { useState, useEffect } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {


    const [valorInicial, setCantidad] = useState(initial)
    const [stockArticulos, setStock] = useState(stock)


    return (
        <div className='centerCount'>

            <div className='agregarItems'>

                {/* BOTON RESTAR */}
                <button type='button' className='btnCard' onClick={() => 
                    {valorInicial > 1 && setCantidad(valorInicial - 1)}}>-</button>

                {/* Input indicador de cantidas seleccionada */}
                <input className='inputCard' value={valorInicial} />

                {/* BOTON SUMAR */}
                <button type='button' className='btnCard' onClick={() => 
                    {valorInicial < stock && setCantidad(valorInicial + 1)}}>+</button>
            </div>

            {/* Boton agregar al carrito */}
            <button type='button' className='btnAddCar' onClick={addToCart}>Agregar al carrito</button>

        </div>
    )

  function addToCart(){
        if (stockArticulos - valorInicial >= 0){
            alert("Se agregaron " + valorInicial + " Items al carrito")
            setStock(stockArticulos - valorInicial)
        }else{
            alert("No hay stock, quedan "+ stockArticulos +" unidades")
        }
    }

}

