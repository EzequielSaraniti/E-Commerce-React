import React, { useState, useEffect } from 'react'
import Items from "./Items.jsx"


export default function ItemList() {

    //estados
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);

    useEffect(() => {

        const cardProduct = new Promise((res, rej) => {
            setTimeout(() => {
                res([{ id: 1, title: "Yerbera y Azucarera", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deserunt, dolor nobis exercitationem nihil minima. ", price: 550, pictureUrl:"yerbera.jpg"},

                { id: 2, title: "Alfombra Llamita", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deserunt, dolor nobis exercitationem nihil minima. ", price: 450, pictureUrl:"alfombra.jpg"},

                { id: 3, title: "Atomizador", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deserunt, dolor nobis exercitationem nihil minima. ", price: 350, pictureUrl:"atomizador.jpg"},

                { id: 4, title: "Bolso de Mate", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deserunt, dolor nobis exercitationem nihil minima. ", price: 800, pictureUrl:"bolsodemate.jpg"},

                { id: 5, title: "Equipo de mate", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deserunt, dolor nobis exercitationem nihil minima. ", price: 650, pictureUrl:"equipodemate.jpg"},

                { id: 6, title: "Guante de horno", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deserunt, dolor nobis exercitationem nihil minima. ", price: 275, pictureUrl:"guantehorno.jpg"}]);

                // rej("No pudimos cargar los productos!!!!")
            }, 2000);
        },[]);


        //Si funciona usamos .then
        cardProduct
            .then((result) => {
                // setLoading(false);
                setResultado(result);
            })
            //Si tira error usamos .catch
            .catch((error) => {
                // setLoading(false);
                setError(true);
            })
            //Una ves terminado ponemos en False el Loading
            .finally(() => {
                setLoading(false);
            });
    }, []);

  return (
    <>

        <div>{loading && "Cargando productos..."}</div>
        <div>{error && "Tienes un error..."}</div>

        <div className='itemsListStyle'>
        {resultado && (resultado.map((item) => 
        <Items id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
        ))}
        </div>

    
    {/* <Items/> */}
    </>
  )
}

