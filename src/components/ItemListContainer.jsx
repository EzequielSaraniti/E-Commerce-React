import React from 'react'
import ItemList from "./ItemList.jsx"
import Loader from "./Loader.jsx"
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function ItemListContainer({ category }) {

    //estados
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);
    const {id } = useParams()

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
    }, [id])



    return (
        <>
            <div className='titleInicio'>Bienvenido/a a la mejor página de regalos - 10% de descuento solo pagos en Efectivo</div>

            {loading && <Loader />}

            <div>{error && "Tienes un error..."}</div>
            
            {resultado &&
            <div className='from-gray-100 bg-gradient-to-b'>
                <ItemList category={id} resultado={resultado} />
            </div>}

        </>
    )
}
