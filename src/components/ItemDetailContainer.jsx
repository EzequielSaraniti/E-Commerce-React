import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

export default function ItemDetailContainer() {

    const [itemDet, itemDetailId] = useState()
    const {itemId } = useParams()
    

    useEffect(() => {

        fetch('../../productos.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {itemDetailId(data.filter(prod => prod.id == itemId))})
            .catch((e) => {
                console.log("salio mal")
            })
            .finally(() => {
                console.log("fin")
            })
    }, [itemId])


    return (
        <div>

            {itemDet && <ItemDetail itemDet={itemDet} />}

        </div>
    )
}
