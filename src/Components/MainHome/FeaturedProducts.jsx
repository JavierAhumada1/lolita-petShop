import CardProduct from "../CardsProducts/CardProduct";

export default function FeaturedProducts() {
    const foodList = [
        {id: 1, type: "Alimento para perros", brand: "Royal Canin", name: "Mini Adulto", price: 9830, weight: 7.5, img: "https://puppis.vteximg.com.br/arquivos/ids/190298-1000-1000/156177.jpg?v=638028354661430000"},
        {id: 2, type: "Alimento para gatos", brand: "Royal Canin", name: "Gato Indoor", price: 10528, weight: 7.5, img: "https://arcarosario.com/wp-content/uploads/2022/11/RC-Indoor-01.jpg"},
        {id: 3, type: "Alimento para perros", brand: "Royal Canin", name: "Mini Adulto", price: 9830, weight: 7.5, img: "https://puppis.vteximg.com.br/arquivos/ids/190298-1000-1000/156177.jpg?v=638028354661430000"},
        {id: 4, type: "Alimento para gatos", brand: "Royal Canin", name: "Gato Indoor", price: 10528, weight: 7.5, img: "https://arcarosario.com/wp-content/uploads/2022/11/RC-Indoor-01.jpg"}
    ]

    return (
        <>
            <div className="font-nunito flex flex-col py-10 items-center">
                <h2 className='bg-black rounded-2xl text-white text-2xl font-bold uppercase self-center py-2 px-6 lg:px-20'>Productos <span className="text-green">destacados</span></h2>
                <div className="w-4/5 flex justify-center flex-wrap pt-10 gap-10">
                    {foodList.map(product => <CardProduct product={product} />)}
                </div>
            </div>
        </>
    );
}
