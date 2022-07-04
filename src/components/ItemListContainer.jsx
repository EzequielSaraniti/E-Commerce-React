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
    const { id } = useParams()
    const [busqueda, setBusqueda] = useState("")

    //firebase
    const coleccion = "items"
    const db = getFirestore()

    const coleccionDeProductos = collection(db, coleccion)

    useEffect(() => {

        getDocs(coleccionDeProductos).then((res) => {
            setResultado(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            setLoading(false)
        })

    }, [id])



    return (
        <>
            <div className='titleInicio'>Bienvenido/a a la mejor página de regalos - 10% de descuento solo pagos en Efectivo</div>
        <div className='impFinal'>
            <div className="input-group mb-3 search">
                <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></span>
                <input onChange={(e) => setBusqueda(e.target.value)} type="text" className="form-control" placeholder="Busca tu producto" aria-label="Search" aria-describedby="basic-addon1" />
            </div>
        </div>

            {loading && <Loader />}

            {resultado &&
                <div>
                    <ItemList category={id} resultado={resultado} busqueda={busqueda} />
                </div>}

        </>
    )
}
