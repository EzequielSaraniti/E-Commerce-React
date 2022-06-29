import Items from "./Items.jsx";


export default function ItemList({category, resultado}) {


    let filterResult = []
    //Filtramos por category
    if (category != undefined){
        filterResult = resultado.filter(num => num.category === category)
    } else {
        filterResult = resultado
    }

    return (
        <>
        
            <div className='itemsListStyle'>
                {filterResult && (filterResult?.map((item) =>
                    <Items id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} key={item.id} />
                ))}
            </div>


            {/* <Items/> */}
        </>
    )
}

