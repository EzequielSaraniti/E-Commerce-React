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

            {itemDet && (itemDet?.map((item) => 
                <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />
            ))}

        </div>
    )
}
