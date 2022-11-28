export default function CardProduct({product}) {

    return (
        <>
            <div className="w-[18rem] flex flex-col shadow-lg font-nunito rounded-lg">
                <img className="w-full self-center" src={product.img} alt="product"/>
                <div className="h-[10rem] flex flex-col items-center justify-between">
                    <h6 className="text-xs uppercase text-dark-grey">{product.type}</h6>
                    <div className="flex flex-col items-center">
                        <h4 className="text-base font-bold">{product.brand}</h4>
                        <h5 className="text-base">{product.name} {product.weight}kg</h5>
                        <p className="text-xl font-extrabold">${product.price}</p>
                    </div>
                    <div className="w-full bg-green flex justify-center p-2 rounded-b-lg">
                        <p className="font-bold uppercase">Comprar</p>
                    </div>
                </div>
            </div>
        </>
    )
}