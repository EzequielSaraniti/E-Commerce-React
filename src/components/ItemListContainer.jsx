import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList.jsx"
import Loader from "./Loader.jsx"

export default function ItemListContainer() {

    //estados
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);
    const {id} = useParams()

    //firebase
    const coleccion = "items"
    const db = getFirestore()

    const coleccionDeProductos = collection(db, coleccion)

    useEffect(() => {

        getDocs(coleccionDeProductos).then((res)=>{
            setResultado(res.docs.map((doc) => ({ id: doc.id, ...doc.data()} )))
            setLoading(false)
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
