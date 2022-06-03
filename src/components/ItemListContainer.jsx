import React from 'react'
import ItemList from "./ItemList.jsx"

export default function ItemListContainer({cars}) {
    return (
        <div>

        <h6 className='titleInicio'>{cars}</h6>
        <ItemList/>

        </div>
    )
}
