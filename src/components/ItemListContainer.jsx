import React from 'react'
import ItemCount from "./ItemCount.jsx"

export default function ItemListContainer({cars}) {
    return (
        <div>

        <h6 className='titleInicio'>{cars}</h6>
        <ItemCount stock={5} initial={1} /> 

        </div>
    )
}
