import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

export default function ItemDetailContainer() {

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
            } else{
                console.log('No existe')
            }

    })}, [itemId])


    return (
        <div>

            {itemDet && <ItemDetail itemDet={itemDet} />}

        </div>
    )
}
