import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import Loader from "./Loader.jsx";

export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);
    const [itemDet, itemDetailId] = useState()
    const {itemId } = useParams()

    //Firestore
    const coleccion = 'items'
    const db = getFirestore()
    const detalleProducto = doc(db, coleccion, itemId)

    useEffect(() => {

        getDoc(detalleProducto).then((res) => {
            if (res.exists()) {
                itemDetailId({ ...res.data(), id: res.id})
                setLoading(false)
            } else{
                console.log('No existe')
            }

    })}, [itemId])


    return (
        <div>

            {loading && <Loader />}

            {itemDet && <ItemDetail itemDet={itemDet} />}

        </div>
    )
}
