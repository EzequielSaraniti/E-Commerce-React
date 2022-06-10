import React, { useState, useEffect } from 'react'
import Items from "./Items.jsx"
import {Route, useParams} from 'react-router-dom';


export default function ItemList({category}) {

    //estados
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);

    useEffect(() => {

        fetch('productos.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {

                setTimeout(() => {

                    setLoading(false)
                    setResultado(data);

                }, 1000);
            })
            .catch((e) => {

            //este fetch es para arreglar un problema de rutas, cuando usemos FireBase Vuelta todo este contenido.
                fetch('../productos.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {

                setTimeout(() => {

                    setLoading(false)
                    setResultado(data);

                },0);
            })
             //BORRAR Hasta acá.
            })
            .finally(() => {
                console.log("fin")
            })
    }, [])


    let filterResult = []
    //Filtramos por category
    if (category != undefined){
        filterResult = resultado.filter(num => num.category === category)
    } else {
        filterResult = resultado
    }


    return (
        <>

            <div>{loading && "Cargando productos..."}</div>
            <div>{error && "Tienes un error..."}</div>

            

            <div className='itemsListStyle'>
                {filterResult && (filterResult.map((item) =>
                    <Items id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />
                ))}
            </div>


            {/* <Items/> */}
        </>
    )
}

