import React from 'react'
import ItemList from "./ItemList.jsx"
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
            <h6 className='titleInicio'>Bienvenido/a a la mejor página de regalos - 10% de descuento solo pagos en Efectivo</h6>

            {loading && 
            <div className='itemListLoading'>
                <svg className='loading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"></path>
                    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
                    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"></animateTransform>
                    </path></svg>
            </div>}

            <div>{error && "Tienes un error..."}</div>
            
            {resultado &&
            <div className='from-gray-100 bg-gradient-to-b'>
                <ItemList category={id} resultado={resultado} />
            </div>}

        </>
    )
}
