import Items from "./Items.jsx";


export default function ItemList({ category, resultado, busqueda }) {


    let filterResult = []
    //Filtramos por category
    if (category != undefined) {
        filterResult = resultado.filter(num => num.category === category)
    } else {
        filterResult = resultado
    }


    const filteredProducts = filterResult.filter(
        product => {
            return (
                product
                    .title
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                product
                    .description
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
            );
        }
    )

    return (
        <>

            <div className='itemsListStyle'>
                {filteredProducts && (filteredProducts?.map((item) =>
                    <Items id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} key={item.id} />
                ))}
            </div>


            {/* <Items/> */}
        </>
    )
}

