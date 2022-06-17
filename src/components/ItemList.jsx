import React, { useState, useEffect } from 'react'
import Items from "./Items.jsx"
import {Route, useParams} from 'react-router-dom';


export default function ItemList({category, resultado}) {

    let filterResult = []
    //Filtramos por category
    if (category != undefined){
        filterResult = resultado.filter(num => num.category === category)
    } else {
        filterResult = resultado
    }


    return (
        <>

            <div className='itemsListStyle'>
                {filterResult && (filterResult?.map((item) =>
                    <Items id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />
                ))}
            </div>


            {/* <Items/> */}
        </>
    )
}

