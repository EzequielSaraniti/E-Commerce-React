import Items from "./Items.jsx";


export default function ItemList({ category, resultado, busqueda, loading }) {


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

    const filterCount = filteredProducts.length


    return (
        <>
            {filterCount == 0 & loading == false &&
                <div className='lineCart'>
                    <div className='noResults'>
                        <b className="titleT">No se encontraron resultados</b>
                        <p className="titleT">Podes contultar el producto que buscas vía whatsapp</p>
                        <a className="btnContacto" target={"_blank"} href="https://wa.me/5493415786682?text=Hola%20me%20gustaría%20contactarme%20con%20ustedes!">Contactanos</a>
                        <img src="https://www.gifsanimados.org/data/media/1343/mercado-imagen-animada-0034.gif" border="0" alt="mercado-imagen-animada-0034" />
                    </div>
                </div>
            }


            <div className='itemsListStyle'>
                {filteredProducts && (filteredProducts?.map((item) =>
                    <Items id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} key={item.id} />
                ))}
            </div>

            {/* <Items/> */}
        </>
    )
}

