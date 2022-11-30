import ItemCart from "./ItemCart";
import TotalPurchase from "./TotalPurchase";

const itemsList = [
    {id: 1, type: "Alimento para perros", brand: "Royal Canin", name: "Mini Adulto", price: 9830, weight: 7.5, img: "https://puppis.vteximg.com.br/arquivos/ids/190298-1000-1000/156177.jpg?v=638028354661430000"},
    {id: 2, type: "Alimento para gatos", brand: "Royal Canin", name: "Gato Indoor", price: 10528, weight: 7.5, img: "https://arcarosario.com/wp-content/uploads/2022/11/RC-Indoor-01.jpg"},
    {id: 3, type: "Collares lisos y estampados", name:"Collar liso", width: 1.5, length: 30, price: 126, img: "https://leocan.com.ar/wp-content/uploads/2022/05/collar-tibet-nylon-doble-rojo-para-perro-24pg-24-x-1pg-D_NQ_NP_555225-MLM25393127505_022017-F.jpg"}
]

export default function Cart() {

    return (
        <>
            <main className="min-h-[70vh] font-nunito flex flex-col items-center">
                <h2 className="text-2xl font-bold py-5">Carrito de Compras</h2>
                {/* acá va a ir el if para empty */}
                <div className="w-4/5 flex justify-between pt-5 pb-10">
                    <div className="w-[75%] text-center">
                        <div className="flex text-lg font-bold border-b-2 border-green">
                            <p className="w-[57%]">producto</p>
                            <p className="w-[18%]">cantidad</p>
                            <p className="w-[10%]">precio</p>
                            <p className="w-[10%]">subtotal</p>
                            <p className="w-[5%]"></p>
                        </div>
                        <div className="flex flex-col text-base">
                            {itemsList.map(item => <ItemCart item={item}/>)}
                        </div>
                    </div>
                    <TotalPurchase />
                </div>
            </main>
        </>
    )
}