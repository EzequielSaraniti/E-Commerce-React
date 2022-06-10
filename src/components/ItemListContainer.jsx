import React from 'react'
import ItemList from "./ItemList.jsx"

export default function ItemListContainer({ category }) {
    return (
        <div>

            <h6 className='titleInicio'>Bienvenido/a a la mejor página de regalos - 10% de descuento solo pagos en Efectivo</h6>
            <div className='from-gray-100 bg-gradient-to-b'>
                <ItemList category={category} />
            </div>

        </div>
    )
}
